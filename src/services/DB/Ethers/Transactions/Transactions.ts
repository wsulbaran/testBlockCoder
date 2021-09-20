import * as Transaction from '../../../../models/Transactions/Transactions';

export class TransactionService {

    fields = {
        value:1,
        v: 1,
        blockHash: 1,
        blockNumber: 1,
        confirmations: 1,
        from: 1,
        to: 1,
        hash: 1,
        type: 1,
    };
    constructor() {}

    async createTransaction (transaction) {
        return await Transaction.create(transaction)
        .catch((error) => {
            console.error(error);
            throw false;
        })
    }

    async getTransaction (filter) {
        const find = {
            $or: [
                { blockNumber: Number(filter) },
                { hash: filter},
                { from: filter},
                { to: filter}
            ]
        };
        return await Transaction.find(find, this.fields)
        .catch((error) => {
            console.error(error);
            throw false; 
        })
    }

    async  getTransactionByFromAndTo (filter) {
        return await Transaction.find(filter, this.fields)
        .catch((error) => {
            console.error(error);
            throw false; 
        })
    }
}