import { MigrationInterface, QueryRunner } from 'typeorm'

export class first1664412641478 implements MigrationInterface {
  name = 'first1664412641478'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "heroes" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "power" character varying NOT NULL, CONSTRAINT "PK_9db096e6a3c6fe87c82c0af18fc" PRIMARY KEY ("id"))`,
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "heroes"`)
  }
}
