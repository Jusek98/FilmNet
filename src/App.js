
import './App.css';
import SearchIcon from './search.svg';
import { useEffect, useState } from 'react';
import MovieCard from './carteFilms';


const URL_API="https://www.omdbapi.com?apikey=e92b1026";

const App = () => {
  const [ListeFilms,setListeFilms]=useState([]);
  const [filmRecherche,setFilmRecherche]=useState('');

      const chercherFilms=async(titre)=>{

        const reponse=await fetch(`${URL_API}&s=${titre}`); 
        const donnees=await reponse.json();
        setListeFilms(donnees.Search);
      }

   
      useEffect(  () =>{
           chercherFilms()
    },[]);


return(
  <div className='app'>
    <h1>FilmNet</h1>
    <div className="search">
        
         <input placeholder='Rechercher un film'
               value={filmRecherche}
                onChange={(e)=>setFilmRecherche(e.target.value)} 
         
         />
         <img
         src={SearchIcon}
         alt='search'
         onClick={()=>chercherFilms(filmRecherche)}
         />
    </div>
        

     {  ListeFilms?.length > 0 
         ? (
         <div className='container'>
           {ListeFilms.map((film)=>(
            <MovieCard film={film}/>
            ))}
         </div>
         ): (
           <div className='empty'>
            <h2>Aucun film ne correspond à votre recherche.   </h2>
           </div>
       )
   }
  </div>     
);
    
      
  
 
}

export default App;
