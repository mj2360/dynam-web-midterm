import React from 'react'; 

function Display ({
    aWord, 
    pos, 
    definition, 
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

                {/* <p className="definition">
                    <strong>{definition}</strong>
                </p> */}
            </div>
        </section>
    )
}

export default Display; 