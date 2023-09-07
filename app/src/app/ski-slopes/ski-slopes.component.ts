import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-ski-slopes',
  templateUrl: './ski-slopes.component.html',
  styleUrls: ['./ski-slopes.component.scss']
})
export class SkiSlopesComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.loadSkislopes().subscribe((value)=> {
      console.log(value);
    })
  }

}
