"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const categories_1 = require("../model/categories");
const categories = new categories_1.Categories();
const routeAction = (action) => {
    switch (action) {
        case "index":
            return async (req, res) => {
                const data = await categories.index();
                res.json(data);
            };
        case "show":
            return async (req, res) => {
                const data = await categories.show(parseInt(req.params.id));
                res.json(data);
            };
        case "create":
            return async (req, res) => {
                const data = await categories.create(req.body.name);
                res.json(data);
            };
    }
    throw new Error(`action ${action} doesn't implemented`);
};
const categoryRoute = (app) => {
    app.get("/categories", routeAction("index"));
    app.get("/categories/:id", routeAction("show"));
    app.post("/categories/", routeAction("create"));
};
exports.default = categoryRoute;
