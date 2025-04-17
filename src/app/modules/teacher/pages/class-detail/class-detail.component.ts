import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClassService } from '../../../../core/services/class.service'; // Подключаем сервис
import { SchoolClass } from '../../../../core/services/class.service';  // Импортируем тип SchoolClass

@Component({
  standalone:false,
  selector: 'app-class-detail',
  templateUrl: './class-detail.component.html',
  styleUrls: ['./class-detail.component.scss']
})
export class ClassDetailComponent implements OnInit {
  classData: SchoolClass | undefined;  // Объявляем classData как возможно undefined

  constructor(
    private route: ActivatedRoute,
    private classService: ClassService
  ) {}

  ngOnInit(): void {
    const classId = Number(this.route.snapshot.paramMap.get('id'));  // Получаем id из параметров маршрута

    this.classData = this.classService.getClassById(classId);  // Ищем класс по id

    if (!this.classData) {
      console.error('Class not found');
    }
  }
}
