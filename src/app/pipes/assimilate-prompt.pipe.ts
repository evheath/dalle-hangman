import { Pipe, PipeTransform } from '@angular/core';
import { assimilatePrompt } from 'library';

@Pipe({
  name: 'assimilatePrompt'
})
export class AssimilatePromptPipe implements PipeTransform {

  transform(value: string): string {
    return assimilatePrompt(value);
  }

}
