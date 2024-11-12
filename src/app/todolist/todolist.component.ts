import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DataService } from '../services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todolist',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {
  addItemList: any[] = []; 

  todoItems$: Observable<any[]>;

  constructor(public dataService: DataService) {
    this.todoItems$ = this.dataService.getTodoList(); 
  }

  ngOnInit(): void {
    this.todoItems$.subscribe((data) => {
      this.addItemList = data;
    });
  }

  addItem(inputElement: HTMLInputElement): void {
    const newItem = inputElement.value.trim();
    if (newItem) {
      this.dataService.createAddItem(newItem);
      inputElement.value = '';
    }
  }

  deleteItem(docId: string): void {
    this.dataService.deleteTodoItem(docId);
  }

  cheakedBox(item: any, event: Event): void {
    const inputElement = event.target as HTMLInputElement; 
    const isChecked = inputElement.checked; 
    
    const datatodoUpdate = {
      ...item, 
      isCompleted: isChecked 
    };
  
    this.dataService.updateTodoItem(item.id, datatodoUpdate).subscribe(() => {
      console.log(`Item ${item.newItem} updated with completion status: ${isChecked}`);
    });
  }
   
  
  }
