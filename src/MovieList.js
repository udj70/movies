import React, { useEffect, useState } from "react"

const MovieList=()=>{
    const [movieList,setMovieList] = useState([])
    useEffect(()=>{
        fetch('https://hoblist.com/api/movieList',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify({
                category: "movies",
                language: "kannada",
                genre: "all",
                sort: "voting"
              })

        })
        .then((response)=>response.json())
        .then((res)=>{
            setMovieList(res.result)
            console.log(res.result)
        })
        .catch((error)=>{console.log(error)});
    
    },[])

    return(
        <React.Fragment>
            {movieList.map((movie)=>{
                return(
                    <div style={{border:"2px solid black", padding:"3px"}}>
                        <p><b>Title:</b> {movie.title} </p>
                        <p>Directors: {movie.director.map((d)=>{
                            return(
                                <span>{d}</span>
                            )
                        })}</p>
                        <p>Genre: {movie.genre}</p>
                        <p>Language: {movie.language}</p>
                    </div>
                )
            })}
        </React.Fragment>
    )
}

export default MovieList; 