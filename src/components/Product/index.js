import './App.css'
import product from '../../mock/product';

const Product = () => {
    return (
        <>
                
                    {
                        product.map((products) => (<div className="products">
                            {<div className="product-img">
                                <img src={products.image} />
                            </div>}
                            <h5 className="product-title">{products.name}</h5>
                            <p style={{ color: 'grey' }}>{products.price}</p>
                            <div className="product-butn">{products.button}</div>

                        </div>))
                    }
        </>
    )
}
export default Product;