import React, { useState } from "react";

import { Wrapper } from "./SearchBar.styles";
import Navbar from "../Navbar/Navbar";


const SearchBar = () => {

    const [search, setSearch] = useState("");

    const handleChange = (event) => {
        setSearch(event.target.value);
    }

    return <>
        <Navbar />
        <Wrapper>
            <i class="fas fa-search"></i>
            <input
                type='text'
                value={search}
                placeholder='Search'
                onChange={handleChange}
            />
        </Wrapper>
    </>
}

export default SearchBar;