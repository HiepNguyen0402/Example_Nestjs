import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { Observable } from "rxjs";
import { UserEntity } from "../typeorm";
import { UserService } from "../user/user.service";
import { Role } from "./role.enum";
import { ROLES_KEY } from "./roles.decorator";


@Injectable()
export class RolesGuard implements CanActivate{
    constructor(private reflector: Reflector, private userService:UserService){}
    
    async canActivate(context: ExecutionContext): Promise<boolean> {
        const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
          context.getHandler(),
          context.getClass(),
        ]);
        if (!requiredRoles) {
          return true;
        }
        const { user } = context.switchToHttp().getRequest();
        
        const users : UserEntity = await this.userService.findUser(user.username);
        console.log(users.roles)
        return requiredRoles.some((role) => users.roles?.includes(role));
      }
}