import { Pipe, PipeTransform } from '@angular/core';
import { faker } from '@faker-js/faker';


@Pipe({
  name: 'adventurerUrl'
})
export class AdventurerUrlPipe implements PipeTransform {

  transform(word: string | null): string {
    return `https://api.dicebear.com/9.x/fun-emoji/svg?seed=${word ?? faker.name.findName()}`;
  }

}
