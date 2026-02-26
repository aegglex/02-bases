import { Component, inject } from '@angular/core';
import { CharacterList } from "../../components/dragonball/character-list/character-list";
import { CharacterAdd } from "../../components/dragonball/character-add/character-add";
import { DragonballService } from '../../services/dragonball.services';

@Component({
  selector: 'dragonball-super',
  templateUrl: './dragonball-super-page.component.html',
  imports: [CharacterList, CharacterAdd],
})

export class DragonballSuperPageComponent {

  // Esto es la fomra tradicional de DI(Inyeccion de dependencias)
// constructor(
//   public dragonballService: DragonballService,
// ) {}

public DragonballService = inject(DragonballService);

}
