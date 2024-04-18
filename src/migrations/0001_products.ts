import { type Kysely } from 'kysely'

export async function up(db: Kysely<any>): Promise<void> {
    await db.schema.createTable('product')
    .addColumn('id','integer', col => col.primaryKey().autoIncrement())
    .execute()
}

export async function down(db: Kysely<any>): Promise<void> {}
