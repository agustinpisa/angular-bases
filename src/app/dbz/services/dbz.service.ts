import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})

export class DbzService {

  public characters: Character[] = [{
    id: uuid(),
    name: 'Krillin',
    power: 500,
  },{
    id: uuid(),
    name: 'Goku',
    power: 9500,
  },{
    id: uuid(),
    name: 'Vegeta',
    power: 7800,
  }
];

addCharacter(character: Character):void {
  //tomá todas las propiedades del character y exparsilas en este nuevo objeto -> (y se agrega la propiedad de id)
  const newCharacter: Character = { id: uuid(), ...character };

  this.characters.push(newCharacter);
}

// onDeleteCharacter(index: number):void {

//   console.log('EN EL MAIN', index);

//   this.characters.splice(index, 1);
// }

deleteCharacterById( id:string ){
  console.log('ID RECIBIDO EN SERVICE CLASS: ', id);
  this.characters = this.characters.filter( character => character.id != id);
}

}
