import './App.css'
import product from '../../mock/product';

const Product = () => {
    return (
        <>
            <div className="body">
                <div className="product-container">
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

                </div>
            </div>
        </>
    )
}
export default Product;