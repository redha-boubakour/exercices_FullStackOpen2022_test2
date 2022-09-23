const ShowResults = (props) => {
    const handleClickShow = (event) => {
        props.setSearch(event.target.id);
    };

    if (props.filteredCountries.length > 10)
        return <p>Too many matches, specify another filter</p>;
    if (
        props.filteredCountries.length < 10 &&
        props.filteredCountries.length > 1
    )
        return props.filteredCountries?.map((country) => (
            <>
                <p key={country.name.common}>{country.name.common}</p>
                <button id={country.name.common} onClick={handleClickShow}>
                    Show
                </button>
            </>
        ));
    if (props.filteredCountries.length === 1)
        return props.filteredCountries?.map((country) => (
            <>
                <h2 key={country.name.common}>{country.name.common}</h2>
                <p>Capital : {country.capital}</p>
                <p>Area : {country.area}</p>
                <p>Continents : {country.continents}</p>
                <h3>Languages</h3>
                <ul>
                    {Object.values(country.languages).map((language) => (
                        <li key={language}>{language}</li>
                    ))}
                </ul>
                <img src={country.flags.png} />
            </>
        ));
};

export default ShowResults;
