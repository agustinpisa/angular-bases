import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name: string = 'ironman';
  public age:  number = 25;

  get capitalizedName(): string{
    return this.name.toUpperCase();
  }

  getHeroDescription():string {
    return `${ this.name } - ${ this.age }`;
  }

  changeName( name:string ):void {
    this.name = name;
  }

  changeAge( age:number ):void {
    this.age = age;
  }

  resetForm(): void{
    this.name = 'ironman';
    this.age = 25;

    // document.querySelectorAll('h1')!.forEach( element => {
    //   element.innerHTML = '<h1> Desde Angular Papá </h1>';
    // });

  }

}
