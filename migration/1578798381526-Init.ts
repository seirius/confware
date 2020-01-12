import {MigrationInterface, QueryRunner} from "typeorm";

export class Init1578798381526 implements MigrationInterface {
    name = 'Init1578798381526'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("CREATE TABLE `env` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("CREATE TABLE `file_data` (`id` int NOT NULL AUTO_INCREMENT, `path` varchar(255) NOT NULL, `type` varchar(255) NOT NULL, `envId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("ALTER TABLE `file_data` ADD CONSTRAINT `FK_305ec61534b8874eba23167ad7e` FOREIGN KEY (`envId`) REFERENCES `env`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `file_data` DROP FOREIGN KEY `FK_305ec61534b8874eba23167ad7e`", undefined);
        await queryRunner.query("DROP TABLE `file_data`", undefined);
        await queryRunner.query("DROP TABLE `env`", undefined);
    }

}
