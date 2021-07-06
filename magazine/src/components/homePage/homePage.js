import React from 'react'
import "./homePage.css"
import image from './1.jpg'
export default function HomePage() {

    return (

        <div >
            <p className="h1">What do you want to do today?</p>
            <br></br>
            <div className="d-flex justify-content-between div1">
                <div className="d">

                    <button><img src={image} alt="Racheli" className="rounded r"></img></button>
                    <button className="overlay">Racjhi</button><br></br>
                    <p>Create Post</p>
                </div>
                <div>
                    <img src="" alt=""></img>
                    <br>
                    </br>
                    <p>My Magazin</p>
                </div>
            </div>
        </div>

    )
}