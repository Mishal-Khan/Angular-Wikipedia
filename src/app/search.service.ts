import { Injectable } from '@angular/core';
import {HttpHeaders, HttpClientJsonpModule, HttpClient, HttpParams  } from "@angular/common/http";
import { Observable, observable, of, empty } from 'rxjs';
import { map } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class SearchService {

  public baseUrl = "https://en.wikipedia.org/w/rest.php/v1/search/page?";
 
  public searchResults:any;
 
 
constructor(private httpClient: HttpClient) { }

  
  public searchEntries(term): Observable<any>{
    if (term === "" ){
      console.log("Not defined");
      return of(null);
    
    }else{
      console.log("defined");
      let params = { q :term }
      return this.httpClient.get(this.baseUrl, {params}).pipe(
        map(response => {
          
          console.log(response)
          
          return this.searchResults = response["pages"];
        })
      );
    }
    
  }
  public _searchEntries(term: string){
    return this.searchEntries(term);
  }
  
 
}
