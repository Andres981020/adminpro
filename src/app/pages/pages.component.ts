import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../services/settings.service';

declare function custonInit():any;

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements OnInit {

  public linkTheme = document.querySelector('#theme');
  
  constructor( private setting: SettingsService) { }

  ngOnInit(): void {
    custonInit();
  }
}
