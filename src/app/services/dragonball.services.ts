import { effect, Injectable, signal } from '@angular/core';
import type { Character } from '../interfaces/character';

const loadFromLocalStorage = (): Character[] => {
  const characters = localStorage.getItem('characters')
  return characters ? JSON.parse(characters) : [];
}

@Injectable({providedIn: 'root'})
export class DragonballService {
  characters = signal<Character[]>( loadFromLocalStorage() );

  SaveToLocalStorage = effect( () => {
    localStorage.setItem('characters', JSON.stringify(this.characters()));
  });

  addCharacter(character: Character) {
    this.characters.update((list) => [...list, character]);
  }

}
