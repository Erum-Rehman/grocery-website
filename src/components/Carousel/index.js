import React from "react";
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import './index.scss';
import categories from "../../mock/categories";


const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
];

const Category = () => {
    return (
        <>
            <div className="App">
                <Carousel breakPoints={breakPoints}>
                    <div className="body">
                        <div className="container-category">
                            <div className="row-category">
                                {
                                    categories.map(category => <div className="category">
                                        {<div>
                                            {category.icon}
                                        </div>}
                                        <h5 className="category-title">{category.name}</h5>
                                    </div>)
                                }
                            </div>
                        </div>
                    </div>
                </Carousel>
            </div>
        </>
    );
}

export default Category;