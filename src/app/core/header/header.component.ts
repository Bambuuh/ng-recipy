import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { DataStorage } from "../../shared/data-storage.service";
import { AuthService } from "../../auth/auth.service";

@Component({
    selector: 'app-header',
    templateUrl: 'header.component.html',
    providers: [DataStorage]
})
export class HeaderComponent {

    constructor(
        private dataStorage: DataStorage,
        private authService: AuthService
    ) {}

    onSaveData() {
        this.dataStorage.saveRecipes().subscribe(response => console.log(response))
    }

    onFetchData() {
        this.dataStorage.getRecipes()
    }

    onLogout() {
        this.authService.logout()
    }

}