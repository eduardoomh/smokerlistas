import PreviewLista from "./previewLista/PreviewLista";

export default function Preview(props){
    const {titulo, parrafo1, parrafo2, parrafo3, lista} = props;
    return(
        <div className="preview">
            <div className="preview__texto">
                <h4>{titulo}</h4>
                <p>{parrafo1}</p>
                <p>{parrafo2}</p>
                <p>{parrafo3}</p>
            </div>
            <PreviewLista lista={lista} />
        </div>
    )
}