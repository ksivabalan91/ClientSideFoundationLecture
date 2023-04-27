import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit{
  allowNewServer = true;
  serverCreation = 'Pending Server Creation';
  msg = '';
  color = 'color: black';
  modelMsg = '';
  boo = false;
  servers: string[] =[];
  
  constructor(){
    setTimeout(()=>{
      this.allowNewServer = false
    }, 2000)
  }
  
  ngOnInit(): void {
  }

  onCreateServer(){
    this.servers.push(this.msg);
    this.serverCreation = this.msg+' server was created';
  }
  switch(){
    if(this.boo){
      console.log('boo is true')
      this.boo = false;
    }else{
      console.log('boo is false')
      this.boo = true;
    }
  }

  onUpdateServerName(event:any){
    this.msg = event.target.value;
    console.log(event);
  }

  textcolor(){
    this.color = 'color: white; background-color: gray;'
    setTimeout(()=>{this.color='color: black'},1000)
  }

}
