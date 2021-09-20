import * as BlockEther from '../../../../models/BlockEthers/BlockEthers'

export class BlockServices {

    constructor () {}

    async createBlock (block) {
        return await BlockEther.create(block)
            .catch((error) => {
                console.error(error);
                throw false;
            })
    }

    async getOneBlock (number) {
        return await BlockEther.findOne({number})
        .catch((error) => {
            console.error(error);
            throw false;
        })
    }

    async getBlock () {
        return await BlockEther.find({})
        .catch((error) => {
            console.error(error);
            throw false;
        })
    }

}