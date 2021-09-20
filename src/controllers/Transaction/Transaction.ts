import { TransactionService } from "../../services/DB/Ethers/Transactions/Transactions";

export class TransactionContorller {

    transactionService = new TransactionService();
    constructor () {}

    async createTransaction (transactions) {
        return await this.transactionService.createTransaction(transactions)
            .catch((error) => {
                console.error(error);
                throw false;
            });
    }

    async getTransactions (filter) {
        return await this.transactionService.getTransaction(filter)
            .catch((error) => {
                console.error(error);
                throw false;
            });
    }

    async getTransactionByFromAndTo ({origin, address}) {
        const filter = {};
        if (origin === 'to') {
            filter['to'] = address;
        } else  {
            filter['from'] = address
        }

        return await this.transactionService.getTransactionByFromAndTo(filter)
            .catch((error) => {
                console.error(error);
                throw false;
            });
    }
}