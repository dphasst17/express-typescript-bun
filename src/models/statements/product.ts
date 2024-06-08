import { db } from "models/connect";
import type { Product, ProductUpdate, NewProduct } from "../types";
export const productQuery = async () => {
  <Product[]> await db.selectFrom("products")
  .select(["idProduct","nameProduct","imagesProduct","id_Type","price"])
  .where("idProduct","<",1)
  .execute();
};
