import { Injectable } from '@angular/core';
import{ HttpClient,HttpHeaders} from '@angular/common/http'
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CoronaStatsService {
  constructor(private _http: HttpClient) { }

  getStats() {
    return this._http.get<any[]>("https://api.covid19api.com/country/india?from=2020-03-29T00:00:00Z&to=2020-04-29T00:00:00Z")
      .pipe(map(result => result));
  }

}
