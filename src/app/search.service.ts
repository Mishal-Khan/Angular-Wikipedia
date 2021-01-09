import { Injectable } from '@angular/core';
import {HttpHeaders, HttpClientJsonpModule, HttpClient, HttpParams  } from "@angular/common/http";
import { Observable, observable, of, empty } from 'rxjs';
import { map } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class SearchService {

  public baseUrl = "https://en.wikipedia.org/w/rest.php/v1/search/page?";
  //"https://en.wikipedia.org/wiki/api.php?action=opensearch&format=json&";
  //"https://en.wikipedia.org/w/api.php?action=opensearch&format=json&";
   
  //"https://en.wikipedia.org/w/index.php?";
  
  //"https://api.github.com/search/repositories";
  public searchResults:any;
 
 
constructor(private httpClient: HttpClient) { }

  //makes the HTTP request to get the resources and returns the response as observable;  
  public searchEntries(term): Observable<any>{
    if (term === "" ){
      console.log("Not defined");
      return of(null);
      //return empty();
    }else{
      console.log("defined");
      let params = { q :term }
      return this.httpClient.get(this.baseUrl, {params}).pipe(
        map(response => {
          
          console.log(response)
          console.log("hhh")
          return this.searchResults = response["pages"];
        })
      );
    }
    
  }
  public _searchEntries(term: string){
    return this.searchEntries(term);
  }
  //returns the response for the first method
 
}
