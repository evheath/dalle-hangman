import { Component, Input, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-dalle-images',
  templateUrl: './dalle-images.component.html',
  styleUrls: ['./dalle-images.component.css']
})
export class DalleImagesComponent implements OnInit {

  public urls: Observable<string | null>[] = [];

  @Input() dalleId: string = "";

  constructor(
    public storage: AngularFireStorage
  ) { }

  ngOnInit(): void {
    console.log(`DalleImagesComponent.ngOnInit()`);
    for (let i = 1; i <= 9; i++) {
      this.urls.push(this.getUrl(i));
    }
  }

  /**
   * getUrl
   */
  public getUrl(number: number): Observable<string | null> {
    let location = `${this.dalleId}/${number}.jpg`
    return this.storage.ref(location).getDownloadURL();
  }

}
