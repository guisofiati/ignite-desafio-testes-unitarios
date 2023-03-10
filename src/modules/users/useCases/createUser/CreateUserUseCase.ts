import { hash } from 'bcryptjs';
import { CreateUserError } from "./CreateUserError";

import { IUsersRepository } from "@modules/users/repositories/IUsersRepository";
import { inject, injectable } from 'tsyringe';
import { ICreateUserDTO } from "./ICreateUserDTO";

@injectable()
export class CreateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  async execute({ name, email, password }: ICreateUserDTO) {
    const userAlreadyExists = await this.usersRepository.findByEmail(email);

    if (userAlreadyExists) {
      throw new CreateUserError();
    }

    const passwordHash = await hash(password, 8);

    const user = await this.usersRepository.create({
      email,
      name,
      password: passwordHash,
    });

    return user;
  }
}
