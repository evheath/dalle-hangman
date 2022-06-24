import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'assimilatePrompt'
})
export class AssimilatePromptPipe implements PipeTransform {

  public transform(value: string): string {
    return value.split(" ")
      .map(word => word.toLowerCase().replace(/[^a-z]+/g, ""))
      .filter(word => word.length > 0)
      .join(" ");
  }

}
