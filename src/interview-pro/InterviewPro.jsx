import { useEffect, useState } from 'react';

import { useCatFact } from './hooks/useCatFact.js';
import { useCatImage } from './hooks/useCatImage.js';

function InterviewPro(){
    const {fact, refreshFact} = useCatFact();
    const { imageUrl } = useCatImage({fact}); 

    async function handleClick(){
        refreshFact();
    }

    return (
        <>
            <main>
                    <p>Fact: {fact}</p>
                    <img src={imageUrl} alt="" />
                    <div className="custom-mt">
                        <button onClick={handleClick}>Get new fact and image</button>
                    </div>
        </main>
        </>
    )
}
export default InterviewPro