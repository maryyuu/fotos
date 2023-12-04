import React, { useState } from 'react';

const subirimagen = () => {
    const [imageSrc, setImageSrc] = useState('');

    const handleInputChange = (e) => {
        const file = e.target.files[0];
        setImageSrc(URL.createObjectURL(file));
    };

    return (
        <div>
            <input type="file" onChange={handleInputChange} />
            {imageSrc && <img src={imageSrc} alt="Selected Image" />}
        </div>
    );
};

export default subirimagen;