import { Router, Request, Response } from 'express';
import { TransactionContorller } from '../../controllers/Transaction/Transaction';


export class ApiRouter { 
    transactionController = new TransactionContorller();
    constructor() {}

    route () {
        const router: Router = Router(); 

        router.post('/transactions/address', async (req: Request, res: Response) => {            
            await this.transactionController.getTransactionByFromAndTo(req.body)
            .then((transactions) => {
                res.status(200).json({
                    origin:req.body.origin,
                    data: transactions
                })
            })
            .catch((error) => {
                res.status(200).json({
                    error
                })
            })

        });

        router.post('/transactions', async (req: Request, res: Response) => {
            const filter = req.body.filter;
            await this.transactionController.getTransactions(filter)
            .then((transactions) => {
                res.status(200).json({
                    filter,
                    data: transactions
                })
            })
            .catch((error) => {
                res.status(200).json({
                    error
                })
            })

        });
        return router;
    }
}


