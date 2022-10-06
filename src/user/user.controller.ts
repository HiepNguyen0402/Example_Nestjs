import { Body, Controller, Delete, Get , Param, ParseIntPipe, Post, Put ,Render, UseGuards} from '@nestjs/common';
import { ApiBearerAuth, ApiCreatedResponse, ApiForbiddenResponse, ApiNotFoundResponse, ApiOkResponse, ApiUnprocessableEntityResponse } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { Role } from '../role/role.enum';
import { Roles } from '../role/roles.decorator';
import { RolesGuard } from '../role/roles.guards';
import { CreateUserDto } from './dto/create-users.dto';
import { UserEntity } from './user.entity';
import { UserService } from './user.service';

@ApiBearerAuth('token')
@UseGuards(JwtAuthGuard,RolesGuard)
@Controller('/users')
export class UserController {
    constructor(private readonly userService: UserService,){}

    @Get()
    @ApiOkResponse({ description: 'The resources were returned successfully' })
    @ApiForbiddenResponse({ description: 'Unauthorized Request' })
    @Roles(Role.ADMIN ,Role.USER , Role.CUSTOMER)
    async findAll(): Promise<UserEntity[]>{
        return await this.userService.findAll();
    }

    @Get(':id')
    @ApiOkResponse({ description: 'The resource was returned successfully' })
    @ApiForbiddenResponse({ description: 'Unauthorized Request' })
    @ApiNotFoundResponse({ description: 'Resource not found' })
    @Roles(Role.ADMIN ,Role.USER)
    findById(@Param('id',ParseIntPipe) id: number): Promise<UserEntity>{
        return this.userService.findOne(id);
    }

    @Post()
    @ApiCreatedResponse({ description: 'Created Succesfully' })
    @ApiUnprocessableEntityResponse({ description: 'Bad Request' })
    @ApiForbiddenResponse({ description: 'Unauthorized Request' })
    @Roles(Role.ADMIN )
    createUser(@Body() createUserDto: CreateUserDto): Promise<UserEntity>{
        return this.userService.createUser(createUserDto);
    }

    @Put(':id')
    @ApiOkResponse({ description: 'The resource was updated successfully' })
    @ApiNotFoundResponse({ description: 'Resource not found' })
    @ApiForbiddenResponse({ description: 'Unauthorized Request' })
    @ApiUnprocessableEntityResponse({ description: 'Bad Request' })
    @Roles(Role.ADMIN )
    updateUser( @Param ('id',ParseIntPipe) id: number,@Body() createUserDto: CreateUserDto): Promise<any>{
        return this.userService.update(id, createUserDto);
    }

    @Delete(':id')
    @ApiOkResponse({ description: 'The resource was returned successfully' })
    @ApiForbiddenResponse({ description: 'Unauthorized Request' })
    @ApiNotFoundResponse({ description: 'Resource not found' })
    @Roles(Role.ADMIN )
    delete(@Param('id',ParseIntPipe)id: string): Promise<void>{
        return this.userService.remove(id);
    }
}
