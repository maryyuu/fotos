import signomas from "./imgs/signomas.png"
import flecha from "./imgs/flecha.jpg"
function Card () {

    return(
        <div  className=" right-28 absolute crounded-lg rounded-lg bg-slate-300 p-10 left-28 ">
        <div className="relative flex flex-row gap-6 justify-center">
        <div className="relative bg-slate-400  border-2 border-black rounded-lg w-60 h-60">
        </div>
        <div className=" relative  bg-slate-400 border-2 border-black rounded-lg w-60 h-60">
        
                <img className="w-ful h-full cursor-pointer" src={signomas}></img>
            
        </div>
        </div>
        <div className="ml-12 mr-12 mt-7 bottom-0 flex justify-around">
        <button className="bg-green-500 p-2 rounded-lg hover:bg-green-400 relative ">
        Agregar Fotos
        </button>
        <button className="relative bg-green-500 p-2 rounded-lg hover:bg-green-400">
          Subir Fotos
        </button>
        <button>
            <img className="w-12 rounded-full border-2 border-black hover:w-14 hover:border-green-400" src={flecha}></img>
        </button>
        </div>
        </div>
    )
}
export default Card