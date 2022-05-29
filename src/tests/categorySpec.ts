import { Categories, Category } from "../model/categories";
import app from "../server";
import supertest from "supertest";
const store = new Categories();

const request = supertest(app);
describe("category model", () => {
  describe("database actions", () => {
    it("should have [index,show,create] methods", () => {
      expect(store.index).toBeDefined();
      expect(store.show).toBeDefined();
      expect(store.create).toBeDefined();
    });
    it("should return category object ", async () => {
      const cat: Category = { name: "test_category_action" };
      expect(await store.create(cat)).not.toBeNull();
      expect(await store.show(1)).not.toBeNull();
    });

    it("should retrun array lenghth greater than zero", async () => {
      expect((await store.index()).length).toBeGreaterThan(0);
    });
  });
  describe("endpoint routes", () => {
    //get methods
    it("should return status 200", async () => {
      const response = await request.get("/categories");
      expect(response.statusCode).toBe(200);
    });
    it("should return status 200", async () => {
      const response = await request.get("/categories/1");
      expect(response.statusCode).toBe(200);
    });

    //post methods
    it("should return status 200", async () => {
      const response = await request
        .post("/categories")
        .send({ name: "test_category" });
      expect(response.statusCode).toBe(200);
    });
    it("should return status 401", async () => {
      const response = await request.post("/categories");
      expect(response.statusCode).toBe(401);
    });
  });
});
