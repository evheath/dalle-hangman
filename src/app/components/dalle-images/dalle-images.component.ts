import { Component, Input, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Dalle } from 'library';
import { Observable } from 'rxjs';
import { DalleService } from 'src/app/services/dalle.service';

@Component({
  selector: 'app-dalle-images',
  templateUrl: './dalle-images.component.html',
  styleUrls: ['./dalle-images.component.css']
})
export class DalleImagesComponent implements OnInit {

  @Input() dalleData: Dalle = {} as Dalle;

  constructor(
    public storage: AngularFireStorage,
    public dalleService: DalleService,
  ) {
  }

  ngOnInit(): void {
  }

}
