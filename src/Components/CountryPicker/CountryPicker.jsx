import React, { useState, useEffect } from 'react'
import { NativeSelect, FormControl } from '@material-ui/core';
import { fetchCountries } from '../../api'

import './CountryPicker_module.css';

const CountryPicker = ({ handleCountryChange }) => {
    const [fetchedCountries, setFetchedCountries] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setFetchedCountries(await fetchCountries);
        }

        fetchAPI();
    }, [setFetchedCountries])

    
    return (
        <div>
            <FormControl className="fromControl">
                <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
                    <option value="">Global</option>
                    {fetchedCountries.map((country, i) => <option key={i} value={country}>{country}</option>)}
                </NativeSelect>
            </FormControl>
        </div>
    )
}

export default CountryPicker
