// import { Controller, Get, Post, Render, UseGuards ,Request} from '@nestjs/common';
// import { AuthService } from './auth/Auth.service';
// import { LocalAuthGuard } from './auth/guards/local-auth.guard';

// @Controller()
// export class AppController {
//   constructor(private readonly authService: AuthService) {}

//   @UseGuards(LocalAuthGuard)
//   @Post('auth/login')
//   async login(@Request() req) {
//     return this.authService.login(req.user);
//   }
// }
