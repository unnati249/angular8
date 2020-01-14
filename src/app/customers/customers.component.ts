import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {CollectionViewer, DataSource} from '@angular/cdk/collections';
import {BehaviorSubject, Observable, Subscription} from 'rxjs';
import { ApiService } from '../api.service';
import { ConfigurationServiceService } from '../configuration-service.service';

import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CustomersComponent{
  constructor(private api: ApiService, private http:HttpClient, private configService:ConfigurationServiceService) {}
  ds = new MyDataSource(this.api, this.http, this.configService);
}

export class MyDataSource  extends DataSource<string | undefined> {
  public _length = this.configService.length;
  private _pageSize = 1000;
 private _fetchedPages = new Set<number>();
 public _cachedData = Array.from<string>({length: this._length});
 public _dataStream = new BehaviorSubject<(string | undefined)[]>(this._cachedData);
 private _subscription = new Subscription(); 

  constructor(private api: ApiService, private http:HttpClient, private configService:ConfigurationServiceService) {
    super();

    // console.log(this._length);
    // // console.log(this.api.customerCountPropertye);
    // this.http.get(this.api.customerCount).subscribe(response => {
    //   this.lengths = response[0]['count'];
    //   console.log(this.lengths);
 // });

  }

  // ngOnInit(){
  //   console.log("***********in ngOnInit***********");

  //   this.http.get(this.api.customerCount).subscribe(response => {
  //     this._length = response[0]['count'];
      
  //     console.log(this._length);
  // });

  // }

  connect(collectionViewer: CollectionViewer): Observable<(string | undefined)[]> {
   // console.log(this.test);
     this._subscription.add(collectionViewer.viewChange.subscribe(range => {
       const startPage = this._getPageForIndex(range.start);
       const endPage = this._getPageForIndex(range.end - 1);
       for (let i = startPage; i <= endPage; i++) {
         this._fetchPage(i);
       }
     }));    
    return this._dataStream;
  }

  disconnect(): void {
    this._subscription.unsubscribe();
  }

  private _getPageForIndex(index: number): number {
    return Math.floor(index / this._pageSize);
  }

  private _fetchPage(page: number) {
    if (this._fetchedPages.has(page)) {
      return;
    }
    this._fetchedPages.add(page);
    // console.log("************length************");
    // console.log(this._length);
    this.http.get<string>(this.api.customerList + "?page="+(page+1)).subscribe((data) => {  
     this._cachedData.splice(page * this._pageSize, this._pageSize,
      ...Array.from(data));
      this._dataStream.next(this._cachedData);
  });  


        //let params = {"username":"unnati@on-track.in","password":"unnatiunnati"};
    // this.http.post(this.api.customerList,{"page":page}).subscribe(data=>{
    //   console.log(data);
    //   this._cachedData.splice(page * this._pageSize, this._pageSize,JSON.parse(data));
    //   this._dataStream.next(this._cachedData);
    // },err=>console.log(err),
    // ()=>console.log("data*****"));



    // Use `setTimeout` to simulate fetching data from server.
      // this._cachedData.splice(page * this._pageSize, this._pageSize,
      //     ...Array.from({length: this._pageSize})
      //         .map((_, i) => `Item #${page * this._pageSize + i}`));
      // this._dataStream.next(this._cachedData);
  }
}