import * as mongoose from 'mongoose';
import { IBlockEther } from './IBlockEthers';

interface IBlockEtherModel extends IBlockEther, mongoose.Document {}

const blockEtherSchema = new mongoose.Schema({
    difficulty: { type: Number},
    extraData: { type: String},
    gasLimit: { 
        BigNumber: { type: String} 
    },
    gasUsed: { 
        BigNumber: { type: String} 
    },
    hash: { type: String},
    miner: { type: String},
    nonce: { type: String},
    number: { type: Number, index: true},
    parentHash: { type: String},
    timestamp: { type: Date},
    transactions: [String]
});

const BlockEther = mongoose.model<IBlockEtherModel>('BlockEther', blockEtherSchema);
export = BlockEther;