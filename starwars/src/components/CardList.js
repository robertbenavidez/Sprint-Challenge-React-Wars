import React  from 'react';
import Card from './Card';

 const CardList = ({character}) => {
     
    return (
        <div className="cards-container">
            {character.map((character, i) => <Card {...character} key={i}/>)}
        </div>
    )
}

export default CardList;



