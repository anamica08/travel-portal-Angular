import { Injectable } from '@angular/core';
import{ HttpClient,HttpHeaders} from '@angular/common/http'
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CoronaStatsService {
  constructor(private _http: HttpClient) { }

  getStats(country,priordate,today) {
    return this._http.get<any[]>(`https://api.covid19api.com/country/${country}?from=${priordate}&to=${today}`)
      .pipe(map(result => result));
  }

}
