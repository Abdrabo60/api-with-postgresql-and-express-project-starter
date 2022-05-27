import { User, Users } from "../model/users";
import { Application, Request, RequestHandler, Response } from "express";
import verifyAuthToken from "../tokenMiddleWare";

const users = new Users();

const routeAction = (action: string): RequestHandler => {
  switch (action) {
    case "index":
      return async (req: Request, res: Response) => {
        try {
          const data = await users.index();
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
          const data = await users.show(parseInt(req.params.id));
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
          const data = await users.create(req.body);
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
    case "login":
      return async (req: Request, res: Response) => {
        try {
          const data = await users.login(req.body);
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

const usersRoute = (app: Application) => {
  app.get("/users", verifyAuthToken, routeAction("index"));
  app.get("/users/:id", verifyAuthToken, routeAction("show"));
  app.post("/users", verifyAuthToken, routeAction("create"));
  app.post("/users/login", routeAction("login"));
};

export default usersRoute;
