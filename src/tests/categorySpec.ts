import { Category, Categories } from "../model/categories";

const store = new Categories();

describe("category model", () => {
  it("should have index method", () => {
    expect(store.index).toBeDefined();
  });
});
