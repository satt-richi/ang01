import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../subject.service';
import { Location } from '@angular/common';

import { Subject } from '../subject';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit {
  subjects: Subject[];

  constructor(
    private subjectService: SubjectService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getSubjects();
  }

  getSubjects(): void {
    this.subjectService.getSubject()
      .subscribe(subjects => this.subjects = subjects);
  }
  
  goBack(): void {
    this.location.back();
  }
  
}
