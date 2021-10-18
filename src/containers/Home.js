import React, { useEffect, useMemo, useState } from 'react'; 
import axios from 'axios'; 

function Home() {
    let initialWord = "hello"
    const [word, setWord] = useState(initialWord);
    const[wordData, setWordData] = useState(); 
    useEffect(() => {
        if(word) {
           axios.get(
               `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
           )
           .then(function (response) {
             setWordData(response.data);
             console.log(wordData)
           })
           .catch(function (error) {
             console.warn(error);
           });
        }
       }, [word]); 
    return (
      <>
        Word: {word}
        <input type="text" placeholder="Type Word" id="input"></input>
        <button onClick={() => setWord(document.getElementById("input").value)}>Submit</button>
      </>
    );

   
}

export default Home; 