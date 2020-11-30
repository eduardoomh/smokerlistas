import Head from 'next/head'
import LayoutBasic from  "../components/layout/LayoutBasic";
import Cabecera from "../components/reutilizables/CabeceraPrincipal/Cabecera";
import Subtitulo from "../components/paginas/inicio/subtitulo/subtitulo";
import Pregunta from "../components/paginas/inicio/pregunta/Pregunta";
import Preview from "../components/paginas/inicio/preview/Preview";
import Conclusion from "../components/paginas/inicio/conclusion/Conclusion";

export default function Home() {

  const lista = [
    [
      {
        personaje: "Monkey D. Luffy",
        sobrenombre: "sombrero de paja",
        organizacion: "Tripulacion de los mugiwaras",
        imagen: "https://www.tierragamer.com/wp-content/uploads/2019/09/One-Piece-Monkey-D-Luffy-Sonrisa-450x300.jpg",
        numeracion: 26,
        descripcion: "Puede ver el futuro, conoce el ryou, derroto a doflamingo, derroto a doflamingo."
      },
      {
        personaje: "Donquixote Doflamingo",
        sobrenombre: false,
        organizacion: "ex schichibukai",
        imagen: "https://pm1.narvii.com/6357/282cd448ecf1dead3e8004297d8da7febe6ea30a_00.jpg",
        numeracion: 27,
        descripcion: "Fue derrotado por luffy (sin ryou y sin ver el futuro), posee una fruta despertada, posee los 3 tipos de haki"
      },
      {
        personaje: "Smoker",
        sobrenombre: false,
        organizacion: "vicealmirante",
        imagen: "https://i.pinimg.com/236x/fc/d6/f4/fcd6f4ef197250abdd7ebccbfc481a79.jpg",
        numeracion: 28,
        descripcion: "Fue derrotado por doflamingo, derrotado por trafalgar law y derrotado por vergo, posee haki de armadura y fruta logia."
      }
    ],
    [
      {
        personaje: "kouzuki Oden",
        sobrenombre: false,
        organizacion: "ex lider de las vainas rojas",
        imagen: "https://pm1.narvii.com/7458/4cd977b022791a831faeb1825f3196390b71ff4cr1-405-405v2_00.jpg",
        numeracion: null,
        descripcion: "Fue el samurai mas honorable del pais de wano, me encanta su pasado"
      },
      {
        personaje: "Chopper",
        sobrenombre: false,
        organizacion: "medico de los mugiwaras",
        imagen: "https://pm1.narvii.com/6275/01cf097a4831c718a979f85023bd8d9ef11f80d7_hq.jpg",
        numeracion: null,
        descripcion: "su transformacion kung fu point es la mejor"
      },
      {
        personaje: "Boa Hancock",
        sobrenombre: false,
        organizacion: "Ex shichibukai",
        imagen: "https://lanetaneta.com/wp-content/uploads/2020/11/Fan-de-One-Piece-agrega-una-figura-de-tamano-real.jpeg",
        numeracion: null,
        descripcion: "Es bellisima y muy fuerte, uno de mis personajes favoritos femeninos"
      }
    ],
    [
      {
        personaje: "Piratas de barbanegra",
        sobrenombre: false,
        organizacion: "tripulacion pirata",
        imagen: "https://i.ytimg.com/vi/a85maHPRxFE/maxresdefault.jpg",
        numeracion: null,
        descripcion: "la tripulacion de uno de los cuatro emperadores del nuevo mundo"
      },
      {
        personaje: "  La vieja loca",
        sobrenombre: "big mom",
        organizacion: "yonkou",
        imagen: "https://pm1.narvii.com/7419/5115f1384ceb2df0add2a894216b6f940998c8b1r1-883-750v2_uhq.jpg",
        numeracion: null,
        descripcion: "Ultimamente ha estado haciendo el ridiculo en wano"
      },
      {
        personaje: "Ope ope no mi",
        sobrenombre: false,
        organizacion: "fruta tipo paramecia",
        imagen: "https://i2.wp.com/www.bitme.gg/wp-content/uploads/2020/05/One-Piece_-Cosplay-de-Trafalgar-Law-muestra-su-version-femenina.jpg?fit=1280%2C720&ssl=1",
        numeracion: null,
        descripcion: "Una de las mejores frutas que hay en la serie, doflamingo la llamaba 'la fruta definitiva'"
      }

    ]
  ]
  return (
    <div>
      <Head>
        <title>Smokerlistas</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <LayoutBasic>
          <Cabecera/>
          <Subtitulo />
          <Pregunta />
          <Preview 
            titulo="LISTANDO NIVELES DE PODER"
            parrafo1="crees que zoro es mas fuerte que jinbe?"
            parrafo2="No hay problema, puedes expresar todo en una lista."
            parrafo3="Demuestrale a los demas tu punto de vista y comienza un debate"
            lista={lista[0]}
          />
          <Preview 
            titulo="LISTANDO TUS PERSONAJES FAVORITOS"
            parrafo1="Te parecio impresionante el personaje de koukuzi oden?"
            parrafo2="Te encanta la ternura de chopper o te enamora la belleza de boa hancock?"
            parrafo3="No se diga mas, haz una lista sobre tus personajes favoritos"
            lista={lista[1]}
          />
          <Preview 
            titulo="COMPARTIENDO TU OPINION SIN LIMITACIONES"
            parrafo1="Los datos de los personajes son personalizables"
            parrafo2="puedes poner apodos a los personajes o datos a tu conveniencia"
            parrafo3="tu lo personalizas como a ti se te de la gana"
            lista={lista[2]}
          />
          <Conclusion />
      </LayoutBasic>
        
        </div>
  )
}
