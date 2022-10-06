import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { CreateUserDto } from './dto/create-users.dto';
import { UserEntity } from './user.entity';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
    constructor(private dataSource: DataSource){}

    
    // findAll() {
    //     return UserRepository.find();
    // }

    // async findById(id: number) {
    //     return UserRepository.findOne({where: { id}});
    // }

    // async create(createUserDto: CreateUserDto): Promise<UserEntity>{
    //     return UserRepository.create(createUserDto);
    // }

    // async update(id: number, createUserDto: CreateUserDto){
    //     return UserRepository.update(id, createUserDto);
    // }

    // async delete(id: number){
    //     return UserRepository.delete(id);
    // }

    async findAll() {
        return await UserRepository.find();
    }

    async createUser(createUserDto: CreateUserDto): Promise<UserEntity> {
        return UserRepository.save(createUserDto);
    }

    findOne(id: number): Promise<UserEntity> {
        return UserRepository.findOneById(id);
    }

    update(id: number, createUserDto: CreateUserDto ): Promise<any> {
        return UserRepository.update(id, createUserDto);
    }

    async remove(id: string): Promise<void> {
        await UserRepository.delete(id);
    }

    async findUser(username:string):Promise<UserEntity> {
        const user: UserEntity = await UserRepository.findOne({where: { username: username}});
        return user;
    }
    
    async findRole(username:string):Promise<any> {
        const user: UserEntity = await UserRepository.findOne({where: { username: username}});
        return user;
    }

}
