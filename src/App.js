import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

let styles = {
  margin: 'auto',
  width: '500px'
};

function App() {
  return (
    <div style={styles}>
      <Carousel>
        <div>
          <img src="https://images.unsplash.com/photo-1469827160215-9d29e96e72f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop" />
          <p className="legend">Green leaf tree</p>
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjF9&auto=format&fit=crop&w=750&q=80" />
          <p className="legend">Skye, UK</p>
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1470423725703-b136e2a8254c?ixlib=rb-1.2.1&auto=format&fit=crop&w=801&q=80" />
          <p className="legend">green glass field</p>
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1463743981180-c90485a4f274?ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80" />
          <p className="legend">Rainbow</p>
        </div>
      </Carousel>
    </div>
  );
}

export default App;
