import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import categoryRoute from "./handler/categoriesHandler";

const app: express.Application = express();
const address: string = "0.0.0.0:3000";
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

app.get("/", function (req: Request, res: Response) {
  res.send("Hello World!");
});

categoryRoute(app);
app.listen(3000, function () {
  console.log(`starting app on: ${address}`);
});
