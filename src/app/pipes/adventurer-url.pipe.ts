import { Pipe, PipeTransform } from '@angular/core';
import { faker } from '@faker-js/faker';

@Pipe({
  name: 'adventurerUrl'
})
export class AdventurerUrlPipe implements PipeTransform {

  transform(word: string | null): string {
    if (!word) {
      return `https://avatars.dicebear.com/api/adventurer/'${faker.name.findName()}.svg`;
    } else {
      return `https://avatars.dicebear.com/api/adventurer/'${word}.svg`;

    }
  }

}
