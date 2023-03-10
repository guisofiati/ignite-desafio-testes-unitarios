import { Statement } from "@modules/statements/entities/Statement";

export type ICreateStatementDTO =
Pick<
  Statement,
  'user_id' |
  'sender_id' |
  'recipient_id' |
  'description' |
  'amount' |
  'type'
>
