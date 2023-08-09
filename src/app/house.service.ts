import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { House } from './house';



@Injectable({
  providedIn: 'root'
})
export class HouseService {

  constructor(private http:HttpClient) { }
  private serverUrl = "http://localhost:8080"

  houses: House[] = [];

  public getHouses(): Observable<House[]>{
    return this.http.get<House[]>(`${this.serverUrl}/houses`)
  }

  public addHouse(house: House): Observable<House>{
    return this.http.post<House>(`${this.serverUrl}/houses/`, house);
  }

  public updateHouse(house: House): Observable<House>{
    return this.http.put<House>(`${this.serverUrl}/houses/${house.id}`, house);
  }

  public deleteHouse(id: number): Observable<void>{
    return this.http.delete<void>(`${this.serverUrl}/houses/${id}`);
  }

  public getHouse(id: number): Observable<House>{
    return this.http.get<House>(`${this.serverUrl}/houses/${id}`)
  }
}
