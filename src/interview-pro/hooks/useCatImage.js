import { useEffect, useState } from "react";

const CAT_PREFIX_IMAGE_URL = 'https://cataas.com';
export const useCatImage = ({fact}) => {
    const [imageUrl, setImageUrl] = useState('');
    useEffect(() => {
        async function getCatImage(){
            if(fact.length > 0){
                try {
                    const threeFirstWords = fact.split(' ', 3).join(' ')
                    const completedUrl = `https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red&json=true`;
                    const getImgApi = await fetch(completedUrl);
            
                    const response = await getImgApi.json();
                    const { _id } = response
                    const url = `/cat/${_id}/says/${threeFirstWords}`
                    console.log(url);
                    setImageUrl(url)
                } catch(err) {
                  console.log(err);  
                } finally {
                    console.log('end');
                }
            }
        }
        getCatImage();
    }, [fact])   
    return { imageUrl: `${CAT_PREFIX_IMAGE_URL}${imageUrl}` }
}