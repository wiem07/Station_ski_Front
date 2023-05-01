import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Revenue} from "../model/revenue";


@Injectable()
export class RevenueService {
    readonly apiUrl = 'http://localhost:8089/revenue';

    constructor(private httpClient: HttpClient) { }

    getAllRevenues(): Observable<Revenue[]> {
        return this.httpClient.get<Revenue[]>(`${this.apiUrl}/retrieve-all-revenues`);
    }

    getRevenueById(id: number): Observable<Revenue> {
        return this.httpClient.get<Revenue>(`${this.apiUrl}/retrieve-revenues/${id}`);
    }

    createRevenue(revenue: Revenue): Observable<Revenue> {
        return this.httpClient.post<Revenue>(`${this.apiUrl}/add-revenue`, revenue);
    }

    updateRevenue(revenue: Revenue): Observable<Revenue> {
        return this.httpClient.put<Revenue>(`${this.apiUrl}/update-revenue`, revenue);
    }

    deleteRevenue(id: number): Observable<any> {
        return this.httpClient.delete(`${this.apiUrl}/remove-revenue/${id}`);
    }


}
