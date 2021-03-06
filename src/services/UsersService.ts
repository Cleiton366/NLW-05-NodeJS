import { getCustomRepository, Repository } from "typeorm";
import { User } from "../entities/User";
import { UsersRepository } from "../repositories/UsersRepository";

class UsersService {

    private usersRepository: Repository<User>

    constructor() {
        this.usersRepository = getCustomRepository(UsersRepository);
    }

    async create(email: string) {
        
        if (!this.findByEmail(email)) throw new Error("User " + email + " already exists!");

        const user = this.usersRepository.create({
            email,
        });

        await this.usersRepository.save(user);
        return user;

    }

    async findByEmail(email: string) {
        const userAlreadyExist = await this.usersRepository.findOne({ email });
        if(userAlreadyExist){
            return userAlreadyExist;
        }
    }
}

export { UsersService }