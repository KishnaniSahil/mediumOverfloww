import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApplicationConstants } from '../shared/Constants/applicationConstant';

@Injectable({
  providedIn: 'root'
})
export class MedServiceService {

  constructor(private httpclient:HttpClient) { }

  fetchBlogs():Observable<any>{
    return this.httpclient.get(`${ApplicationConstants.APIURL}/blogs`);
  }
  fetchBlog(slug:string):Observable<any>{
    return this.httpclient.get(`${ApplicationConstants.APIURL}/blogs/${slug}`)

  }
  fetchBlog2():Observable<any>{
    return this.httpclient.get(`${ApplicationConstants.APIURL}/category`)

  }
}
