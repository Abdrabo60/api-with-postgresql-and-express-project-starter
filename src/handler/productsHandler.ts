import { Products } from "../model/products";
import { Application, Request, RequestHandler, Response } from "express";
import verifyAuthToken from "../tokenMiddleWare";

const products = new Products();

const routeAction = (action: string): RequestHandler => {
  switch (action) {
    case "index":
      return async (req: Request, res: Response) => {
        try {
          const data = await products.index();
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
          const data = await products.show(parseInt(req.params.id));
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
    case "byCategory":
      return async (req: Request, res: Response) => {
        try {
          const data = await products.byCategory(
            parseInt(req.params.category_id)
          );
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
          const data = await products.create(req.body);
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
  }
  throw new Error(`action ${action} doesn't implemented`);
};

const productsRoute = (app: Application) => {
  app.get("/products", routeAction("index"));
  app.get("/products/:id", routeAction("show"));
  app.get("/products/category/:category_id", routeAction("byCategory"));
  app.post("/products", verifyAuthToken, routeAction("create"));
};

export default productsRoute;
