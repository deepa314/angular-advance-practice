import { EventEmitter, Injectable, OnInit } from "@angular/core";
import { Server } from "../model/model";

@Injectable({
    providedIn:"root"
})
export class ServerService {
    servers:Server[];
    serverEmitter=new EventEmitter<Server[]>();
    constructor(){
        this.servers=[
           {id:1,name:"server1",desc:"tb"},
           {id:2,name:"server2",desc:"tb"},
           {id:3,name:"server3",desc:"tb"},

        ]
    }

    getServers(){
        return this.servers;
    }

    getServerById(id:number){
       return this.servers.find((v)=>v.id==id)
    }

    editServer(server:Server){
        this.servers=this.servers.map((v)=>{
            if(v.id==server.id){
                return server;
            }
            return v
        })
        this.serverEmitter.emit(this.servers.slice());
    }

    removeServer(id:number){
      this.servers.filter(v=>v.id!=id);
    }

    addServer(server:Server){
       if(server.id==0){
        server={
            ...server,
            id: 11
        }
       }
       this.servers.push(server);
       this.serverEmitter.emit(this.servers.slice());
    }

}