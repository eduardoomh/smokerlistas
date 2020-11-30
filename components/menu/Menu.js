import {Image } from "semantic-ui-react";

export default function Menu(){
    return(
        <nav className="menu">
            <p><Image avatar src="https://64.media.tumblr.com/dfb2c76770ccb2d7c6c25b1a0db152ed/71287a3d0ae47c79-9f/s250x400/e4bde6c6e81af783ea3ab54728f77fc3423c2911.jpg" />SMOKER LISTAS</p>
            <div></div>
            <ul>
                <li>inicio</li>
                <li>listas</li>
                <li>personajes</li>
                <li>ingresar</li>
            </ul>
        </nav>
    )
}