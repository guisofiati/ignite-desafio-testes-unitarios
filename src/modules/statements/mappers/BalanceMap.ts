import { Statement } from "../entities/Statement";

export class BalanceMap {
  static toDTO({statement, balance}: { statement: Statement[], balance: number}) {
    const parsedStatement = statement.map(
      ({
        id,
        sender_id,
        recipient_id,
        amount,
        description,
        type,
        created_at,
        updated_at,
      }) => {
        if (type === 'transfer') {
          return {
            id,
            sender_id,
            recipient_id,
            amount: Number(amount),
            description,
            type,
            created_at,
            updated_at,
          };
        } else {
          return {
            id,
            amount: Number(amount),
            description,
            type,
            created_at,
            updated_at,
          };
        }
      }
    );

    return {
      statement: parsedStatement,
      balance: Number(balance)
    }
  }
}
