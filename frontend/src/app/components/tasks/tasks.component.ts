import { Component, OnInit } from '@angular/core';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {


  tasks:any=[];

  constructor(private taskService: TasksService) {
   }

  ngOnInit() {
    this.taskService.getTasks()
    .subscribe(
      res => {
        this.tasks = res;
        },
        err => console.log(err)
      )
  }
}
