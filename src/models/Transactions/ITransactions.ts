
export interface ITransaction {
    accessList: {};
    blockHash: string;
    blockNumber: number;
    chainId: number;
    confirmations: number;
    creates: string;
    data: string;
    from: string;
    gasLimit: { BigNumber: string };
    gasPrice: { BigNumber: string };
    hash: string;
    nonce: number;
    r: string;
    s: string;
    to: string;
    transactionIndex: number;
    type: number;
    v: number;
    value: string;         
}