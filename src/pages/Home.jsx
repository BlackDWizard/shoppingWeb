import { Link } from 'react-router-dom';
import p1 from '../assets/images/p1.png';

export default function Home() {
    return (
        <div className="container mt-5">
            <h1>歡迎來到 Monkey Shop</h1>
            <p>這是首頁，介紹促銷活動或特色商品</p>
            <div className="row">
                <div className="col-md-4">
                    <div className="card">
                        <img src={p1} className="card-img-top" alt="商品1" />
                        <div className="card-body">
                            <h5 className="card-title">推薦商品 1</h5>
                            <p className="card-text">簡短介紹商品特色</p>
                            <Link href="/product/1" className="btn btn-primary">查看詳情</Link>
                        </div>
                    </div>
                </div>
                {/* 你可以再放更多卡片 */}
            </div>
        </div>
    );
}
