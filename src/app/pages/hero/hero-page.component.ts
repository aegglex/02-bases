import { UpperCasePipe } from "@angular/common";
import { Component, signal, computed } from "@angular/core";

@Component({
  selector: 'app-hero-component',
  templateUrl: './hero-page.component.html',
  imports:  [UpperCasePipe],
})

export class HeroPageComponent {
  name = signal('Ironman');
  age = signal(45);

  heroDescription = computed(() => {
    const description = `${this.name()} - ${this.age()}`;
    return description;
  });

//   capitalizedName = computed<string>(() => {
//   return this.name().toUpperCase();
// });  <==== esto seria para retornar de forma explicita el metodo

  // capitalizedName = computed(() => {
  //   const capitalized = `${this.name().toUpperCase()}`;
  //   return capitalized;
  // })  <=== mas larga

  capitalizedName = computed(() => this.name().toUpperCase());

  changeHero() {
    this.name.update( name => 'Spiderman' );
    this.age.update(age => 22);
  }

  resetForm() {
    this.name.set('Ironman');
    this.age.set(45);
  }

  changeAge() {
    this.age.update(age => 60);
  }
}
