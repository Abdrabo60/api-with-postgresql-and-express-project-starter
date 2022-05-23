import { Categories, Category } from "../model/categories";
import { Application, Request, RequestHandler, Response } from "express";

const categories = new Categories();

const routeAction = (action: string): RequestHandler => {
  switch (action) {
    case "index":
      return async (req: Request, res: Response) => {
        const data = await categories.index();
        res.json(data);
      };

    case "show":
      return async (req: Request, res: Response) => {
        const data = await categories.show(parseInt(req.params.id));
        res.json(data);
      };

    case "create":
      return async (req: Request, res: Response) => {
        const data = await categories.create(req.body.name);
        res.json(data);
      };
  }
  throw new Error(`action ${action} doesn't implemented`);
};

const categoryRoute = (app: Application) => {
  app.get("/categories", routeAction("index"));
  app.get("/categories/:id", routeAction("show"));
  app.post("/categories/", routeAction("create"));
};

export default categoryRoute;
