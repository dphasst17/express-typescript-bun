import { type Kysely } from 'kysely'
import type { NewProduct, Product } from 'models/types'

export async function up(db: Kysely<Product>): Promise<void> {
    await db.schema.createTable('product')
    .addColumn('id','integer', col => col.primaryKey().autoIncrement())
    .addColumn('nameProduct','varchar(200)')
    .addColumn('imagesProduct','varchar(1000)')
    .addColumn('id_Type','integer')
    .addColumn('price','integer')
    .execute()
}

export async function down(db: Kysely<any>): Promise<void> {}
