import { useEffect, useState } from "react";

import axios from "axios";
import ShowResults from "./components/ShowResults";

const App = () => {
    const [search, setSearch] = useState("");
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        axios
            .get("https://restcountries.com/v3.1/all")
            .then((response) => setCountries(response.data));
    }, []);

    const handleSearch = (event) => {
        event.preventDefault();
        setSearch(event.target.value);
    };

    const filteredCountries = countries.filter((country) =>
        country.name.common.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <>
            <form>
                <label>Find countries </label>
                <input onChange={handleSearch} value={search}></input>
            </form>
            <ShowResults
                filteredCountries={filteredCountries}
                setSearch={setSearch}
            />
        </>
    );
};

export default App;
