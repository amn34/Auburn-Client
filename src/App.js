import { useState, useEffect } from "react";
import Nav from "./components/Nav";
import Stat from "./components/Stat";
import Header from "./components/Header";

function App() {
  const [newCases, setNewCases] = useState(0);
  const [totalCases, setTotalCases] = useState(0);
  const [newDeaths, setNewDeaths] = useState(0);
  const [totalDeaths, setTotalDeaths] = useState(0);
  const [infectRate, setInfectRate] = useState(0);
  const [testRate, setTestRate] = useState(0);
  const [vaccAdmin, setAdminRate] = useState(0);
  const [vaccComplete, setCompleteRate] = useState(0);
  const [vulnLevel, setVulnLevel] = useState(0);
  const [location, setLocation] = useState("Auburn, Alabama")

  function updateStats(data) {
    setNewCases(data["new-cases"]);
    setTotalCases(data["tot-cases"]);
    setNewDeaths(data["new-deaths"]);
    setTotalDeaths(data["tot-deaths"]);
    setInfectRate(data["infection-rate"]);
    setTestRate(data["positive-test-rate"] * 100);
    setAdminRate(data["vaccines-administered"]);
    setCompleteRate(data["vaccines-completed"]);
    setVulnLevel(data["vulnerability-level"]);
    setLocation(data["location"]);
  }

  useEffect(() => {
    fetch("https://fabled-decker-310400.wl.r.appspot.com/al/auburn")
      .then((response) => {
        response.json().then((data) => {
          console.log(data)
          updateStats(data)
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [])

  return (
    <div className="App">
      <Nav updateStats={updateStats} />
      <div className="container">
        <Header title={location} vulnLevel={vulnLevel} />
        <div class="row">
          <Stat stat={{ text: "Daily new Cases", number: newCases }} />
          <Stat stat={{ text: "Total cases", number: totalCases }} />
          <Stat stat={{ text: "Daily new deaths", number: newDeaths }} />
          <Stat stat={{ text: "Total deaths", number: totalDeaths }} />
        </div>
        <div class="row">
          <Stat stat={{ text: "Infection rate", number: infectRate.toFixed(1) }} />
          <Stat stat={{ text: "Positive test rate", number: testRate.toFixed(1) }} />
          <Stat stat={{ text: "Vaccines administered", number: vaccAdmin }} />
          <Stat stat={{ text: "Vaccines completed", number: vaccComplete }} />
        </div>
      </div>
    </div>
  );
}

export default App;
