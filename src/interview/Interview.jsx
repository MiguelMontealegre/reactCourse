import { useEffect, useState } from "react";

const FACTS_URL = 'https://catfact.ninja/fact';
const CAT_IMG_URL = 'https://cataas.com/cat/says/';

function Interview(){
const [isLoading, setIsLoading] = useState(false); 
const [fact, setFact] = useState('');
const [imgUrl, setImgUrl] = useState('');
const loadingElem = <div><p>Loading...</p></div>


async function getFact(){
    try {
        setIsLoading(true);
        const getFactApi = await fetch(FACTS_URL);
        const data = await getFactApi.json();
        console.log('factt', data);
        const firstWord = data.fact.split(' ')[0]
        console.log(firstWord);
        setFact(firstWord);
    } catch(err) {
        console.log(err);
    } finally {
        setIsLoading(false);
    }
}


async function getCatImg(){
    try {
        setIsLoading(true);
        const completedUrl = CAT_IMG_URL + fact;
        const getImgApi = await fetch(completedUrl);

        const blob = await getImgApi.blob();
        const imageUrl = URL.createObjectURL(blob);
        console.log(imageUrl);
        setImgUrl(imageUrl);
    } catch(err) {
      console.log(err);  
    } finally {
        setIsLoading(false);
    }
}

/*El hook useEffect se ejecuta después de que el componente se ha renderizado. 
Por defecto, se ejecuta después de cada renderizado, pero puedes controlar cuándo se 
ejecuta proporcionando un segundo argumento, que es una lista de dependencias.*/
useEffect(() => {
    getFact();
}, []);


useEffect(() => {
    if(fact.length > 0){
        getCatImg();
    }
}, [fact])



return (
    <>
        <div className="d-block">
            {isLoading ? loadingElem : 
                <div>
                <h1>Fact: {fact}</h1>
                    <img src={imgUrl} alt="" />
                    <div className="custom-mt">
                        <button onClick={getFact}>Get new fact and image</button>
                    </div>
                </div>
             }
        </div>
    </>
)   
}



export default Interview
