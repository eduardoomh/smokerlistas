import {Icon} from "semantic-ui-react";

export default function ElementoDescripcion(props){
    const {descripcion} = props;
    return(
        <div className="elemento-descripcion">
            <Icon name="book" size="large" />
            <p>{descripcion}</p>
        </div>
    )
}