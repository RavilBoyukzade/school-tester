import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClassService } from '../../../../core/services/class.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  standalone:false,
  selector: 'app-add-test',
  templateUrl: './add-test.component.html'
})
export class AddTestComponent implements OnInit {
  testForm: FormGroup;
  classId!: number;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private classService: ClassService,
    private toastr: ToastrService,
    private router: Router
  ) {
    this.testForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      date: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.classId = Number(this.route.snapshot.paramMap.get('id'));
  }

  onSubmit() {
    if (this.testForm.valid) {
      // Получаем данные теста
      const test = this.testForm.value;

      // Логика добавления теста
      const allClasses = this.classService.getClasses();
      const classData = allClasses.find(cls => cls.id === this.classId);
      if (classData) {
        // Если класс найден, добавляем тест
        classData.tests = classData.tests || [];
        classData.tests.push(test);
        this.toastr.success('Test added successfully!');
        this.router.navigate([`/teacher/classes/${this.classId}`]);
      }
    }
  }
}
