import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { ListTasksComponent } from './components/list-tasks/list-tasks.component';
import { TasksRoutingModule } from './tasks-routing.module';

@NgModule({
  declarations: [ListTasksComponent],
  imports: [
    CommonModule,
    TasksRoutingModule,
    TranslateModule,
    HttpClientModule,
  ],
})
export class TasksModule {}
