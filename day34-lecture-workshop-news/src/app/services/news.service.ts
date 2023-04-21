import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, firstValueFrom, map } from "rxjs";
import { Headlines, NEWS_API_KEY, NEWS_TOP_HEADLINES_API } from "../model";

@Injectable()

export class NewsService{
  constructor(private http: HttpClient){}

  getNews(country:string, category:string, pageSize=5): Promise<Headlines[]>{
    const params = new HttpParams()
      .set('country',country)
      .set('category',category)
      .set('pageSize',5)
    const headers = new HttpHeaders()
      .set('X-Api-Key',NEWS_API_KEY)

    return firstValueFrom(
      this.http.get<Headlines[]>(NEWS_TOP_HEADLINES_API,{params,headers})
      .pipe(
        map((r:any)=>r['articles']as any[]),
        map((ar:any[])=>{
          return ar.map(
            (a:any)=>{
              return {
                source: a['source']['name'],
                author: a['author'],
                title: a['title'],
                description: a['description'],
                url: a['url'],
                urlToImage: a['urlToImage'],
                publishedAt: a['publishedAt'],
                content: a['content'],
              } as Headlines
            }
          )
        })
        )
        )
      }

  private getCountries(): Observable<Country[]>{

    const csv = this.getCountries.join(',')
    const params = new HttpParams().set('codes',csv)
    return this.http.get<Country[]>(COUNTRIES_API,{ params })
      .pipe(
        map((v:any[])=>{
          return v.map(c=>{
            return{
              name: c['name']['common'],
              code:c['cca2'].toLowerCase(),
              flag: c['flag']
            } as Country
          })
        })
      )
  }
}
