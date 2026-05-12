import { ITwitProp } from './twit.types';


export class TwitsService {
	async createTwit(twit: ITwitProp) {
		return await twit; 
	}
}