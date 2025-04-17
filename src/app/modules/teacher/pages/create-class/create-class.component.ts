import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClassService } from '../../../../core/services/class.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  standalone:false,
  selector: 'app-create-class',
  templateUrl: './create-class.component.html'
})
export class CreateClassComponent {
  classForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private classService: ClassService,
    private toastr: ToastrService,
    private router: Router
  ) {
    this.classForm = this.fb.group({
      name: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.classForm.valid) {
      const name = this.classForm.value.name;
      this.classService.createClass(name);
      this.toastr.success('Class created successfully!');
      this.router.navigate(['/teacher/classes']);
    }
  }
}
