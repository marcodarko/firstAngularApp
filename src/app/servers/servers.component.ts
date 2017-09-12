import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

allowNewServer =false;

serverName='';
myServers= ['Default Server 1', 'Default Server 2'];
serverCreation = 'no server was created';
created = false;

  constructor() { 
  	setTimeout(()=>{ this.allowNewServer = true},2000);
  }

  ngOnInit() {
  }

  onCreate(){
  	this.created = true;
  	this.myServers.push(this.serverName);
  	this.serverCreation='server '+this.serverName+' was created';
  }

  handleChange(event: any){
  	this.serverName= event.target.value;
  }

}
