import { Router } from 'express';
import { TwitsService } from './twit.service.js';
import {authMiddleware } from '../middlewares/auth.middleware.js'

const router = new Router(); 
const twitsService = new TwitsService(); 


router.post('/twits', authMiddleware, async (req, res) => {
	if(!req.body?.text?.length){
		 
		res.status(400).json({message: 'Text is required'})
	}
	const twit = await twitsService.createTwit(req.body); 
	res.status(201).json(twit)
})

export const TwitsRouter = router; 