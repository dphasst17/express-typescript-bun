import { db } from "models/connect";
import type { Product, ProductUpdate, NewProduct } from "../types";
export const productQuery = async () => {
  const find = await db.selectFrom("products").select(["idProduct"]).execute();
  console.log(find);
};
