import './ProductPage.scss'
import ProductCard from '../../components/ProductCard/ProductCard';

export default function ProductPage() {

    const products = [{name: 'Shoes', price: 150.00}, {name: 'Shoes2', price: 150.00},
        {name: 'Shoes3', price: 150.00}
    ];

    return (
        <div className='products-container'>
            {products.map((product, index) => (
                <ProductCard key={index} product={product}></ProductCard>
            ))}
        </div>
    );
}