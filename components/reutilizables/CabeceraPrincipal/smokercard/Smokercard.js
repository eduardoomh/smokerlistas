import Boton from "../../boton/Boton";

export default function Smokercard(){
    return(
        <div className="smokercard">
            <p>Hola, Soy smoker teorias, te saludo desde youtube, ingresa con una red social!</p>
            <div>
                <img src="https://64.media.tumblr.com/dfb2c76770ccb2d7c6c25b1a0db152ed/71287a3d0ae47c79-9f/s250x400/e4bde6c6e81af783ea3ab54728f77fc3423c2911.jpg" />
                <div className="smokercard__botones">
                    <Boton>Ingresar</Boton>
                    <Boton>Ver mi canal</Boton>
                </div>
                
            </div>
        </div>
    )
}