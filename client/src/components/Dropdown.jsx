"use client"

import { Dropdown, DropdownItem } from "flowbite-react";
import { Link } from "react-router-dom";

export function UserDropdown({ logoutHandler }) {
    return (
        <Dropdown label="User" dismissOnClick={false}>
            <Link to="/order-history"><DropdownItem>Order History</DropdownItem></Link>
            <DropdownItem onClick={logoutHandler}>Sign out</DropdownItem>
        </Dropdown>
    );
}
