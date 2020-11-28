import Head from 'next/head'
import LayoutBasic from  "../components/layout/LayoutBasic";
import Cabecera from "../components/reutilizables/CabeceraPrincipal/Cabecera";
import Subtitulo from "../components/paginas/inicio/subtitulo";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Smokerlistas</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <LayoutBasic>
          <Cabecera/>
          <Subtitulo />
      </LayoutBasic>
        
        </div>
  )
}
