import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { IKeyValue } from './api.interface';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private readonly dbName = 'profile';

  private descricao$ = new BehaviorSubject<string>(null);

  constructor(private readonly db: AngularFireDatabase) {}

  getProfile(): Observable<IKeyValue[]> {
    return this.db
      .list<any>(this.dbName)
      .snapshotChanges()
      .pipe(
        map((item) =>
          item.map((keyItem) => ({
            key: keyItem.payload.key,
            value: keyItem.payload.val(),
          }))
        ),
        tap({
          next: (profile) => {
            console.log(profile);
            const about = profile.find(
              (a) => a.key === 'about'
            ) as IKeyValue<string>;
            this.descricao$.next(about?.value ?? '');
          },
        })
      );
  }

  get descricao(): Observable<string> {
    return this.descricao$.asObservable();
  }
}
