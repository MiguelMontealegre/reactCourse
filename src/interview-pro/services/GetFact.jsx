const FACTS_URL = 'https://catfact.ninja/fact';

export const getFact = async function(){
    const getFactApi = await fetch(FACTS_URL);
    const data = await getFactApi.json();
    const { fact } = data;
    return fact;
}

