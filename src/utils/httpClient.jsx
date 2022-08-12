const API = "https://api.themoviedb.org/3";

export function get(path){

    return fetch(API + path,{
        headers:{
          Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5N2Y3NmM3NGI3M2Q0Yjg0ZmIxMzdjNDQ4NzEwZmQ1ZCIsInN1YiI6IjYyZWMwNWIyYWY0MzI0MDA1YzFhYWNkMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.16tv0zCbnSjhNKdKV77BX-EMlnWHOO8Bw5qEXjNBsXo",
          "Content-Type": "application/json;charset=utf-8",
  
        },
      }).then(result => result.json())


}