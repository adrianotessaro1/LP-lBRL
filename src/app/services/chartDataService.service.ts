import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  interval,
  Observable,
  of,
  startWith,
  switchMap,
  timestamp,
} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChartDataService {
  private endpoint = 'https://reserve.fact.finance/tokeniza/api';
  constructor(private http: HttpClient) {}

  // Emits data every 10s
  public liveData(): Observable<ChartData> {
    return of({
      timestamp: Date.now(),
      saldoBRL: 8917,
      totalSupply: 89100,
    });
    return interval(10000).pipe(
      startWith(0),
      switchMap(() => this.http.get<ChartData>(`${this.endpoint} / current`))
    );
  }
}

export interface ChartData {
  timestamp: number;
  saldoBRL: number;
  totalSupply: number;
}
