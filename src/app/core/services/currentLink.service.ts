import { Injectable } from "@angular/core";
import { LinkNameEnum } from "../constants/link-name.model";
import { Router } from "@angular/router";

@Injectable({
    providedIn: 'root'
  }) 

export class LinkService{
    currentLink: LinkNameEnum = LinkNameEnum.home;

    constructor(private router: Router){}

    routeToHome(): void{
        this.router.navigate([LinkNameEnum.home]);
        this.currentLink = LinkNameEnum.home;
    }

    routeTo303(): void{
        this.router.navigate([LinkNameEnum.link303]);
        this.currentLink = LinkNameEnum.link303;
    }

    routeToClickGame(): void{
        this.router.navigate([LinkNameEnum.clickGameLink]);
        this.currentLink = LinkNameEnum.clickGameLink;
    }
}