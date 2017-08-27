import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ShowsService {

  constructor(private http:Http) { }

  /**
   * get the shows information
   */
  getShowsInformation(): Observable<any> {
    return this.http.get('http://api.tvmaze.com/shows');
  }

}

