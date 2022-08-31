import { Router } from "express";
import companyRouter from "./company.route.js";

const indexRouter = Router();

const prefix = "/api";

indexRouter.get(prefix, (req, res) => {
    res.send("welcome to API");
});

indexRouter.use(`${prefix}/company`, companyRouter)

export default indexRouter;