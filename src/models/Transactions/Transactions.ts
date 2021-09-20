import * as mongoose from 'mongoose';
import { ITransaction } from './ITransactions';

interface ITransactionModel extends ITransaction, mongoose.Document {}

const transactionSchema = new mongoose.Schema({
    accessList: [{type: Object, default: null}],
    blockHash: { type: String },
    blockNumber: { type: Number},
    chainId: { type: Number},
    confirmations: { type: Number},
    creates: { type: String },
    data: { type: String },
    from: { type: String },
    gasLimit: { BigNumber: { type: String } },
    gasPrice: { BigNumber: { type: String } },
    hash: { type: String },
    nonce: { type: Number},
    r: { type: String },
    s: { type: String },
    to: { type: String },
    transactionIndex: { type: Number},
    type: { type: Number},
    v: { type: Number},
    value: { type: String }, 
});

const Transaction = mongoose.model<ITransactionModel>('Transaction', transactionSchema);
export = Transaction;