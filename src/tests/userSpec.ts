import { Users } from "../model/users";

const store = new Users();

describe("user model", () => {
  it("should have index method", async () => {
    expect(await store.index()).toBeDefined();
  });
  it("should return null while path empty first name", async () => {
    expect(
      await store.create({
        id: 10,
        first_name: "",
        last_name: "xx",
        password: "ff",
      })
    ).toBeNull();
  });
  it("should return null while path empty last name", async () => {
    expect(
      await store.create({
        id: 10,
        first_name: "xx",
        last_name: "",
        password: "ff",
      })
    ).toBeNull();
  });
  it("should return null while path empty password", async () => {
    expect(
      await store.create({
        id: 10,
        first_name: "xx",
        last_name: "xx",
        password: "",
      })
    ).toBeNull();
  });
});
