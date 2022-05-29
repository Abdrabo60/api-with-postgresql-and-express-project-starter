import { Orders } from "../model/orders";
import app from "../server";
import supertest from "supertest";
const store = new Orders();

const request = supertest(app);
describe("orders model", () => {
  describe("database actions", () => {
    it("should have [completedOrders,currentOrders] methods", () => {
      expect(store.completedOrders).toBeDefined();
      expect(store.currentOrders).toBeDefined();
    });
    it("should return order object ", async () => {
      expect(await store.completedOrders(1)).not.toBeNull();
      expect(await store.currentOrders(1)).not.toBeNull();
    });
  });
  describe("endpoint routes", () => {
    //get methods
    it("should return status 200", async () => {
      const response = await request
        .get("/orders/completed/1")
        .auth(
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImZpcnN0X25hbWUiOiJhZG1pbiIsImxhc3RfbmFtZSI6ImFkbWluIiwicGFzc3dvcmQiOiJhZG1pbiJ9LCJpYXQiOjE2NTM2MDQ4MjR9.lmb2pSliQ2Dh0fsyDPEoIWYeOsLpibGgXOOWrdLg1Fw",
          { type: "bearer" }
        );
      expect(response.statusCode).toBe(200);
    });
    it("should return status 200", async () => {
      const response = await request
        .get("/orders/current/1")
        .auth(
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImZpcnN0X25hbWUiOiJhZG1pbiIsImxhc3RfbmFtZSI6ImFkbWluIiwicGFzc3dvcmQiOiJhZG1pbiJ9LCJpYXQiOjE2NTM2MDQ4MjR9.lmb2pSliQ2Dh0fsyDPEoIWYeOsLpibGgXOOWrdLg1Fw",
          { type: "bearer" }
        );
      expect(response.statusCode).toBe(200);
    });
  });
});
