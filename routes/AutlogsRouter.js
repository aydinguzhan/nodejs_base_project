import { Router } from 'express';



class AutLogsRouter {
    constructor() {
        this.autlogsRouter = Router();
        this.initalizeRoutes();
    }

    initalizeRoutes() {
        this.autlogsRouter.get("/autlogs", this.getAutlogs);
    }

    getAutlogs(req, res) {
        res.send({ message: getAutlogs })
    }
}

export default new AutLogsRouter().autlogsRouter