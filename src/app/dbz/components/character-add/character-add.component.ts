import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-character-add',
  templateUrl: './character-add.component.html',
  styleUrls: ['./character-add.component.css']
})
export class CharacterAddComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character ={
    name: '',
    power: 0,
  }

  emitCharacter():void {
    console.log(this.character);

    if (this.character.name.length === 0) return;

    this.onNewCharacter.emit(this.character);

    this.character= {name: '', power: 0};


    // con esto solo se modifica la propiedad del objecto , pero la idea era inicializar un objeto nuevo como arriba
    // this.character.name = "";
    // this.character.power = 0;
  }
}
