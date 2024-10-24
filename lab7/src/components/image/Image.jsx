import React, { useState } from 'react';
import './style.css';

function Image() {
    const [isImageAdded, setImageAdded] = useState(false);
    const [imgSize, setImgSize] = useState({ width: 300, height: 200 });

    const addImage = () => setImageAdded(true);
    const increaseImage = () => setImgSize({ width: imgSize.width * 2, height: imgSize.height * 2 });
    const decreaseImage = () => setImgSize({ width: imgSize.width / 2, height: imgSize.height / 2 });
    const deleteImage = () => {
        setImgSize({ width: 300, height: 200 });
        setImageAdded(false);
    };

    return (
        <div>
            <a href="https://city-adm.lviv.ua/" target="_blank">
                 <img src="https://gohotels.com.ua/images/stories/f08072159a443e07501f3df97987f8a3.jpg"/>
            </a>
            {isImageAdded && (
                <img
                    src="https://gohotels.com.ua/images/stories/f08072159a443e07501f3df97987f8a3.jpg"
                    alt="Lviv"
                    width={imgSize.width}
                    height={imgSize.height}
                />
            )}
            <div>
                <button onClick={addImage}>Додати</button>
                <button onClick={increaseImage}>Збільшити</button>
                <button onClick={decreaseImage}>Зменшити</button>
                <button onClick={deleteImage}>Видалити</button>
            </div>
        </div>
    );
}

export default Image;
