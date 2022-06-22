import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'blobToUrl'
})
export class BlobToUrlPipe implements PipeTransform {
  constructor(
    private sanitizer: DomSanitizer
  ) { }

  transform(blob: string) {
    const value = `data:image/png;base64,${blob}`;
    return this.sanitizer.bypassSecurityTrustUrl(value);
  }

}
