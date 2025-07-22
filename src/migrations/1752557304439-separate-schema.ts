import { MigrationInterface, QueryRunner } from "typeorm";

export class SeparateSchema1752557304439 implements MigrationInterface {
    name = 'SeparateSchema1752557304439'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "payment"."sound_box_entity" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "isConnected" boolean NOT NULL DEFAULT false, "deviceId" character varying NOT NULL, "merchantId" integer, CONSTRAINT "UQ_6b05dddc0ff1a8ed62dbd29bc00" UNIQUE ("deviceId"), CONSTRAINT "REL_494dc8ff0bb7c8b097eea53e30" UNIQUE ("merchantId"), CONSTRAINT "PK_522914196acdd61a3c529dcff8f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "payment"."sound_box_entity" ADD CONSTRAINT "FK_494dc8ff0bb7c8b097eea53e304" FOREIGN KEY ("merchantId") REFERENCES "merchant"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "payment"."sound_box_entity" DROP CONSTRAINT "FK_494dc8ff0bb7c8b097eea53e304"`);
        await queryRunner.query(`DROP TABLE "payment"."sound_box_entity"`);
    }

}
