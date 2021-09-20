import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { TasksService } from 'src/app/services/tasks.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-private-tasks',
  templateUrl: './private-tasks.component.html',
  styleUrls: ['./private-tasks.component.css']
})
export class PrivateTasksComponent implements OnInit {

  privateTasks: any = [];
  constructor(private taskService: TasksService, private router: Router,
    private authService: AuthService) { }

  ngOnInit() {
    this.taskService.getPrivateTasks()
      .subscribe(
        res => {
          this.privateTasks = res},
        err => {
          if (err instanceof HttpErrorResponse) {
            if (err.status === 401) {
              this.authService.logout();
              this.router.navigate(['/signin']);
            }
          }
        }
      )
  }
}
