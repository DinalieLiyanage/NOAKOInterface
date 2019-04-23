import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

import { Observable } from 'rxjs';
import { IUploadImage } from '../Models/UploadImage';


type EntityResponseType = HttpResponse<IUploadImage>;



@Injectable({ providedIn: 'root' })
export class UploadService {

    private resourceUrl = ' '  + 'api/user';
    private resourceSearchUrl = ' ' + '/api/user/_search/';

    constructor(private http: HttpClient) { }

    create(imageDetail: IUploadImage): Observable<EntityResponseType> {
        return this.http.post<IUploadImage>(this.resourceUrl, imageDetail, { observe: 'response' });
    }

    update(imageDetail: IUploadImage): Observable<EntityResponseType> {
        return this.http.put<IUploadImage>(this.resourceUrl, imageDetail, { observe: 'response' });
    }

    // getVideo(): {

    // }
    // find(id: string): Observable<EntityResponseType> {
    //     return this.http.get<IUserDAO>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    // }

    // delete(id: string): Observable<HttpResponse<any>> {
    //     return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    // }

    // query(req?: any): Observable<EntityArrayResponseType> {
    //     return this.http.get<IUserDAO[]>(this.resourceUrl, {   observe: 'response' });
    // }

    // searchByName(req?: any): Observable<EntityArrayResponseType> {
    //     return this.http.get<IUserDAO[]>(this.resourceSearchUrl+req, {   observe: 'response' });
    // }

}
