
import React, { useState, useEffect, useMemo} from 'react'; 
import axios from 'axios'; 
import Display from '../components/Display'; 

function Home() {
  const[wordData, setWordData] = useState(); 

  function changeWord(e) {
    e.preventDefault(); 

    const wordInput = e.currentTarget.word.value 
    console.log(wordInput);

    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${wordInput}`
    axios.get(url)
    .then(function (response) {
      setWordData(response.data);
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

   // console.log(wordData[0].meanings[0].definitions); 

       
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