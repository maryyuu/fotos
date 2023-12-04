import Bienestar from "../../assets/Bienestar.png"
import Card from "../../Components";
function Fotos () {

    return(
        <>
        <div className="">
        <span className="flex justify-end right-7 m-8">
            <img className="h-16 items-end" src={Bienestar}></img>
        </span>
            <h2 className="font-bold text-xl text-center mt-6 mb-10">Comparte tus mejores momentos deportivos</h2>
                <Card />
            </div>
       
        </>
    )
}
export default Fotos;