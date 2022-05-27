import { Category, Categories } from "../model/categories";

const store = new Categories();

describe("category model", () => {
  it("should have index method", async () => {
    expect(await store.index()).toBeDefined();
  });
  it("should return null while path empty name", async () => {
    expect(await store.create({ id: 10, name: "" })).toBeNull();
  });
});
