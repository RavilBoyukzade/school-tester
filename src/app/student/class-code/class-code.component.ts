import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  standalone:false,
  selector: 'app-class-code',
  templateUrl: './class-code.component.html',
  styleUrls: ['./class-code.component.scss']
})
export class ClassCodeComponent {

  showInput = false;
  classCode = '';

  constructor(private router: Router) {}

  toggleInput(): void {
    this.showInput = !this.showInput;
  }

  submitCode(): void {
    if (this.classCode.trim()) {
      // Переходим на страницу теста, например:
      this.router.navigate(['/student/tests', this.classCode]);
    }
  }
}
