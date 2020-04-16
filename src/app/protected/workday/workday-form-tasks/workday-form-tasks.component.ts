import { Component, OnInit, Input, Output } from '@angular/core';
import { FormArray, FormGroup, FormBuilder} from '@angular/forms';
@Component({
  selector: 'al-workday-form-tasks',
  templateUrl: './workday-form-tasks.component.html',
  styles: []
})
export class WorkdayFormTasksComponent implements OnInit {

  @Input() tasks: FormArray;
  @Input() workdayForm: FormGroup;


  constructor(private fb: FormBuilder) { }

  ngOnInit() { }

  onAddedTask() {
    const taskGroup = this.fb.group({
      'title': 'A'
    });
    this.tasks.push(taskGroup);
  }

  onRemovedTask(index: number) {
    this.tasks.removeAt(index);
  }

}
