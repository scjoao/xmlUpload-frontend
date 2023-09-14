import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class XmlUploadService {

  private baseXmlUrl = "http://localhost:8080";

  constructor(private http: HttpClient) {
  }

  public xmlUpload(xmlFile: File): Observable<HttpEvent<any>> {

    const formData: FormData = new FormData();
    formData.append('xmlFile', xmlFile);

    const request = new HttpRequest("POST", `${this.baseXmlUrl}/xmlUpload`, formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(request);
  }

  public getXmlFiles(): Observable<any> {
    return this.http.get(`${this.baseXmlUrl}/xmlFiles`);
  }
}
