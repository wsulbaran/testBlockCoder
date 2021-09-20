import * as express from 'express';
import * as mongoose from 'mongoose';
import * as cors from 'cors';
import { ApiRouter } from './router/api/api';
import { EthersService } from './services/Ethers/Ethers';
require("dotenv-json-complex")();


class Server {
    public app: express.Application;
    dbUri = process.env.DB_URI;
    ethereumConnect = new EthersService();
    constructor () {
        this.db();
        this.app = express();
        this.config();
        this.routes();
    }

    public config() : void {
        this.app.use(express.urlencoded({extended : true}));
        this.app.use(express.json());
        this.app.use(cors())
        //this.ethereumConnect.ListenBlocksRinkeby();
    }

    public db() : void {
        mongoose.connect(this.dbUri, {})
        .then(() =>  {console.log('Connected to db!!!');})
        .catch((err) => console.error('Connection Error', err));
    }

    public routes() : void {
        const router: express.Router = express.Router();
        this.app.use('/', router);
        this.app.use('/api', new ApiRouter().route());

    }
}

export default new Server().app
