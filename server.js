import express from 'express'; 
import { TwitsRouter } from "./src/twits/twit.controller.js"; 
import { profileView } from './src/views/profile.controller.js'; 
import { authMiddleware } from "./src/middlewares/auth.middleware.js";

import dotenv from 'dotenv'; 
import path from 'path'; 
import { fileURLToPath } from 'url';


dotenv.config(); 

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename); 

const app = express(); 
app.use(express.json())

// если глобально миддлваре ставим
//app.use(authMiddleware); 

app.set('views', path.join(__dirname, '/src/views'))
app.set('view engine', 'ejs')

async function main() {


	app.use((err, req, res, next) => {
		console.log(err.stack); 
		res.status(500).send('Что-то пошло не так...')
	})

	 
	app.use("/api", TwitsRouter); 


	// шаблонизатор ejs
	app.get("/profile", profileView);

	app.get('/error', (req, res) => {
		throw new Error('This is test error!')
	})

	app.listen(process.env.PORT || 4200, () => {
		console.log("Server is running..." + process.env.PORT);
	})
}
 
main(); 