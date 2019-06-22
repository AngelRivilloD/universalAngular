import { Injectable } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Injectable({
   providedIn: 'root'
})
export class SEOService {
   constructor(private meta: Meta) {

   }

   setMetas() {
      console.log('llega a metaas');
      this.meta.addTags([
         {name: 'description', content: 'PRUEBA PRUEBA PRUEBA PRUEBA PRUEBA'},
         {name: 'viewport', content: 'width=device-width, initial-scale=1'},
         {name: 'robots', content: 'INDEX, FOLLOW'},
         {name: 'author', content: 'ABCD'},
         {name: 'keywords', content: 'TypeScript, Angular'},
         {name: 'date', content: '2018-06-02', scheme: 'YYYY-MM-DD'},
         {httpEquiv: 'Content-Type', content: 'text/html'},
         {property: 'og:title', content: 'My Text'},
         {property: 'og:type', content: 'website'},
         {charset: 'UTF-8'}
      ]);

      // this.meta.updateTag({ content: 'Angular 4 meta service'} , 'name="description"' );
   }
}
