import { useEffect, useState } from "react";

import { getFact } from '../services/GetFact';

export function useCatFact(){
    const [fact, setFact] = useState('');
    function refreshFact(){
        getFact().then(res => setFact(res));
    } 

    useEffect(refreshFact, []);
    console.log(fact);

    return { fact, refreshFact }
}
