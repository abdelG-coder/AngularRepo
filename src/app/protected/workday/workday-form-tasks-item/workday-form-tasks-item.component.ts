import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup} from '@angular/forms';


@Component({
  selector: 'al-workday-form-tasks-item',
  templateUrl: './workday-form-tasks-item.component.html',
  styleUrls: ['./workday-form-tasks-item.component.scss']
})
export class WorkdayFormTasksItemComponent implements OnInit {

  @Input() task: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) { }


  ngOnInit() {
  }

}
