import { MigrationInterface, QueryRunner } from "typeorm";

export class AddEmailColumn1752312447478 implements MigrationInterface {
    name = 'AddEmailColumn1752312447478'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "merchant" ADD "email" character varying`);
        await queryRunner.query(`ALTER TABLE "merchant" ADD CONSTRAINT "UQ_546608b3c7bf7c175d3780c38f8" UNIQUE ("email")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "merchant" DROP CONSTRAINT "UQ_546608b3c7bf7c175d3780c38f8"`);
        await queryRunner.query(`ALTER TABLE "merchant" DROP COLUMN "email"`);
    }

}
