import { Categories, Category } from "../model/categories";
import app from "../server";
import supertest from "supertest";
const store = new Categories();

const request = supertest(app);
describe("category model", () => {
  it("should have this methods", () => {
    expect(store.index).toBeDefined();
    expect(store.show).toBeDefined();
    expect(store.create).toBeDefined();
  });

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
