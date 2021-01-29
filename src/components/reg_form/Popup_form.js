import React from 'react';
import { ReactTypeformEmbed } from 'react-typeform-embed';
<<<<<<< HEAD
=======
import styled from 'styled-components';

const Button = styled.button`
  cursor: pointer;
  position: relative;
  color: white;
  font-size: 1.5em;
  margin: 1em;
  padding: 0.5em 2em;
  background-color: #e95160;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;
>>>>>>> 4a864c1a6b99098fd8fba365d36c06cf36f1fe32

class Popup extends React.Component {
 

  openForm() {
    this.typeformEmbed.typeform.open();
  }

  render() {
    return (
      <div className="ExamplePopup">
        <ReactTypeformEmbed
          popup
          autoOpen={false}
          url="https://karinheinzl.typeform.com/to/N75W9teT"
          hideHeaders
          hideFooter
          buttonText="Go!"
          style={{ top: 100 }}
          ref={tf => {
            this.typeformEmbed = tf;
          }}
        />
<<<<<<< HEAD
        <button className="btn" onClick={()=>this.openForm()} style={{ cursor: 'pointer' }}>
          Button for Viet
        </button>
=======
        <Button className="btn" onClick={()=>this.openForm()} style={{ cursor: 'pointer' }}>
          Anmeldung
        </Button>
>>>>>>> 4a864c1a6b99098fd8fba365d36c06cf36f1fe32
      </div>
    );
  }
}

export default Popup;