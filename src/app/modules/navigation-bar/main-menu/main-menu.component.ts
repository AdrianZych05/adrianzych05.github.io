import { Component } from "@angular/core";
import { DisplayService } from "../../../core/services/display.service";
import { LinkService } from "../../../core/services/currentLink.service";
import { LinkNameEnum } from "../../../core/constants/link-name.model";

@Component({
    selector: 'app-main-menu',
    templateUrl: './main-menu.component.html',
    styleUrl: './main-menu.component.scss'
  })

export class MainMenu{

  constructor(private display: DisplayService,
    private linkService: LinkService){}

  get displayMenu(){
    return this.display.displayMenu;
  }

  get is303Link(){
    return this.linkService.currentLink == LinkNameEnum.link303;
  }

  get isHomeLink(){
    return this.linkService.currentLink == LinkNameEnum.home;
  }

  get isClickGameLink(){
    return this.linkService.currentLink == LinkNameEnum.clickGameLink;
  }

  toggleMenu(){
    this.display.displayMenu = !this.display.displayMenu;
    let item = document.getElementById('main-menu');
    if(this.display.displayMenu){
      if(item?.style){
        item.style.height = `${item.scrollHeight}px`;
      }
    } else{
      if(item?.style){
        item.style.height = '0';
      }
    }
  }

  routeToHome(): void{
      this.linkService.routeToHome();
      this.toggleMenu();
  }

  routeTo303(): void{
      this.linkService.routeTo303();
      this.toggleMenu();
  }

  routeToClickGame(){
    this.linkService.routeToClickGame();
    this.toggleMenu();
  }
}