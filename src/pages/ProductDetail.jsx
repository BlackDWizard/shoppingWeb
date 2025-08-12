import { useParams } from 'react-router-dom';

import p1 from '../assets/images/p1.png';
import p2 from '../assets/images/p2.png';
import p3 from '../assets/images/p3.png';

const productData = {
    1: { id: 1, name: '商品A', price: 299, description: '商品A的詳細介紹...', img: p1 },
    2: { id: 2, name: '商品B', price: 399, description: '商品B的詳細介紹...', img: p2 },
    3: { id: 3, name: '商品C', price: 499, description: '商品C的詳細介紹...', img: p3 },
};

export default function ProductDetail() {
    const { id } = useParams();
    const product = productData[id];

    if (!product) {
        return <div className="container mt-5"><h2>找不到商品</h2></div>;
    }

    return (
        <div className="container mt-5">
            <h2>{product.name}</h2>
            <img src={product.img} alt={product.name} className="img-fluid mb-3" />
            <p>價格：NT${product.price}</p>
            <p>{product.description}</p>
            <button className="btn btn-success">加入購物車</button>
        </div>
    );
}