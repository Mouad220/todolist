import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Firestore, addDoc, collection, collectionData, deleteDoc, doc } from '@angular/fire/firestore';
import { setDoc } from 'firebase/firestore';
import { catchError, from, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public firestore: Firestore) { }

  async createAddItem(newItem: string) {
    try {
      const docRef = await addDoc(collection(this.firestore, 'addItem'), {
        newItem: newItem
      });
      console.log('Document written with ID: ', docRef.id);
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  }

  getTodoList(): Observable<any[]> {
    const addItemCollection = collection(this.firestore, 'addItem');
    return collectionData(addItemCollection, { idField: 'id' }).pipe(
      catchError((error) => {
        console.error('Error fetching Firestore data:', error);
        return of([]); 
      })
    );
  }
  

  async deleteTodoItem(docId: string) {
    try {
      const docRef = doc(this.firestore, `addItem/${docId}`);
      await deleteDoc(docRef);
      console.log('Document deleted with ID: ', docId);
    } catch (error) {
      console.error('Error deleting document: ', error);
    }
  }

  updateTodoItem(docId: string, datatodoUpdate: { newItem: string; isCompleted: boolean }): Observable<void> {
    const docRef = doc(this.firestore, `addItem/${docId}`);
    const promise = setDoc(docRef, datatodoUpdate); 
    return from(promise).pipe(
      catchError((error) => {
        console.error('Error updating document: ', error);
        return of(); 
      })
    );
    
  }


  
}