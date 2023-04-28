import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Headlines, Search } from './model';
import { Observable, map } from 'rxjs';
import { NewsService } from './services/news.service';

const HEADLINE_URL = 'https://newsapi.org/v2/top-headlines'
const SOURCES_URL = 'https://newsapi.org/v2/top-headlines/sources'
const API_KEY = '74b48a1deb29451a80c6fe83660cba0d'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit{
  form!: FormGroup
  search!: Search
  sources: string[] =[]
  result: Headlines[]=[]
  headlines$!: Observable<Headlines[]>

  news$!: Promise<Headlines[]>

  constructor(private fb:FormBuilder, private http: HttpClient, private newsSvc: NewsService){}


  COUNTRIES = [ 'ae', 'ar', 'at', 'au', 'be', 'bg', 'br', 'ca', 'ch', 'cn',
  'co', 'cu', 'cz', 'de', 'eg', 'fr', 'gb', 'gr', 'hk', 'hu', 'id', 'ie', 'il', 'in',
  'it', 'jp', 'kr', 'lt', 'lv', 'ma', 'mx', 'my', 'ng', 'nl', 'no', 'nz', 'ph', 'pl',
  'pt', 'ro', 'rs', 'ru', 'sa', 'se', 'sg', 'si', 'sk', 'th', 'tr', 'tw', 'ua', 'us',
  've', 'za' ]

  CATEGORIES = ['business','entertainment','general','health','science','sports','technology']

  ngOnInit(): void {
    this.form = this.createForm()

  }

  getNews(){
    const country = this.form.value['country']
    const category = this.form.value['category']
    this.news$ = this.newsSvc.getNews(country,category)
  }

  getHeadlineWithSubs(){
    this.getHeadline().subscribe({
        next: v =>{
          console.info(">>> Data",v)
          this.result = v
        },
        error: err =>{
          console.error(">>> ERROR",err)
        },
        complete: () =>{
          console.warn(">>> Complete")
        }
    })
  }

  getHeadline(){
    this.search = this.form.value as Search
    console.info('>> Search Terms',this.search)

    const params = new HttpParams().set('apiKey',API_KEY).set('country',this.search.country).set('category',this.search.category)

    return this.http
      .get<Headlines[]>(HEADLINE_URL,{ params })
      .pipe(
        map(
          (v:any)=>{
            const temp = v['articles'] as any[]
            return temp.map(
              w=>{
                return{
                  title: w['title'],
                  description: w['description'],
                  url: w['url']
                } as Headlines
              }
            )
          }
        )
      )
  }

  private createForm(): FormGroup{
    return this.fb.group({
      country: this.fb.control('',[Validators.required]),
      category: this.fb.control('',[Validators.required])
    })
  }

}


