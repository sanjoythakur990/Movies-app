import React, {useState} from "react";
import moviesData from "../data/moviesData";
import MovieDisplay from "./MovieDisplay";

const MovieDetails=()=>{
    const [selectedMovie, setSelectedMovie]=useState("");
    console.log(selectedMovie);
    return (
        <div style={{display:"flex", justifyContent:"space-around"}}>
            <div className="movie-list">
                    {moviesData.map((item, index)=>(
                        <p onClick={()=> setSelectedMovie(item)} key={index}>{item.title}</p>
                    ))}
            </div>

            <MovieDisplay selectedMovie={selectedMovie}/>
        </div>
    )
}

export default MovieDetails