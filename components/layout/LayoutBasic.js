import Menu from "../menu/Menu";
import Footer from "../footer/Footer";

export default function LayoutBasic(props){
    const {children} = props;
    return(
        <div className="layout-basic">
            <Menu />
            <main className="main">
                {children}
            </main>
            <Footer />
        </div>
    )
}