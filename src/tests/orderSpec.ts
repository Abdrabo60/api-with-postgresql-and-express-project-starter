import { Orders } from "../model/orders";

const store = new Orders();

describe("order model", () => {
  it("should have index method", async () => {
    expect(await store.completedOrders(1)).toBeDefined();
  });
  it("should return null  while path user id == 0", async () => {
    expect(await store.currentOrders(0)).toBeNull();
  });
});
