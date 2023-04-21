import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { URL, UppercaseResponse } from "../model"
import { firstValueFrom } from "rxjs"


@Injectable()
export class UpperCaseService{
  constructor(private http: HttpClient){}

  // GET /uppercase?msg=msg
  getUppercase(msg:string): Promise<UppercaseResponse>{
    const params = new HttpParams().set("msg",msg)

    return firstValueFrom(
      this.http.get<UppercaseResponse>(URL,{params})
      )
    }

  // POST /uppercase
  // Content-Type: application/json
  postUppercaseAsJson(msg:string):Promise<UppercaseResponse>{
    const payload: any = { msg }

    return firstValueFrom(
      this.http.post<UppercaseResponse>(URL,payload)
      )
    }

    // POST /uppercase
    // Content-Type: application/x-www-form-url-encoded
  postUppercaseAsForm(msg:string):Promise<UppercaseResponse>{
    const form = new HttpParams().set('msg',msg)
    const headers = new HttpHeaders()
      .set('Content-Type','x-www-form-urlencoded')

    const payload: any = { msg }

    return firstValueFrom(
      this.http.post<UppercaseResponse>(URL,form.toString(),{headers})
    )
  }



}
