import { Product, Products } from "../model/products";
import app from "../server";
import supertest from "supertest";
const store = new Products();

const request = supertest(app);
describe("product model", () => {
  it("should have this methods", () => {
    expect(store.index).toBeDefined();
    expect(store.show).toBeDefined();
    expect(store.create).toBeDefined();
    expect(store.byCategory).toBeDefined();
  });

  //get methods
  it("should return status 200", async () => {
    const response = await request.get("/products");
    expect(response.statusCode).toBe(200);
  });
  it("should return status 200", async () => {
    const response = await request.get("/products/1");
    expect(response.statusCode).toBe(200);
  });
  it("should return status 200", async () => {
    const response = await request.get("/products/category/1");
    expect(response.statusCode).toBe(200);
  });
  //post methods
  it("should return status 200", async () => {
    const response = await request
      .post("/products")
      .send({ name: "test_product", price: 20, category_id: 1 })
      .auth(
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImZpcnN0X25hbWUiOiJhZG1pbiIsImxhc3RfbmFtZSI6ImFkbWluIiwicGFzc3dvcmQiOiJhZG1pbiJ9LCJpYXQiOjE2NTM2MDQ4MjR9.lmb2pSliQ2Dh0fsyDPEoIWYeOsLpibGgXOOWrdLg1Fw",
        { type: "bearer" }
      );
    expect(response.statusCode).toBe(200);
  });
  it("should return status 401", async () => {
    const response = await request.post("/products");
    expect(response.statusCode).toBe(401);
  });
});
