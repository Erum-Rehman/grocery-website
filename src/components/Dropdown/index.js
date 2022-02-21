import { React } from 'react';

const Dropdown = () => {
    return (
        <>
            <DropdownButton
                as={ButtonGroup}
                key="down"
                id={`dropdown-button-drop-down`}
                drop="down"
                variant="Light"
                title={` Shop `}
                className="dropdown-shop"
            >
                <Dropdown.Item href="" ><Link to="/product">Product</Link></Dropdown.Item>
                <Dropdown.Item href=""><Link to="/productDetails">Product Details</Link></Dropdown.Item>
                <Dropdown.Item href=""><Link to="/productSidebar">Product Sidebar</Link></Dropdown.Item>
            </DropdownButton>
        </>
    )
}