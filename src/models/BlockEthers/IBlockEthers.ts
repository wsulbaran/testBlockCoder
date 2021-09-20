export interface IBlockEther {
    difficulty: number;
    extraData: string;
    gasLimit: {
        BigNumber: string
     };
    gasUsed: {
        BigNumber: string
     };
    hash: string;
    miner: string;
    nonce: string;
    number: number;
    parentHash: string;
    timestamp: Date;
    transactions: [string]
}