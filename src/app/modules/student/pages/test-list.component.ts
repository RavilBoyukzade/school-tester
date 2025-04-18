import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // 👈 импортируем модуль с пайпами

@Component({
  selector: 'app-test-list',
  standalone: true,
  imports: [CommonModule], // 👈 добавили сюда CommonModule
  templateUrl: './test-list.component.html',
  styleUrls: ['./test-list.component.scss'],
})
export class TestListComponent {
  tests = [
    { title: 'Математика', subject: 'Алгебра', activeUntil: new Date(Date.now() + 3600000) },
    { title: 'Химия', subject: 'Органика', activeUntil: new Date(Date.now() - 3600000) },
  ];

  get activeTests() {
    const now = new Date();
    return this.tests.filter(test => new Date(test.activeUntil) > now);
  }
}
