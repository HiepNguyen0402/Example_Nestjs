import {Controller, Request,Get, UseGuards,Post, Body} from '@nestjs/common';
import { ApiCreatedResponse, ApiForbiddenResponse, ApiOperation, ApiResponse, ApiUnprocessableEntityResponse } from '@nestjs/swagger';
import { LoginUser } from '../user/dto/login-users.dto';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';

@Controller()
export class AuthController{
    constructor(private readonly authService: AuthService){}

    @UseGuards(LocalAuthGuard)
    @Post('login')
    // @ApiOperation({ summary: 'Login' })
    // @ApiResponse({ status: 200, description: 'Successful.' })
    @ApiCreatedResponse({ description: 'Login Succesfully' })
    @ApiUnprocessableEntityResponse({ description: 'Bad Request' })
    @ApiForbiddenResponse({ description: 'Unauthorized Request' })
    // async login(@Request() req){
    //     console.log(req.user);
    //     const a = await this.authService.login(req.user);
    //     return a;
    // }
    async login(@Body() loginUser:LoginUser){
        // console.log(req.user);
        const a = await this.authService.login(loginUser);
        return a;
    }
}