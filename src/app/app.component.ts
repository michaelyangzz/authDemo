import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs'
import { map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  withCredentials: true
};


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private http: HttpClient, private router: Router) {
  }

  tt() {
    debugger;
    this.http.get('https://localhost:44342/api/t/aa', httpOptions).pipe(
      map(x => {
        debugger;
        return null;
      }),
      catchError(this.handleError('', []))
    ).subscribe();

  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      debugger;
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      if (error.status === 401) {
        this.router.navigate(['login']);
        alert('No Authorize!!!!')
      }


      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
