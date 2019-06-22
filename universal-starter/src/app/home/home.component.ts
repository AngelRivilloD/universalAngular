import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-home',
    encapsulation: ViewEncapsulation.None,
    templateUrl: './home.component.html'
})

export class HomeComponent {

    title = 'holaMundo';

    constructor(private _router: Router) {
    }

    goToNew(id: number) {
        this._router.navigate(['news']);
    }

//     ngOnInit() {
//    }

//    goBack(){
//     this._router.navigate(["carga-mensual"]);
//    }

}
