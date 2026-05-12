"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const twit_controller_js_1 = require("./twits/twit.controller.js");
const profile_controller_js_1 = require("./views/profile.controller.js");
//import { authMiddleware } from "../src/middlewares/auth.middleware";
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
//import { fileURLToPath } from 'url';
dotenv_1.default.config();
//const __filename = fileURLToPath(import.meta.url)
//const __dirname = path.dirname(__filename); 
const app = (0, express_1.default)();
app.use(express_1.default.json());
// если глобально миддлваре ставим
//app.use(authMiddleware); 
app.set('views', path_1.default.join(__dirname, 'views'));
app.set('view engine', 'ejs');
async function main() {
    app.use((err, req, res, next) => {
        console.log(err.stack);
        res.status(500).send('Что-то пошло не так...');
    });
    app.use("/api", twit_controller_js_1.TwitsRouter);
    // шаблонизатор ejs
    app.get("/profile", profile_controller_js_1.profileView);
    app.get('/error', (req, res) => {
        throw new Error('This is test error!');
    });
    app.listen(process.env.PORT || 4200, () => {
        console.log("Server is running..." + process.env.PORT);
    });
}
main();
//# sourceMappingURL=server.js.map