import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { SEOService } from '../seo.service';

@Component({
    selector: 'app-news',
    encapsulation: ViewEncapsulation.None,
    templateUrl: './news.component.html'
})

export class NewsComponent {

    constructor(private _router: Router, private seoService: SEOService) {
        this.setMetas();
    }

  setMetas() {
      console.log('...> calling set metas');
    this.seoService.setMetas();
  }

//     ngOnInit() {
//    }

//    goBack(){
//     this._router.navigate(["carga-mensual"]);
//    }

}
