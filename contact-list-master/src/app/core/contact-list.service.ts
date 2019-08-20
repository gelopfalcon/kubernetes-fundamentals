import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { Contact } from './models/contact';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactListService {

  constructor(private http: HttpClient) { }

  getContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>(environment.apiURL).pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  getContact(contactId: string): Observable<Contact> {
    return this.http.get<Contact>(`${environment.apiURL}/${contactId}`).pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  createContact(contact: Contact): Observable<Contact> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });    
    return this.http.post<Contact>(environment.apiURL, contact, { headers: headers })
      .pipe(
        tap(data => console.log('created contact: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  deleteContact(contactId: string): Observable<Contact> {
    return this.http.delete<Contact>(`${environment.apiURL}/${contactId}`).pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse) {
    return throwError(err.message);
  }
}
