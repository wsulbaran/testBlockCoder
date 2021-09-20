import { BlockServices } from "../../services/DB/Ethers/Blocks/Block";



export class BlockController {

    blockService = new BlockServices();
    constructor() {}

    async createBlock (block) {
        return this.blockService.createBlock(block)
        .catch((error) => {
            console.error(error);
            throw false;
        })
    }
}