
import React from 'react';
import { ReactVideo } from "reactjs-media";
import Header from '../Common-components/Header/Header';
import  '../Common-components/commonStyle.css';
const Home = ()=>{

        return (
     
        <>
        <Header/>
        <section>
            <div className="overlay"></div>
            <ReactVideo
                src="https://www.bigbuckbunny.org/"
                poster="https://www.example.com/poster.png"
                primaryColor="red"
                // other props
            />
            <div className="container h-100">
        
            </div>
        </section>

            <div className="my-5">
            <div className="container">
            <div className="row">
                <div class="col-md-8 mx-auto">
                <p>The HTML5 video element uses an mp4 video as a source. Change the source video to add in your own background! The header text is vertically centered using flex utilities that are built into Bootstrap.</p>
                <p>The overlay color and opacity can be changed by modifying the <code>background-color</code> and <code>opacity</code> properties of the <code>.overlay</code> class in the CSS.</p>
                <p>Set the mobile fallback image in the CSS by changing the background image of the header element within the media query at the bottom of the CSS snippet.</p>
                <p className="mb-0">
                    Created by <a href="https://startbootstrap.com">Start Bootstrap</a>
                </p>
                </div>
            </div>
            </div>
            </div>
                    
          </>
        )
  
}

export default Home;