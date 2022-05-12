import { Component, OnInit } from '@angular/core';
import { UserdataService } from '../services/userdata.service';
@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  commentData:any
  constructor(userData: UserdataService) {
    userData.commentData().subscribe((data) => {
      console.log('data', data);
      this.commentData = data;
    });
  }


  ngOnInit(): void {
  }

}
