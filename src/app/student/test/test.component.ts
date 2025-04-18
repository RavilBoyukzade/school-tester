import { Component, OnInit } from '@angular/core';

@Component({
  standalone:false,
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  test: any = null;

  ngOnInit(): void {
    const classCode = localStorage.getItem('classCode');
    if (classCode) {
      // Здесь мы можем симулировать получение теста по коду класса
      // Например, если код класса "123", то мы возвращаем тест для этого класса
      if (classCode === '123') {
        this.test = {
          title: 'Тест по математике',
          questions: [
            { question: '2 + 2 = ?', options: ['3', '4', '5'], correct: '4' },
            { question: '3 + 5 = ?', options: ['7', '8', '9'], correct: '8' }
          ]
        };
      } else {
        // Если код класса неверный, показываем сообщение
        alert('Неверный код класса');
      }
    }
  }
}
