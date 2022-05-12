import { Component, OnInit } from '@angular/core';
import { UserdataService } from '../services/userdata.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css'],
})
export class AlbumComponent implements OnInit {
  users:any
  constructor(userData: UserdataService) {
    userData.users().subscribe((data) => {
      console.log('data', data);
      this.users = data;
    });
  }

  ngOnInit(): void {}
}
