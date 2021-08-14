import express, { Application, Request, Response, NextFunction } from "express";
import routes from "routes/index";
export default function createDefaultServer() {
    const app: Application = express();

    // custom routes
    app.use(routes);

    // base url should be the last route
    app.use("/", (req: Request, res: Response, next: NextFunction) => {
        res.send("hello world");
    });

    return app;
}
