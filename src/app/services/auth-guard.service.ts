import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot,RouterStateSnapshot, UrlTree } from '@angular/router';
import { UserService } from './user.service';

// https://www.geeksforgeeks.org/auth-guards-in-angular-9-10-11/#:~:text=AuthGuard%20is%20used%20to%20protect,canActivate%20is%20like%20a%20constructor.//

// https://angular.io/api/router/CanActivate // 
@Injectable()
export class AuthGuardService implements CanActivate {

    constructor(private router:Router, private userService: UserService ) {

    }

    canActivate(route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): boolean|UrlTree {
        if (!this.userService.loggedIn) {
            this.router.navigate([""]);
            return false;
        }
        return true;
    }

}
