import Boton from "../../../reutilizables/boton/Boton";

export default function Conclusion() {
    return (
        <div className="conclusion">
            <div className="conclusion__uno">
                <p>Necesitas mas inspiracion?</p>
                <p>Echa un vistazo a las listas de otros usuarios o revisa mi perfil</p>
                <p className="smoker-enlace">smokerlistas.com/smokerteorias</p>
            </div>

            <div className="conclusion__dos">
                <p>ya estas inspirado?</p>
                <p>ingresa y comienza a crear tu primer lista</p>
                <Boton>Ingresar</Boton>
            </div>

        </div>
    )
}