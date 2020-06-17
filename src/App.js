import React from 'react';
import { Cards, Chart, CountryPicker } from './Components';
import './App_module.css';

import { fetchData } from './api';

class App extends React.Component {
  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const fetcheData = await fetchData();
    
    this.setState({ data: fetcheData })
  }

  handleCountryChange = async (country) => {
    const fetcheData = await fetchData(country);

    this.setState({ data: fetcheData, country: country })

  }
  render() {
    const { data, country } = this.state;
    return (
      <div className="container">
        <img className="img" src="https://i.ibb.co/7QpKsCX/image.png" alt="COVID-19"/>
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} /> 
      </div>
    );
  }
}

export default App;
