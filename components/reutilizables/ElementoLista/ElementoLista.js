import { Image, Icon } from "semantic-ui-react";
import ElementoDescripcion from "./ElementoDescripcion/ElementoDescripcion";

export default function ElementoLista(props) {
    const {lista} = props;

    return (
        <>
        <div className="elemento-lista">
            <div className="elemento-lista__imagen">
                <Image src={lista.imagen} />
            </div>
            <div className="elemento-lista__contenido">
                <p className="texto_1">{lista.personaje} {lista.sobrenombre !== false && `(${lista.sobrenombre})`}</p>
                <p className="texto_2">{lista.organizacion}</p>
            </div>
            <Icon name="ellipsis vertical" size="large" color="grey" />

        </div>
        <ElementoDescripcion descripcion={lista.descripcion} />
        </>
    )
}