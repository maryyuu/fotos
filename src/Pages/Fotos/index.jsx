import Bienestar from "./Imgs/Bienestar.png"
import Card from "../../Components";
function Fotos () {

    return(
        <>
        <div className="">
        <span className="flex justify-end right-7 m-8">
            <img className="h-16 items-end" src={Bienestar}></img>
        </span>
            <h1 className="font-bold text-xl text-center">GALERRIA DE FOTOS</h1>
            <h2 className="font-bold text-lg text-center mt-6">Comparte tus mejores momentos deportivos C.T.P.I</h2>
        </div>
        <Card/>
        </>
    )
}
export default Fotos;