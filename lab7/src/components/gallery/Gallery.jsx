import React from 'react';
import GoodsCard from '../goodsCard/GoodsCard';
import './style.css';

function Gallery() {
    const goods = [
        { image: 'https://content.rozetka.com.ua/goods/images/big/223616191.jpg', name: 'Baseus Bipow 15W 30000mAh Black', price: 1499 },
        { image: 'https://content2.rozetka.com.ua/goods/images/big/290796637.jpg', name: 'Baseus Adaman Metal 20000mAh 30W Black', price: 2499 },
        { image: 'https://content2.rozetka.com.ua/goods/images/big/299063279.jpg', name: 'Xiaomi Mi 10000mAh 10W Black', price: 1299 },
        { image: 'https://content1.rozetka.com.ua/goods/images/big/479857656.jpg', name: 'Baseus Amblight 65W 30000mAh Black', price: 3749 },
        { image: 'https://content1.rozetka.com.ua/goods/images/big/22973157.jpg', name: 'Xiaomi Mi 3 20000mAh 18W White', price: 1099 },
        { image: 'https://content.rozetka.com.ua/goods/images/big/449029703.jpg', name: 'Samsung Battery Pack 20000mAh 45W Beige', price: 2499 },
    ];

    return (
        <div>
            <h2 id="gallery-title">Галерея товарів</h2>
            <div className="gallery"> 
                {goods.map((item, index) => (
                    <GoodsCard 
                        key={index}
                        image={item.image}
                        name={item.name}
                        price={item.price}
                    />
                ))}
            </div>
        </div>
    );
}

export default Gallery;
