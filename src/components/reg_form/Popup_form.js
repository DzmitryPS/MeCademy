import React from 'react';
import { ReactTypeformEmbed } from 'react-typeform-embed';

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
        <button className="btn" onClick={()=>this.openForm()} style={{ cursor: 'pointer' }}>
          Button for Viet
        </button>
      </div>
    );
  }
}

export default Popup;