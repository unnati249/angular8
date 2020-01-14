import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiService } from './api.service';



@Injectable({
  providedIn: 'root'
})
export class ConfigurationServiceService {
length;
  constructor(private http: HttpClient,private api:ApiService) { }

  loadConfigurationData(): Promise<any> {
  //   this.http.get(this.api.customerCount).subscribe(response => {
  //     //  this.customerCountProperty = response[0]['count'];
  //     console.log(response[0]['count']);
  //     return response[0]['count'];
  // });
    return this.http.get<any>(this.api.customerCount).toPromise().then((result) => {
      this.length = result[0]['count'];
    })
  }

}
