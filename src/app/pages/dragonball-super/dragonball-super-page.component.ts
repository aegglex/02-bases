import { Component, signal } from '@angular/core';

interface Character{
  id: number;
  name: string;
  power: number;
}

@Component({
  selector: 'app-dragonball-super-page.component',
  imports: [
    // NgClass
  ],
  templateUrl: './dragonball-super-page.component.html',
})

export class DragonballSuperPageComponent {
  name = signal('Gohan');
  power = signal(100);

  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9001 },
    { id: 2, name: 'Vegeta', power: 8000 },
    { id: 4, name: 'Yamcha', power: 500 },
    { id: 3, name: 'Piccolo', power: 3000 },
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

    // this.characters().push(newCharacter); no es recomendable usar valores como push porque trabajamos con señales

    this.characters.update ( (list) => [...list, newCharacter] );
    this.resetFields();
  }

  resetFields() {
    this.name.set('');
    this.power.set(0);
  }

  // powerClasses = computed(() => {
  //   return {
  //     'text-danger': true,
  //   };
  // });
}
