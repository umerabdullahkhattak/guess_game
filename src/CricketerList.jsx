import React, { useState } from 'react';
import { crickters } from './data'; // Adjust the path based on your project structure
import './CricketerList.css'; // Import the stylesheet

const CricketerList = () => {
  const [shuffledCrickters, setShuffledCrickters] = useState(crickters);
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [clickedImages, setClickedImages] = useState([]);
  

  const shuffleImages = () => {
    const shuffledArray = [...shuffledCrickters];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    setShuffledCrickters(shuffledArray);
  };

  const handleImageClick = (id) => {
    
    if (clickedImages.includes(id)) {
      
      setCurrentScore(0);
      clickedImages.length = 0; // Clear the clickedImages array
    } else {
      // clickedImages.push(id);
      setClickedImages([...clickedImages, id])
      console.log(clickedImages)
      if (currentScore < bestScore) {
        setCurrentScore(currentScore + 1);
      }
      else{
        setCurrentScore(currentScore + 1);
        setBestScore(bestScore + 1)
      }
      
     
      shuffleImages();
    }
  };

  return (
    <>
    <div className='thename'>The Guess Game: Do not click one image twice</div>
    <div className="cricketer-container">
      <div className="score-container">
        
      <p className="current-score">Current Score: {currentScore}</p>
  <p className="best-score">Best Score: {bestScore}</p>
        
      </div>
      <div className='images-container'>
      {shuffledCrickters.map(cricketer => (
        <div
          key={cricketer.id}
          className="cricketer-card"
          onClick={() => handleImageClick(cricketer.id)}
        >
          <img
            className="cricketer-image"
            src={cricketer.src}
            alt={cricketer.name}
          />
          {/* <p className="cricketer-name">{cricketer.name}</p> */}
        </div>
      ))}
      </div>
    </div>
    </>
  );
};

export default CricketerList;
