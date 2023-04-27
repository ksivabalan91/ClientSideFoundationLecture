import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent {
  
  @Input()
  id!: string;
  @Input()
  percentage: number = 50;
  sliderValue!: number;
  sliderChanged: boolean = false;
  serverStatus: string = 'offline';
  buttonColor: string = 'btn btn-primary'

  constructor(){
    this.serverStatus = Math.random()>0.5?'online':'offline';
    this.sliderValue = this.percentage;
  }
  getServerStatus(){
    return this.serverStatus;
  }
  slider(event: any){
    // console.log(event);
    this.sliderValue = parseFloat(event.target.value);
    this.sliderChanged=true;
  }  
  setValue(){
    this.percentage = this.sliderValue;    
    this.sliderChanged=false;
  }
  barColor(){
    return this.percentage>=75?'red':this.percentage>50?'orange':'green';
  }
  
  checkServer(){
    return this.serverStatus==='online'?true:false;    
  }

  getColor(){
    return this.checkServer()?'green':'red'
  }
  switchOnOff(){
    return this.checkServer()?this.serverStatus='offline':this.serverStatus='online'
  }
  startStop(){
    return this.checkServer()?'Stop':'Start'
  }

}
