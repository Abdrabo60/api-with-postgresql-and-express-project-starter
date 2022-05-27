import { Orders } from "../model/orders";
import { Application, Request, RequestHandler, Response } from "express";
import verifyAuthToken from "../tokenMiddleWare";

const orders = new Orders();

const routeAction = (action: string): RequestHandler => {
  switch (action) {
    case "completedOrders":
      return async (req: Request, res: Response) => {
        try {
          const data = await orders.completedOrders(
            parseInt(req.params.user_id)
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

    case "currentOrders":
      return async (req: Request, res: Response) => {
        try {
          const data = await orders.currentOrders(parseInt(req.params.user_id));
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

const ordersRoute = (app: Application) => {
  app.get(
    "/orders/completed/:user_id",
    verifyAuthToken,
    routeAction("completedOrders")
  );
  app.get(
    "/orders/current/:user_id",
    verifyAuthToken,
    routeAction("currentOrders")
  );
};

export default ordersRoute;
