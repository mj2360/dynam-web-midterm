
import React, { useState, useEffect, useMemo} from 'react'; 
import axios from 'axios'; 
import Display from '../components/Display'; 

function Home() {
  const[wordData, setWordData] = useState(); 
  const[gif, setGifData] = useState(); 

  function changeWord(e) {
    e.preventDefault(); 

    const wordInput = e.currentTarget.word.value 
    console.log(wordInput);

    const url_1 = `https://api.dictionaryapi.dev/api/v2/entries/en/${wordInput}`
    const url_2 = `http://api.giphy.com/v1/gifs/translate?s=${wordInput}&api_key=k364FjEl3SMVa01bo63nZWqlaTDQdQTN&weirdness=9`
    axios.get(url_1)
    .then(function (response) {
      setWordData(response.data);
      return axios.get(url_2)
    })
    .then(function (response) {
      setGifData(response.data);
      console.log(response.data)
    })
    .catch(function (error) {
      console.warn(error);
    });
    }

    const { 
      aWord, 
      pos, 
      definition,
     } = useMemo(() => {
      if (!wordData) return{};
  
      return{
        aWord: wordData[0].word, 
        pos: wordData[0].meanings[0].partOfSpeech,
        definition: wordData[0].meanings[0].definitions[0], 
  
      }
    }, [wordData])

    return (
      <>
        <form onSubmit={(e) => changeWord(e)}>
        <input type="text" placeholder="Type Word" id="input" name="word" />
        <button type="submit">Submit</button>
        </form>

        <Display 
          aWord={aWord}
          pos={pos}
          definition={definition}
        /> 

      </>
    );
   
}

export default Home; 