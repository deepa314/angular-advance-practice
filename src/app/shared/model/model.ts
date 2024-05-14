export interface User{
id:number;
age:number;
name:string;
}

export interface Blog{
  postId: number;
  title: string;
  averageReadingTime: number;
  category: string;
}

export interface Group {
    id: number;
    text: string;
  }

  export interface Server{
    id:number;
    name:string;
    desc:string;
  
  }