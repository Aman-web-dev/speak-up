import React from 'react';
import data from './data.json';
import Card from './Card';
import { useNavigate } from 'react-router-dom';

function Video() {
  const navigate = useNavigate();

  const handleClick = async(e) => {
    const videoUrl = e.target.id;
    console.log(videoUrl);
     sessionStorage.setItem('videoUrl', videoUrl);
  };

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4  m-auto w-[90vw]'>
      {data.map((elem) => (
        <div key={elem.url} onClick={handleClick} id={elem.url}>
          <Card
            thumbnail={elem.thumbnail}
            description={elem.description}
            price={elem.price}
            title={elem.title}
            url={elem.url}
          />
        </div>
      ))}
    </div>
  );
}

export default Video;
