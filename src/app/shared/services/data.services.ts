import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map, timer } from "rxjs";
import { Blog, Group, User } from "../model/model";

@Injectable({
    providedIn:"root",
})

export class DataService{
    constructor(){}

    getUser():Observable<User>{
        return timer(5000).pipe(
            map((x) => ({
              id: 1,
              name: 'Rajiv',
              age: 24,
            }))
          );
    }

    getBlogById(id:number):Observable<Blog>{
        return timer(5000).pipe(
            map((x)=>({
                postId: 1,
                title: 'Learn RxJS',
                averageReadingTime: 5,
                category: 'Angular',
            }))
        )
    }

    getCategoryById(id:number):Observable<Group[]>{
        return timer(2000).pipe(
            map((x) => [
              {
                id: 1,
                text: 'Group 1',
              },
              {
                id: 2,
                text: 'Group 2',
              },
            ])
          );

    }

}