import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, timer } from 'rxjs';
import { take } from 'rxjs/operators';
import { Toastr } from 'src/app/shared/models/toastr';
  
@Injectable({
 providedIn: 'root'
})
export class ToastrService {

   public listeMessage: Toastr[] = [];
    /*[{
      category: 'success', 
      message: 'Le service de retour utilisateur fonctionne !'
    }];*/
 
 private toastrs: BehaviorSubject<Toastr[]> = <BehaviorSubject<Toastr[]>>new BehaviorSubject(this.listeMessage);
 public readonly toastrs$: Observable<Toastr[]> = this.toastrs.asObservable();
 
 constructor() { }
 
 public showToastr(toastr: Toastr): void {

    this.listeMessage.push(toastr)
    
    timer(0, 3000).pipe(take(2)).subscribe(i => {
      if (i === 0) {
          this.toastrs.next(this.listeMessage);
      } else {
          this.removeTosterFromListMessage(toastr);
          this.toastrs.next(this.listeMessage);
      }
    });
  }

  public closeToastr(toastr: Toastr): void {
    this.removeTosterFromListMessage(toastr);
    this.toastrs.next(this.listeMessage);
  }

  public removeTosterFromListMessage(toastr: Toastr): void {
    const index: number = this.listeMessage.indexOf(toastr);
    if (index !== -1) {
        this.listeMessage.splice(index, 1);
    } 
  }
}