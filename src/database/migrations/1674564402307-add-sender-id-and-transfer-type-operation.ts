import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class addSenderIdAndTransferTypeOperation1674564402307 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.addColumn('statements', new TableColumn({
        name: 'sender_id',
        type: 'uuid',
        isNullable: true,
      }));

      await queryRunner.addColumn('statements', new TableColumn({
        name: 'recipient_id',
        type: 'uuid',
        isNullable: true,
      }));

      await queryRunner.changeColumn('statements', 'type', new TableColumn({
        name: 'type',
        type: 'enum',
        enum: ['deposit', 'withdraw', 'transfer']
      }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropColumn('statements', 'sender_id');
      await queryRunner.dropColumn('statements', 'type');
    }
}
