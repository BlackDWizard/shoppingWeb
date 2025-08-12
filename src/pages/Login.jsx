import { useState } from 'react';

export default function Login() {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <div className="container mt-5" style={{ maxWidth: '400px' }}>
            <h2>{isLogin ? '登入' : '註冊'}</h2>
            <form>
                {!isLogin && (
                    <div className="mb-3">
                        <label className="form-label">使用者名稱</label>
                        <input type="text" className="form-control" placeholder="輸入使用者名稱" />
                    </div>
                )}
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" placeholder="輸入 Email" />
                </div>
                <div className="mb-3">
                    <label className="form-label">密碼</label>
                    <input type="password" className="form-control" placeholder="輸入密碼" />
                </div>
                <button type="submit" className="btn btn-primary w-100 mb-2">
                    {isLogin ? '登入' : '註冊'}
                </button>
            </form>
            <button
                className="btn btn-link w-100"
                onClick={() => setIsLogin(!isLogin)}
            >
                {isLogin ? '沒有帳號？點此註冊' : '已經有帳號？點此登入'}
            </button>
        </div>
    );
}
