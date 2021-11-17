import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { IContact } from '../interfaces/IContact';
import { ISettings } from "src/share-interfaces/ISettings";

@Injectable({
    providedIn: 'root',
})
export class ContactService {
    private apiUrl: string;
    private getContactsEndpoint: string;

    constructor(private http: HttpClient) {
        this.appSettings();
    }

    appSettings() {
        this.http.get<ISettings>('../../assets/settings/app.settings.json')
        .toPromise()
        .then(data => {
            this.apiUrl = data.apiUrl;
            this.getContactsEndpoint = data.getContact;
        });
    }

    getContacts() {
        return this.http.get<Array<IContact>>(this.apiUrl + this.getContactsEndpoint);
    }
}