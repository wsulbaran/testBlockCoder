import {Request, Response} from 'express';

export function validateBodyTransactions (req: Request, res: Response, next) {
    console.log(req.params);
    
    if (!req.params['filter'] || req.params['filter'].length === 0 || typeof req.params['filter'] !== 'string') {
        res.status(200).json({message: 'the value of key is empty or undefine'})
    }
    next();
}