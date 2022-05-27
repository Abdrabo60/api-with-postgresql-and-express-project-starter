import { Products } from "../model/products";

const store = new Products();

describe("product model", () => {
  it("should have index method", async () => {
    expect(await store.index()).toBeDefined();
  });
  it("should return null while path empty name", async () => {
    expect(
      await store.create({ id: 20, name: "", category_id: 1, price: 5 })
    ).toBeNull();
  });
});
