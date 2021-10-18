import React, { useEffect,useMemo, useState } from 'react'; 
import axios from 'axios'; 

function Home() {
    let initialWord = "hello"
    const [word, setWord] = useState(initialWord);
    return (
      <>
        Word: {word}
        <input type="text" placeholder="Type Word" id="input"></input>
        <button onClick={() => setWord(document.getElementById("input").value)}>Submit</button>
      </>
    );
}

export default Home; 