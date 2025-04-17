import { Injectable } from '@angular/core';

// Интерфейс Test
export interface Test {
  title: string;
  description: string;
  date: string;
}

// Интерфейс SchoolClass
export interface SchoolClass {
  id: number;
  name: string;
  code: string;
  students: number;
  tests: Test[];
}

@Injectable({
  providedIn: 'root'
})
export class ClassService {
  private classes: SchoolClass[] = [
    { 
      id: 1, 
      name: 'Class 1', 
      code: 'C001', 
      students: 20, 
      tests: [] 
    },
    {
      id: 2,
      name: 'Class 2',
      code: 'C002',
      students: 25,
      tests: []
    }
  ];

  // Метод для получения всех классов
  getClasses(): SchoolClass[] {
    return this.classes;
  }

  // Метод для получения конкретного класса по id
  getClassById(id: number): SchoolClass | undefined {
    return this.classes.find(cls => cls.id === id);
  }

  // Метод для добавления теста в класс
  addTestToClass(classId: number, test: Test): void {
    const classData = this.classes.find(cls => cls.id === classId);
    if (classData) {
      classData.tests = classData.tests || [];
      classData.tests.push(test);
    }
  }

  // Метод для создания нового класса
  createClass(name: string): void {
    const newClass: SchoolClass = {
      id: this.classes.length + 1,
      name: name,
      code: `C00${this.classes.length + 1}`,
      students: 0,
      tests: []
    };
    this.classes.push(newClass);
  }
}
