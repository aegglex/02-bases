import { Component, signal } from '@angular/core';
import { CharacterList } from "../../components/dragonball/character-list/character-list";

interface Character{
  id: number;
  name: string;
  power: number;
}

@Component({
  selector: 'app-dragonball-super-page.component',
  templateUrl: './dragonball-super-page.component.html',
  imports: [CharacterList],
})

export class DragonballSuperPageComponent {
  name = signal('');
  power = signal(0);

  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9001 },
    { id: 2, name: 'Vegeta', power: 8000 },
  ]);

  addCharacter() {
    console.log(`Valor cargado: ${this.name()} ( ${this.power()} )`)

    if ( !this.name() || !this.power() || this.power() <= 0) {
      console.error('Valor rechazado!🔴❌')
      return;
    }

    console.log('Valor agregado!🟢✅')
    const newCharacter: Character = {
      id: this.characters().length + 1,
      name: this.name(),
      power: this.power(),
    }

    this.characters.update ( (list) => [...list, newCharacter] );
    this.resetFields();
  }

  resetFields() {
    this.name.set('');
    this.power.set(0);
  }
}
