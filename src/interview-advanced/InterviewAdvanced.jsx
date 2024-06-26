import "./InterviewAdvanced.css";

import { useCallback, useEffect, useRef, useState } from "react";

import { debounce } from 'lodash';
import mockResults from "./mock-data/movies-result.json";

const MOVIES_URL = 'https://www.omdbapi.com/';

function InterviewAdvanced() {
  const [movies, setMovies] = useState(mockResults.Search);
  const hasMovies = movies?.length > 0;
  const [errors, setErrors] = useState({});

  
  async function getMovies(query){
    try {
        const queryParams = new URLSearchParams({
            apiKey: '36098826',
            s: query ?? ''
          }).toString();
        const url = `${MOVIES_URL}?${queryParams}`;
        const moviesApi = await fetch(url);
        const moviesApiResult = await moviesApi.json();
        console.log('moviesApiResult');
        console.log(moviesApiResult);
        if(moviesApiResult.Search){
            setMovies(moviesApiResult.Search);
        } else {
            setMovies([]);
        }
    } catch(e){
        console.log(e);
        setMovies([]);
    }
};

  useEffect(() => {
    getMovies();
  }, []);


  const handleDebounce = debounce((event) => {
    console.log('debounce', event);
    console.log(event.target.value);
    console.log(event.target.name);
    const { name, value } = event.target;
    const data = {
      ...formValues,
      [name]: value,
    };
    setFormValues(data);
    const validationErrors = validateForm(data);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      getMovies(value);
    }
  }, 400);

  

  //Ejemplo de el HOOK useRef
  const inputRef = useRef(null);
  function focusInputRef() {
    console.log(inputRef.current.value);
    inputRef.current.focus();
  }


  
  //Formularios NO controlados__________________________________________
  function handleNotControledSubmit(event) {
    event.preventDefault();
    const fields = Object.fromEntries(new window.FormData(event.target));
    const { query } = fields;
    console.log(fields, query);
  }


  
  //Formularios Controlados_________________________________________
  const [formValues, setFormValues] = useState({
    query: "",
    type: 0,
  });

  function handleControledOnChange(event) {
    const { name, value } = event.target;
    const data = {
      ...formValues,
      [name]: value,
    };
    setFormValues(data);
    const validationErrors = validateForm(data);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    //   return;
    } else {
      setErrors({});
    }
  }

  function handleControledSubmit(event) {
    event.preventDefault();
    const validationErrors = validateForm(formValues);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    } else {
      setErrors({});
    }
    getMovies();
    console.log("submiting");
    console.log(formValues);
  }

  function validateForm(data) {
    let errors = {};
    if (!data.query) errors.query = "El query es obligatorio";
    if (!data.type || isNaN(data.type) || data.type < 1)
      errors.type = "El type debe ser un número (Mayor a 0)";
    return errors;
  }

  return (
    <>
      <h1>Buscador de peliculas</h1>
      <div>
        <header>
          <form onSubmit={handleControledSubmit} className="form">
            <div>
              <input
                onChange={handleDebounce}
                name="query"
                type="text"
                placeholder="Avengers ..."
              />
              {errors.query && <p className="text-danger">{errors.query}</p>}
            </div>
            <div>
              <input
                onChange={handleControledOnChange}
                value={formValues.type}
                name="type"
                type="number"
                placeholder="Type ..."
              />
              {errors.type && <p className="text-danger">{errors.type}</p>}
            </div>
            <button type="submit">Submit</button>
          </form>
        </header>

        <main>
          {!hasMovies ? (
            <p>NO data!</p>
          ) : (
            <ul>
              {movies.map((movie, index) => (
                <li key={movie.imdbID}>
                  <h3>{movie.Title}</h3>
                  <p>{movie.Year}</p>
                  <img src={movie.Poster} alt={movie.Title} />
                </li>
              ))}
            </ul>
          )}
        </main>

        {/*EJEMPLO PARA EL HOOK USEREF*/}
        <p>useRef example</p>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <input ref={inputRef} type="text" placeholder="Focus with the button" />
          <button onClick={focusInputRef}>Focus Input</button>
        </div>
      </div>
    </>
  );
}

export default InterviewAdvanced;
