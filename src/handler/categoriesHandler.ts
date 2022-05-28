import { Categories, Category } from "../model/categories";
import { Application, Request, RequestHandler, Response } from "express";

const categories = new Categories();

const routeAction = (action: string): RequestHandler => {
  switch (action) {
    case "index":
      return async (req: Request, res: Response) => {
        try {
          const data = await categories.index();
          res.json(data);
        } catch (error) {
          console.log(error);
          res.status(401);
          if (error instanceof Error) {
            res.send(error.message);
          } else {
            res.send(error);
          }
        }
      };

    case "show":
      return async (req: Request, res: Response) => {
        try {
          const data = await categories.show(parseInt(req.params.id));
          res.json(data);
        } catch (error) {
          console.log(error);
          res.status(401);
          if (error instanceof Error) {
            res.send(error.message);
          } else {
            res.send(error);
          }
        }
      };

    case "create":
      return async (req: Request, res: Response) => {
        try {
          const data = await categories.create(req.body);
          res.json(data);
        } catch (error) {
          res.status(401);
          if (error instanceof Error) {
            console.log(error.message);
            res.send(error.message);
          } else {
            console.log(error);
            res.send(error);
          }
        }
      };
  }
  throw new Error(`action ${action} doesn't implemented`);
};

const categoryRoute = (app: Application) => {
  app.get("/categories", routeAction("index"));
  app.get("/categories/:id", routeAction("show"));
  app.post("/categories", routeAction("create"));
};

export default categoryRoute;
