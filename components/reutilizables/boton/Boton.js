export default function Boton(props){
    const {children} = props;
    return(
        <button className="boton">
            {children}
        </button>
    )
}