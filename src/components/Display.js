import React from 'react'; 

function Display ({
    aWord, 
    pos, 
    definition, 
    gifUrl,
}) {
    return(
        <section className="displayBox">
            <div className="wrapper">
                <h1 className="word">
                    <strong>{aWord}</strong>
                </h1>

                <p className="POS">
                    <strong>{pos}</strong>
                </p>

                //issue displaying image
                <div>
                    <img src={gifUrl} alt="" />
                </div>

                {/* <p className="definition">
                    <strong>{definition}</strong>
                </p> */}
            </div>
        </section>
    )
}

export default Display; 