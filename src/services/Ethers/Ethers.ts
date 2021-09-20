import { ethers } from "ethers";
import { BlockController } from "../../controllers/Block/Block";
import { TransactionContorller } from "../../controllers/Transaction/Transaction";
import { IBlockEther } from "../../models/BlockEthers/IBlockEthers";
import { ITransaction } from "../../models/Transactions/ITransactions";
require("dotenv-json-complex")();

export class EthersService  {
    provider;
    node_URL = process.env.NODE_URL
    blockController = new BlockController();
    transactionController = new TransactionContorller();
    bigNumber = (value) => ethers.BigNumber.from(value).toString();
    constructor () {
        this.provider = new ethers.providers.JsonRpcProvider(this.node_URL);
    }

    async ListenBlocksRinkeby () {
        
        this.provider.on('block', async (blockNumber) => {
            console.log('blockNumber----->', blockNumber);
            const blockDetail:IBlockEther = await this.provider.getBlock(blockNumber);

            if (blockDetail) this.transactions(blockDetail.transactions)
            .catch((error) => {
                console.error(error);
                throw error;
            })
        })
    }

    async transactions (transactions) {
        for (let index = 0; index < transactions.length; index++) {
            const element = transactions[index];
            const trasnaction: ITransaction = await this.provider.getTransaction(element);
            trasnaction.value = this.bigNumber(trasnaction.value);
            await this.transactionController.createTransaction(trasnaction);
        }
    }
}