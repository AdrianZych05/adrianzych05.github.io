import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-click-game',
    templateUrl: './click-game.component.html',
    styleUrl: './click-game.component.scss'
  })

export class ClickGame implements OnInit{
    private CHEATING_CLICKS_PER_SECOND: number = 15;

    userCheating: boolean = false;

    private _allClicks: number = 0;
    private _clicksPerSecond: number = 0;

    private isSaving: boolean = false;

    get allClicks(): number{
        return this._allClicks;
    }

    get clicksPerSecond(): number{
        return this._clicksPerSecond;
    }

    ngOnInit(){
        this.loadCicks();

        this.loadCheating();

        setInterval(() => this.updateAllClicks(), 3000);
    }

    addOneClick(): void{
        this._allClicks++;
        this._clicksPerSecond++;

        if(this.isSaving) return;

        this.isSaving = true;
        setTimeout(() => this.saveClicks(), 1000);
    }

    saveClicks(): void{
        this._clicksPerSecond = 0;

        localStorage.setItem('allClicks', String(this.allClicks));

        this.isSaving = false;
    }

    loadCicks(): void{
        let storedClicks = localStorage.getItem('allClicks');

        this._allClicks = storedClicks ? parseInt(storedClicks, 10) : 0;
    }

    loadCheating(): void{
        let result = localStorage.getItem('isCheating');

        if(!result) this.userCheating = false;

        if(result == 'false') this.userCheating = false;

        if(result == 'true') this.userCheating = true;
    }

    isCheating(): void{
        if(this.clicksPerSecond > this.CHEATING_CLICKS_PER_SECOND){
            this.userCheating = true;

            this.saveCheating();
        }
    }

    saveCheating(): void{
        localStorage.setItem('isCheating', 'true');
    }

    reset(): void{
        let response = prompt("Are You Sure? (enter nothing to cancel)");

        if(!response) return;

        this._allClicks = 0;
        localStorage.setItem('allClicks', String(0));

        this.userCheating = false;
        localStorage.setItem('isCheating', 'false');
    }

    updateAllClicks(): void{
        this._allClicks++;
        
        setTimeout(() => this._allClicks--, 20);
    }
}