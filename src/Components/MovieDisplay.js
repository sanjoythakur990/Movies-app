import React from "react";

const MovieDisplay=({selectedMovie})=>{
    console.log(selectedMovie);
    return (
        <div >
            {selectedMovie!=="" ? (<div className="movie-display">
                
                <h1>Movie Details</h1>
                <img src={selectedMovie.banner} alt={selectedMovie.title}/>
                <p>{selectedMovie.title}</p>
                <p>{selectedMovie.actor}</p>
                <p>{selectedMovie.genre}</p>
            </div>): ""}
        </div>
    )
}

export default MovieDisplay