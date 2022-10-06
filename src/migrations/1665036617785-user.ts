import { MigrationInterface, QueryRunner } from "typeorm"

export class user1665036617785 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE "UserEntity" RENAME COLUMN "phone" TO "number"`,
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE "UserEntity" RENAME COLUMN "phone" TO "number"`,
        )
    }

}
