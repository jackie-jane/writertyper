import React from 'react';
import TypeIt from "typeit-react"
import './Introduction.css'

function Introduction() {
  return (
    <div className='animated'>
      <TypeIt
        getBeforeInit={instance => {
          instance
            .type("Writerty")
            .pause(100)
            .delete(2)
            .pause(50)
            .type("Typer let’s you practice typing by gollowing")
            .pause(200)
            .delete(9)
            .pause(100)
            .type("following along with any book, poem, article, or essay.")
            .pause(100)
            .type("")
            .type("Just picke")
            .pause(126)
            .delete(1)
            .pause(39)
            .type(" fromoe")
            .pause(52)
            .delete(2)
            .pause(150)
            .type(" one of our publicly availble poems or upload your own document.")
          return instance
        }}
        options={{
          lifeLike: true,
        }}
      />
      <br></br>
    </div>
  );
}

export default Introduction;