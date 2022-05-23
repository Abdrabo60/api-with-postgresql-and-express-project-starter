"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const categories_1 = require("../model/categories");
const store = new categories_1.Categories();
describe("category model", () => {
    it("should have index method", () => {
        expect(store.index).toBeDefined();
    });
});
