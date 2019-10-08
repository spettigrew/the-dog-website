import React from 'react';

import { useLocalStorage } from './utils/input'
import { useDogImages } from './utils/api'

import "./App.css";


function App (props) {
  const [breed, setBreed] = useLocalStorage('breed', 'husky');
  const [count, setCount ] = useLocalStorage('count', 1);
  const [images, setImages] = useDogImages(breed, count);

  return (
    <>
      <h1>The Dog Website</h1>

      <select value={breed} onChange={e => setBreed(e.target.value)}>
        <option value="husky">Husky</option>
        <option value="beagle">Beagle</option>
        <option value="chow">Chow</option>
        <option value="spaniel">Spaniel</option>
        <option value="corgi">Corgi</option>
      </select>

      <input 
      type="number" placeholder="Image Count" value={count}
      onChange={ e=> setCount(e.target.value)}
    />

      <div>
        {images.map((image, index) => (
          <img key={index} src={image} alt="Dogs" />
        ))}
      </div>

    </>
  )
 }
 

export default App;
