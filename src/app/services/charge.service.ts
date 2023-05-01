import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Charge } from '../Model/charge';

@Injectable({
    providedIn: 'root'
})
export class ChargeService {

    private API_URL = 'http://localhost:8089/charge';

    constructor(private httpClient: HttpClient) { }

    getAllCharges(): Observable<Charge[]> {
        return this.httpClient.get<Charge[]>(`${this.API_URL}/rgit`);
    }

    addCharge(charge: Charge): Observable<Charge> {
        return this.httpClient.post<Charge>(`${this.API_URL}/add-charge`, charge);
    }

    updateCharge(charge: Charge): Observable<Charge> {
        return this.httpClient.put<Charge>(`${this.API_URL}/update-charge`, charge);
    }

    deleteCharge(idCharge: number): Observable<any> {
        return this.httpClient.delete(`${this.API_URL}/delete-charge/${idCharge}`);
    }
}
