import '../src/CSS/App.css';
import Navbar from '../src/Components/Navbar';
import Banner from '../src/Components/Banner';
import InputField from '../src/Components/InputField'
import DisplayLinks from '../src/Components/DisplayLinks'
import {useState, useEffect} from 'react';
import '../src/CSS/InputField.css'

function App() {

  const [savedLinks, setSavedLinks] = useState([]);

  useEffect(() => {
    const localStorageLinks = localStorage.getItem('urlLinks')
    console.log(localStorageLinks);

    if (localStorageLinks !== null) {
      setSavedLinks(JSON.parse(localStorageLinks))
    }
  }, [])


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
const addUrl = () => {

//localStorage.setItem('urlLinks', JSON.stringify(urls))

console.log('testing')


setSavedLinks(prevState => {
  console.log(prevState)
  console.log(document.getElementById('inputUrl').value)
  localStorage.setItem('urlLinks', JSON.stringify([...prevState, document.getElementById('inputUrl').value]))
  return [...prevState, document.getElementById('inputUrl').value]
})
console.log(savedLinks)



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
        <button id="shortenUrlButton" onClick={addUrl}>Shorten it!</button>
    </div>
      <DisplayLinks links={savedLinks} />

    </div>
  );
}

export default App;
