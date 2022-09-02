import React from "react";

const carteFilms = ({film}) => {
    return (
     <div className='movie'>
        <div>
          <p>{film.Year}</p>
        </div>
        <div>
          <img  src={film.Poster !=='N/A' ? film.Poster  : 'https://via.placeholder.com/400'} alt={film.Title} />
        </div>
             <div>
              <span>{film.Type}</span>
              <h3>{film.Title}</h3>
             </div>

       </div>
    );


}
export default carteFilms;
