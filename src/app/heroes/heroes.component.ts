import { Component, OnInit } from '@angular/core';
import { Hero } from './hero.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.scss'
})
export class HeroesComponent{
hero: Hero ={
  id:1,
  name:'wolverine'
};

constructor(){

}
ngOnInit():void{

}
}
