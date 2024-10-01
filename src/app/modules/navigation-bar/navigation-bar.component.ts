import { Component } from "@angular/core";
import { LinkService } from "../../core/services/currentLink.service";

@Component({
    selector: 'app-navigation-bar',
    templateUrl: './navigation-bar.component.html',
    styleUrl: './navigation-bar.component.scss'
  })

export class NavigationBar{
    constructor(private linkService: LinkService){}

    routeToHome(): void{
        this.linkService.routeToHome();
    }

    routeTo303(): void{
        this.linkService.routeTo303();
    }
}