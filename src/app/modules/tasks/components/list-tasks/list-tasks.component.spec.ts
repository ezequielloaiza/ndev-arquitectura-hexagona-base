import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TaskRepository } from '@core/repositories/task.repository';
import { Task } from '@core/models/task.model';
import { TaskService } from '@infraestructure/services/task/task.service';
import { TaskRepositoryImpl } from '@infraestructure/repositories/task.repository.impl';

import { ListTasksComponent } from './list-tasks.component';


describe('ListTasksComponent', () => {
  let component: ListTasksComponent;
  let fixture: ComponentFixture<ListTasksComponent>;
  let taskRepository: TaskRepository;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListTasksComponent],
      imports: [HttpClientTestingModule],
      providers: [
        { provide: TaskRepository, useClass: TaskRepositoryImpl },
        TaskService,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTasksComponent);
    component = fixture.componentInstance;
    taskRepository = TestBed.inject(TaskRepository);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load tasks on init', async () => {
    const testTareas: Task[] = [
      new Task(1, 'Tarea 1', false),
      new Task(2, 'Tarea 2', true),
    ];

    jest.spyOn(taskRepository, 'getTasks').mockResolvedValue(testTareas);
    await component.ngOnInit();
    fixture.detectChanges();

    expect(taskRepository.getTasks).toHaveBeenCalled();
    expect(component.tasks.length).toBe(2);
    expect(component.tasks).toEqual(testTareas);
  });
});
