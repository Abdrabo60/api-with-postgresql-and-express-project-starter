import { Users } from "../model/users";
import app from "../server";
import supertest from "supertest";
const store = new Users();

const request = supertest(app);
describe("users model", () => {
  it("should have this methods", () => {
    expect(store.index).toBeDefined();
    expect(store.show).toBeDefined();
    expect(store.create).toBeDefined();
    expect(store.login).toBeDefined();
  });

  //get methods
  it("should return status 200", async () => {
    const response = await request
      .get("/users")
      .auth(
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImZpcnN0X25hbWUiOiJhZG1pbiIsImxhc3RfbmFtZSI6ImFkbWluIiwicGFzc3dvcmQiOiJhZG1pbiJ9LCJpYXQiOjE2NTM2MDQ4MjR9.lmb2pSliQ2Dh0fsyDPEoIWYeOsLpibGgXOOWrdLg1Fw",
        { type: "bearer" }
      );
    expect(response.statusCode).toBe(200);
  });
  it("should return status 200", async () => {
    const response = await request
      .get("/users/1")
      .auth(
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImZpcnN0X25hbWUiOiJhZG1pbiIsImxhc3RfbmFtZSI6ImFkbWluIiwicGFzc3dvcmQiOiJhZG1pbiJ9LCJpYXQiOjE2NTM2MDQ4MjR9.lmb2pSliQ2Dh0fsyDPEoIWYeOsLpibGgXOOWrdLg1Fw",
        { type: "bearer" }
      );
    expect(response.statusCode).toBe(200);
  });

  //post methods
  it("should return status 200", async () => {
    const response = await request
      .post("/users")
      .send({ first_name: "admin", last_name: "admin", password: "xx" });
    expect(response.statusCode).toBe(200);
  });
  it("should return status 401", async () => {
    const response = await request.post("/products");
    expect(response.statusCode).toBe(401);
  });
});
