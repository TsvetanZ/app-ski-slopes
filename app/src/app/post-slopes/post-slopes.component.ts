import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Ipost } from '../interfaces/post';

@Component({
  selector: 'app-post-slopes',
  templateUrl: './post-slopes.component.html',
  styleUrls: ['./post-slopes.component.scss']
})
export class PostSlopesComponent implements OnInit {

  posts: Ipost[] | null = null;
  errorFetchingData= false;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.loadPost(5).subscribe({
      next: (value) => {
        this.posts = value;
        console.log(value);
      },
      error: (err) => {
        this.errorFetchingData = true;
        console.error(err)
      }
      
    })
  }

}
