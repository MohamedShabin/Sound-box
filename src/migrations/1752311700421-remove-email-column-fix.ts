import { MigrationInterface, QueryRunner } from "typeorm";

export class RemoveEmailColumnFix1752311700421 implements MigrationInterface {
    name = 'RemoveEmailColumnFix1752311700421'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "merchant" DROP COLUMN "email"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "merchant" ADD "email" character varying NOT NULL DEFAULT 'default@email.com'`);
    }

}
