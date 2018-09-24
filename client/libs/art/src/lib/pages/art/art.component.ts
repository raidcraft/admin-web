import { Component, OnInit } from '@angular/core';
import { ArtService } from '../../services';

@Component({
  selector: 'faldoria-art',
  templateUrl: './art.component.html',
  styleUrls: ['./art.component.scss']
})
export class ArtComponent implements OnInit {

  constructor(public art: ArtService) { }

  ngOnInit() {
  }

}
