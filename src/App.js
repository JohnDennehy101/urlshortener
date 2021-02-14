import '../src/CSS/App.css';
import Navbar from '../src/Components/Navbar';
import Banner from '../src/Components/Banner';
import InputField from '../src/Components/InputField'
import DisplayLinks from '../src/Components/DisplayLinks'
import {useState, useEffect, useCallback} from 'react';
import '../src/CSS/InputField.css'
import Statistics from '../src/Components/Statistics'
import axios from 'axios';

function App() {

  /*const [savedLinks, setSavedLinks] = useState([]);

  useEffect(() => {
    const localStorageLinks = localStorage.getItem('shortenedUrls')
    console.log(localStorageLinks);

    if (localStorageLinks !== null) {
      setSavedLinks(JSON.parse(localStorageLinks))
    }
  }, [])
*/
  const [shortenedUrls, setShortenedUrl] = useState([]);
  
  const [inputValue, setInputValue] = useState('Mallow') 

  const submitButtonClicked = () => {
    setInputValue(document.getElementById('inputUrl').value)
    
  }
/*
  useEffect(() => {

const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${inputValue},Ireland&appid=`;
    fetch(apiUrl).then(res => res.json()).then((response) => {

      
      
      setShortenedUrl((prevs) => {
        console.log(prevs)
//localStorage.setItem('shortenedUrls', JSON.stringify([...prevs, response.id]))
        return [...prevs, response.id]
      })
      
  

  }) }, [inputValue]) */

  




let styleSettings = window.innerWidth > 500 ? {
    backgroundImage: "url(/images/bg-shorten-desktop.svg",
        backgroundRepeat: 'no-repeat',
        backgroundColor: 'hsl(257, 27%, 26%)',
        backgroundPosition: 'top right',
        backgroundSize: 'cover'
    } : 
    {
        backgroundImage: "url(/images/bg-shorten-mobile.svg",
        backgroundRepeat: 'no-repeat',
        backgroundColor: 'hsl(257, 27%, 26%)',
        backgroundPosition: 'top right'
    }






  return (
    <div className="App">
      
      <header className="App-header">
     
       
      </header>
      <Navbar />
      <Banner />
      {/* <InputField /> */}

      <div id="inputFieldParentContainer" style={styleSettings}>
        <input placeholder='Shorten a link here...' id="inputUrl"/>
        <button id="shortenUrlButton" onClick={submitButtonClicked}>Shorten it!</button>
    </div>
      <DisplayLinks originalLinks={shortenedUrls} />
      <Statistics />

      

      

    </div>
  );
}

export default App;
