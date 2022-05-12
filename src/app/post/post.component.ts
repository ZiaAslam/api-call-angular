import { Component, OnInit } from '@angular/core';
import { UserdataService } from '../services/userdata.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
postData: any;

  constructor(userData: UserdataService) {
    userData.postData().subscribe((data) => {
      console.log('data', data);
      this.postData = data;
    });
  }


  ngOnInit(): void {
  }

}
