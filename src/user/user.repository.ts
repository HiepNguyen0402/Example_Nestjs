import { AppDataSource } from "../app.datasource";
import { UserEntity } from "./user.entity";

const dataSource = AppDataSource;
export const UserRepository = 
dataSource.getRepository(UserEntity).extend({
async findOneById(id: number): Promise<UserEntity> {
    const User = await UserRepository.findOne({ where: { id }});
    return User;
  },
async findMany(): Promise<UserEntity[]> {
    const User = await UserRepository.find();
    return User;
  },
// async createUser(createUserDto: CreateUserDto): Promise<User> {
//     const user = new User();
//     user.username = createUserDto.username;
//     user.password = createUserDto.password;
//     return await UserRepository.save(user);
// },
// async updateUser(id:number, createUserDto: CreateUserDto): Promise<any> {
//     return await UserRepository.update(id, createUserDto);
// }
});