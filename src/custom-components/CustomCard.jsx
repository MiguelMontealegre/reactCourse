import './CustomCard.css';

import { useState } from "react";

export function CustomCard({children, title, body, photoUsername, organization, formatUserName, footer, initialIsFollowing}){

    const [isFollowing, SetIsFollowing] = useState(initialIsFollowing);
    const followText = isFollowing ? 'Following' : 'Follow';
    const followClass = isFollowing ? 'following' : 'unfollowing';
    const handleFollowClick = () =>{
        SetIsFollowing(!isFollowing);
    };
    
    
    return (
        <div>
            <h1>{title}</h1>
            <p>{body}</p>
            <img src={`https://unavatar.io/${photoUsername}`} />
            <p>{formatUserName(photoUsername)}</p>
            

            <button className={followClass} onClick={handleFollowClick}>{followText}</button>            
            <p>{organization}</p>
            <footer>{footer}</footer>
            <p>{children}</p>
        </div>
    );
    
}

