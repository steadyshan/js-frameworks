import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  webServiceURL = `http://localhost:8080/api`
  imageroot = "/Users/shantanu/Documents/GitHub/js-frameworks/Angular_lte_4/shan-cms-template/src/assets/all-images/";
  constructor(private http: HttpClient) { }
  
  getFolderContent(parentFolder:string) {
    return this.http.post<any>(`${this.webServiceURL}/listing`,parentFolder)
    .pipe(catchError(this.handleError));
  }
  moveImageFile(moveDetail:any):Observable<HttpResponse<any>> {
    return this.http.post<any>(`${this.webServiceURL}/move`,moveDetail)
    .pipe(catchError(this.handleError));
  }
  
  private handleError(error:HttpErrorResponse ){
    return throwError(() => new Error(error.message)) ;
  }
}
