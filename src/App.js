import { useState, useEffect } from "react";
import Nav from "./components/Nav";
import Stat from "./components/Stat";
import Header from "./components/Header";
import Vaccination from "./components/Vaccination"
import { CardDeck } from 'react-bootstrap'
import { Helmet } from "react-helmet"

function App() {
  const [newCases, setNewCases] = useState(0);
  const caseRange = [[0, 1], [1, 10], [10, 25], [25, 45], [45, 100000]]
  const [totalCases, setTotalCases] = useState(0);
  const [newDeaths, setNewDeaths] = useState(0);
  //const deathRange = [[0, 0], []]
  const [totalDeaths, setTotalDeaths] = useState(0);
  const [infectRate, setInfectRate] = useState(0);
  //const infectRange = [[0, 0.9], [0.9, 1.1], [1.1, 1.4], [1.4, 2.2], [2.2, 10000]]
  const [testRate, setTestRate] = useState(0);
  //const testRange = [[0, 3], [3, 10], [10, 20], [20, 33], [33, 100]]
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
    setAdminRate(data["vaccines-administered"] || "N/A");
    setCompleteRate(data["vaccines-completed"]);
    setVulnLevel(Math.min(4, data["vulnerability-level"]));
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

      <Helmet>
        <meta charSet="utf-8" />
        <title>Healthy State Covid-19 Stats</title>
        <link rel="canonical" href="http://healthystate.tech/" />
        <meta name="description" content="Make informed decisions by tracking the spread of Covid19 in your city and state."/>
      </Helmet>

      <Nav updateStats={updateStats} />
      <div className="container">
        <Header title={location} vulnLevel={vulnLevel} />
        <CardDeck className="mt-5">
          <Stat stat={{ text: "Daily new cases", number: newCases + ' per 100k', range: caseRange }} />
          <Stat stat={{ text: "Total cases", number: totalCases }} />
          <Stat stat={{ text: "Daily new deaths", number: newDeaths }} />
          <Stat stat={{ text: "Total deaths", number: totalDeaths }} />
        </CardDeck>
        <CardDeck className="mt-4">
          <Stat stat={{ text: "Infection rate", number: infectRate.toFixed(1) }} />
          <Stat stat={{ text: "Positive test rate", number: testRate.toFixed(1) + '%' }} />
          <Stat stat={{ text: "Vaccines administered", number: vaccAdmin }} />
          <Stat stat={{ text: "Vaccines completed", number: vaccComplete }} />
        </CardDeck>
        <Vaccination />
      </div>
    </div>
  );
}

export default App;
