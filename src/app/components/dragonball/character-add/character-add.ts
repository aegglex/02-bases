import { Component, output, signal } from '@angular/core';
import type { Character } from '../../../interfaces/character';

@Component({
  selector: 'dragonball-character-add',
  templateUrl: './character-add.html',
})

export class CharacterAdd {
  name = signal<string>('Gohan');
  power = signal<number>(100);

  newCharacter = output<Character>();

  addCharacter(){
    if ( !this.name() || !this.power() || this.power() <= 0) {
      console.error('Valor rechazado!🔴❌')
      return;
    }

    console.log('Valor agregado!✅🟢');

    const newCharacter: Character = {
      id: Date.now(),
      name: this.name(),
      power: this.power(),
    }

    this.newCharacter.emit(newCharacter);
    this.resetFields();
  }

  resetFields() {
    this.name.set('');
    this.power.set(0);
  }
}
