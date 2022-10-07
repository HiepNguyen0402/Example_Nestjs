import { MigrationInterface, QueryRunner } from "typeorm"

export class usermigrations1665115548752 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.renameColumn("user_entity", "phone", "number")
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.renameColumn("user_entity", "number", "phone")
    }

}
