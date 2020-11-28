import Menu from "../menu/Menu";

export default function LayoutBasic(props){
    const {children} = props;
    return(
        <div className="layout-basic">
            <Menu />
            <main className="main">
                {children}
            </main>
        </div>
    )
}