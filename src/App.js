import React, { useEffect, useState } from "react";
import "./App.css";
import DataBox from "./components/DataBox";
import NavBar from "./components/NavBar";
import LineGraph from "./components/LineGraph";
import axios from "./axios";
import SelectBox from "./components/SelectBox";

function App() {
  const [allData, setAllData] = useState({
    totalConfirmed: 0,
    totalRecovered: 0,
    totalDeaths: 0,
  });
  const [coronaSummary, setCoronaSummary] = useState([]);
  const [loading, setLoading] = useState(false);
  const [coronaCount, setCoronaCount] = useState([]);
  const [label, setLabel] = useState([])
  const [country, setCountry] = useState("");

  useEffect(() => {
    setLoading(true);
    async function getData() {
      const response = await axios.get(`/summary`);
      console.log(response);
      if (response.status === 200) {
        setAllData({
          totalConfirmed: response.data.Global.TotalConfirmed,
          totalRecovered: response.data.Global.TotalRecovered,
          totalDeaths: response.data.Global.TotalDeaths,
        });
        setCoronaSummary(response.data);
        console.log(response.data);
      }
      setLoading(false);
    }
    getData();
  }, []);

  if (loading) {
    return <h1>Waiting for response</h1>;
  }

  return (
    <div className="App">
      <NavBar />
      <DataBox
        totalConfirmed={allData.totalConfirmed}
        totalRecovered={allData.totalRecovered}
        totalDeaths={allData.totalDeaths}
        country={country}
      />
      <SelectBox
        coronaSummary={coronaSummary}
        setCoronaCount={setCoronaCount}
        allData={allData}
        setAllData={setAllData}
        setLabel={setLabel}
        country={country}
        setCountry={setCountry}
      />
      <LineGraph verticalAxis={coronaCount} horizontalAxis={label} />
    </div>
  );
}

export default App;
