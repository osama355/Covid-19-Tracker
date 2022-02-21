import React, { useState } from "react";
import axios from "../axios";

const style = {
  selectCountry: {
    padding: "10px",
    fontWeight: "light",
    fontSize: "0.8em",
    cursor: "pointer",
    borderRight:"none"
  },
  selectDays:{
    padding: "10px",
    fontWeight: "light",
    fontSize: "0.8em",
    cursor: "pointer",
    borderLeft:"none"
  },
  mainSelectDiv:{
    marginTop:"50px",
    display:"flex",
    justifyContent:"center",
  }
};

export default function SelectBox({
  coronaSummary,
  setCoronaCount,
  setAllData,
  setLabel,
  country,
  setCountry,
}) {
  const [days, setDays] = useState(7);

  const formatDate = (date) => {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = `0${d.getMonth() + 1}`.slice(-2);
    const _date = d.getDate();
    return `${year}-${month}-${_date}`;
  };

  const handleCountry = (e) => {
    setCountry(e.target.value);
    const d = new Date();
    const to = formatDate(d);
    const from = formatDate(d.setDate(d.getDate() - days));
    console.log(from, to);
    getDataByCountry(e.target.value, from, to);
  };

  const handleDays = (e) => {
    const d = new Date();
    const to = formatDate(d);
    const from = formatDate(d.setDate(d.getDate() - e.target.value));
    setDays(e.target.value);
    getDataByCountry(country, from, to);
  };

  const getDataByCountry = async (countrySlug, from, to) => {
    const countryData = await axios.get(
      `/country/${countrySlug}/status/confirmed?from=${from}T00:00:00Z&to=${to}T00:00:00Z`
    );
    console.log(countryData);

    const verticalChartData = countryData.data.map((d) => d.Cases);
    const horizontalChartLabel = countryData.data.map((d) => d.Date);
    const coronaDetails = coronaSummary.Countries.find(
      (country) => country.Slug === countrySlug
    );
    setCoronaCount(verticalChartData);
    setLabel(horizontalChartLabel);
    setAllData({
      totalConfirmed: coronaDetails.TotalConfirmed,
      totalRecovered: coronaDetails.TotalRecovered,
      totalDeaths: coronaDetails.TotalDeaths,
    });
  };

  return (
    <div style={style.mainSelectDiv}>
      <select onChange={handleCountry} value={country} style={style.selectCountry}>
        <option value="">Select Country</option>
        {coronaSummary.Countries &&
          coronaSummary.Countries.map((country, key) => (
            <option key={key} value={country.Slug}>
              {country.Country}
            </option>
          ))}
      </select>

      <select onChange={handleDays} value={days} style={style.selectDays}>
        <option value="7">Last 7 days</option>
        <option value="30">Last 30 days</option>
        <option value="90">Last 90 days</option>
      </select>
    </div>
  );
}
