import type{
    ColumnType,
    Generated,
    Insertable,
    JSONColumnType,
    Selectable,
    Updateable
  } from 'kysely'
  
  export interface Database {
    products: ProductTable
    user: UserTable,
  }
  
  export interface ProductTable {
    idProduct: Generated<number>
    nameProduct: string
    imagesProduct:string,
    id_Type:number,
    price:number,
    detail?:JSONColumnType<{}[] | [] >
  }

  export type Product = Selectable<ProductTable>
  export type NewProduct = Insertable<ProductTable>
  export type ProductUpdate = Updateable<ProductTable>
  
  export interface UserTable {
    idUser: string
    name: string
    email: string,
    phone:number,
    imagesUser:string,
    create_at:ColumnType<Date, string | undefined, never>,
    update_at:ColumnType<Date, string | undefined, never>
  }
  
  export type User = Selectable<UserTable>
  export type NewUser = Insertable<UserTable>
  export type UserUpdate = Updateable<UserTable>