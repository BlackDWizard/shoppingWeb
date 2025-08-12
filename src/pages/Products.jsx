import React, { useEffect, useState } from 'react';
import { supabase } from './supabaseClient';

const categories = ['全部', '手機', '筆電', '周邊', '家電', '穿戴裝置'];
const brands = ['全部', 'Apple', 'Logitech', 'Dyson', 'Samsung', 'Dell', 'Fitbit', 'Google', 'Lenovo'];
const PAGE_SIZE = 9;

// 模擬 API 請求（新增篩選參數）
function fetchProducts({ category, brand, minPrice, maxPrice, searchText, page }) {

    return new Promise(resolve => {
        setTimeout(() => {
            let filtered = allProducts;

            if (category !== '全部') {
                filtered = filtered.filter(p => p.category === category);
            }
            if (brand !== '全部') {
                filtered = filtered.filter(p => p.brand === brand);
            }
            if (minPrice !== '') {
                filtered = filtered.filter(p => p.price >= Number(minPrice));
            }
            if (maxPrice !== '') {
                filtered = filtered.filter(p => p.price <= Number(maxPrice));
            }
            if (searchText.trim() !== '') {
                const lowerSearch = searchText.toLowerCase();
                filtered = filtered.filter(p => p.name.toLowerCase().includes(lowerSearch));
            }

            const total = filtered.length;
            const start = (page - 1) * PAGE_SIZE;
            filtered = filtered.slice(start, start + PAGE_SIZE);
            resolve({ total, page, pageSize: PAGE_SIZE, products: filtered });
        }, 300);
    });
}

export default function ProductPage() {
    const [category, setCategory] = useState('全部');
    const [brand, setBrand] = useState('全部');
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [searchText, setSearchText] = useState('');
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(0);
    const totalPages = Math.ceil(total / PAGE_SIZE);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetchProducts({ category, brand, minPrice, maxPrice, searchText, page }).then(data => {
            setProducts(data.products);
            setTotal(data.total);
            setLoading(false);
        });
    }, [category, brand, minPrice, maxPrice, searchText, page]);

    const onCategoryClick = (cat) => {
        setCategory(cat);
        setPage(1);
    };
    const onBrandChange = (e) => {
        setBrand(e.target.value);
        setPage(1);
    };
    const onMinPriceChange = (e) => {
        setMinPrice(e.target.value);
        setPage(1);
    };
    const onMaxPriceChange = (e) => {
        setMaxPrice(e.target.value);
        setPage(1);
    };
    const onPageChange = (newPage) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setPage(newPage);
        }
    };

    return (
        <div style={styles.container}>
            <aside style={styles.sidebar}>
                <h3>商品分類</h3>
                <ul style={styles.categoryList}>
                    {categories.map(cat => (
                        <li
                            key={cat}
                            onClick={() => onCategoryClick(cat)}
                            style={{
                                ...styles.categoryItem,
                                ...(category === cat ? styles.activeCategory : {}),
                            }}
                        >
                            {cat}
                        </li>
                    ))}
                </ul>
            </aside>

            <main style={styles.main}>
                {/* 篩選區 */}
                <section style={styles.filterSection}>
                    <label>
                        品牌：
                        <select value={brand} onChange={onBrandChange}>
                            {brands.map(b => (
                                <option key={b} value={b}>{b}</option>
                            ))}
                        </select>
                    </label>

                    <label>
                        價格：
                        <input
                            type="number"
                            placeholder="最低價"
                            value={minPrice}
                            onChange={onMinPriceChange}
                            style={styles.priceInput}
                        />
                        -
                        <input
                            type="number"
                            placeholder="最高價"
                            value={maxPrice}
                            onChange={onMaxPriceChange}
                            style={styles.priceInput}
                        />
                    </label>
                    <label>
                        搜尋：
                        <input
                            type="text"
                            placeholder="搜尋商品"
                            value={searchText}
                            onChange={e => setSearchText(e.target.value)}
                        />
                    </label>
                </section>

                <h3>商品清單</h3>
                {loading ? (
                    <p>讀取中...</p>
                ) : products.length === 0 ? (
                    <p>沒有符合條件的商品</p>
                ) : (
                    <ul style={styles.productGrid}>
                        {products.map(p => (
                            <li key={p.id} style={styles.productCard}>
                                <img src={p.image} alt={p.name} style={styles.productImage} />
                                <h4>{p.name}</h4>
                                <p>價格: NT${p.price}</p>
                                <p>分類: {p.category}</p>
                                <p>品牌: {p.brand}</p>
                            </li>
                        ))}
                    </ul>
                )}

                {/* 分頁 */}
                <div style={styles.pagination}>
                    <button onClick={() => onPageChange(page - 1)} disabled={page <= 1}>上一頁</button>
                    <span style={{ margin: '0 10px' }}>{page} / {totalPages}</span>
                    <button onClick={() => onPageChange(page + 1)} disabled={page >= totalPages}>下一頁</button>
                </div>
            </main>
        </div>
    );
}

const styles = {
    container: {
        display: 'flex',
        width: '100%', // 改成全寬
        maxWidth: 'none', // 或移除 maxWidth
        margin: '20px auto',
        padding: '0 10px',
        gap: '20px',
        flexWrap: 'nowrap', // 避免換行
    },
    sidebar: {
        flexBasis: '200px',
        borderRight: '1px solid #ccc',
        paddingRight: '10px',
    },
    categoryList: {
        listStyle: 'none',
        padding: 0,
    },
    categoryItem: {
        cursor: 'pointer',
        padding: '8px 12px',
        borderRadius: 4,
        marginBottom: 8,
        userSelect: 'none',
    },
    activeCategory: {
        backgroundColor: '#007bff',
        color: '#fff',
        fontWeight: 'bold',
    },
    main: {
        flexGrow: 1,
        minWidth: '280px',
    },
    filterSection: {
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        marginBottom: '1rem',
        flexWrap: 'wrap',
    },
    priceInput: {
        width: '80px',
        margin: '0 5px',
    },
    productGrid: {
        listStyle: 'none',
        padding: 0,
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
        gap: '20px',
    },
    productCard: {
        border: '1px solid #ddd',
        borderRadius: 8,
        padding: 10,
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        textAlign: 'center',
    },
    productImage: {
        width: '100%',
        height: '140px',
        objectFit: 'cover',
        borderRadius: 6,
        marginBottom: 10,
    },
    pagination: {
        marginTop: 20,
        textAlign: 'center',
    },
};
