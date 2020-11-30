import ElementoLista from "../../../../reutilizables/ElementoLista/ElementoLista";

export default function PreviewLista(props){
    const {lista} = props;

    return(
        <div className="preview-lista">
            {
                lista.map(li => <ElementoLista lista={li} />)
            }
        </div>
    )
}