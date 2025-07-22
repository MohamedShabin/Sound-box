import { MigrationInterface, QueryRunner } from "typeorm";

export class SepSchema1752558792296 implements MigrationInterface {
    name = 'SepSchema1752558792296'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "payment"."payments" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "upiId" character varying NOT NULL, "amount" integer NOT NULL, "deviceId" character varying NOT NULL, CONSTRAINT "PK_197ab7af18c93fbb0c9b28b4a59" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "payment"."payments"`);
    }

}
