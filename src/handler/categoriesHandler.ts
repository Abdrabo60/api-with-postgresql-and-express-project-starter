import { Categories } from "../model/categories";
import { Application, Request, RequestHandler, Response } from "express";

const categories = new Categories();

const routeAction = (action: string): RequestHandler => {
  return async (req: Request, res: Response) => {
    let data;
    try {
      switch (action) {
        case "index":
          data = await categories.index();
          break;
        case "show":
          data = await categories.show(parseInt(req.params.id));
          break;
        case "create":
          data = await categories.create(req.body);
          break;
      }
      res.send(data);
    } catch (error) {
      console.log(error);
      res.status(401);
      res.send(error);
    }
  };
};

const categoryRoute = (app: Application) => {
  app.get("/categories", routeAction("index"));
  app.get("/categories/:id", routeAction("show"));
  app.post("/categories", routeAction("create"));
};

export default categoryRoute;
