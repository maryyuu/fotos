
import React, { useState, useRef } from 'react';
const Card = ()=> {
    const [imageSrc, setImageSrc] = useState('');
    const fileInputRef = useRef()
    
    const handleInputChange = (e) => {
        const file = e.target.files[0];
        setImageSrc(URL.createObjectURL(file));
    };

    const handleSlectButtonClick = () => { 
        fileInputRef.current.click();
    }

    const handDeleteImage = () => { 
        setImageSrc('');
    }
    return(
        <div className=" right-1/4 absolute mb-10 crounded-lg rounded-lg bg-slate-200 p-10 left-1/4 ">
        <div className="relative flex flex-row gap-6 justify-center">
                <div className="relative  bg-slate-300  border-2 border-black/40 rounded-lg w-60 h-60">
                    {imageSrc && <img className=" w-full h-full " src={imageSrc} alt="Selected Image" />}
                    <div className=" absolute inset-0 flex  justify-end">
                        <span className=" bg-slate-50 w-5 rounded-full h-6 text-center cursor-pointer" onClick={handDeleteImage}>x      </span>
                    </div>
                    </div>
        {/* <div className=" relative  bg-slate-300 border-2 border-black rounded-lg w-60 h-60"> */}
        
                {/* <img className="w-ful h-full cursor-pointer" src={signomas}></img> */}
            
        {/* </div> */}
        </div>
        <div className="ml-12 mr-12 mt-7 bottom-0 flex justify-around">
        <button className="bg-green-500 p-2 rounded-lg hover:bg-green-400 relative" onClick={handleSlectButtonClick}>
               Seleccionar
                    <input type="file" ref={fileInputRef} className="hidden" onChange={handleInputChange} />
        </button>
        <button className="relative bg-green-500 p-2 rounded-lg hover:bg-green-400">
          Guardar
        </button>

        </div>
        </div>
    )
}
export default Card