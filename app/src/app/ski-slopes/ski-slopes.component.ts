import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { IskiSlopes } from '../interfaces/skiSlopes';

@Component({
  selector: 'app-ski-slopes',
  templateUrl: './ski-slopes.component.html',
  styleUrls: ['./ski-slopes.component.scss']
})
export class SkiSlopesComponent implements OnInit {

  skiSlopes: IskiSlopes[] | null = null;


  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.loadSkislopes().subscribe({
      next:(value) => {
        this.skiSlopes = value;
      },
      error(err) {
        console.error(err);
      },
    })
  }

}

//, (err) => console.log(err)
// this.apiService.loadSkislopes().subscribe((value)=> {
//   console.log(value);
// })