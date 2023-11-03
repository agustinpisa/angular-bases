import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent {



@Input()
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 15,
}]

// @Output()
//   public onDeleteCharacter: EventEmitter<number> = new EventEmitter();

@Output()
public deleteCharacterById: EventEmitter<string> = new EventEmitter();

deleteCharacter(character: Character): void{

  console.log('Numero de id: ', character.id );
  this.deleteCharacterById.emit(character.id);
}

}
