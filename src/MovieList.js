import React,{useState, useRef} from 'react';
import Movie from './Movie';
import AddMoviesButton from './AddMoviesButton';
import OrderByAlphaButton from './OrderByAlphaButton';
import OrderByGradeButton from './OrderByGradeButton';


export default function MovieList(){
    const [movies, setMovies] = useState([]);
    const inputRef = useRef();
    const gradeRef = useRef();

  function addItem(){

    if(inputRef.current.value === "" && gradeRef.current.value === "0"){

      alert("Du måste skriva in en film & välja ett betyg")
      return;
    }
    else if(inputRef.current.value === "" ){
      alert("Du måste skriva in en film")
      return ;
    }
    else if(gradeRef.current.value === "0"){
        alert("Du måste välja ett betyg")
          return;
    }

      const newId = movies.length +1 ;

      setMovies([...movies, {
        id: newId,
        title: inputRef.current.value,
        grade: gradeRef.current.value
      }])

      inputRef.current.value = "";
      gradeRef.current.value = "0";

  }

  function deleteItem(id){
      setMovies(movies.filter((item) => item.id !== id));

  }

  function orderByAlpha(){

    movies.sort(function(a,b){

      if(a.title < b.title){
        return -1;
      }
      if(a.title > b.title){
        return 1;
      }

      return 0;
    })

      setMovies([...movies])

  }

  function orderByGrade(){

    movies.sort(function(a,b){

      if(a.grade > b.grade){
        return -1;
      }
      if(a.grade < b.grade){
        return 1;
      }

      return 0;
    })

      setMovies([...movies])

  }



  return (
    <div>
        <fieldset>
          <legend> Lägg till en Film </legend>
          <input className = "form-control" placeholder="Lägg till din film här..." ref = {inputRef}/>

          <label htmlFor="rating">Betyg:</label>

          <select className = "form-control" ref = {gradeRef}>
            <option value="0">Välj betyg här...</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>

            <AddMoviesButton addItem={addItem}/>


    </fieldset>
        <h2> Filmer </h2>
        <ul className = "list-group">
              {movies.map(movie => <Movie key= {movie.id} item={movie} deleteItem={deleteItem} />)}
        </ul>

        <OrderByAlphaButton orderByAlpha={orderByAlpha}/>
        <OrderByGradeButton orderByGrade = {orderByGrade}/>
    </div>
  )
}
