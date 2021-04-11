import { useState } from 'react'
import Nav from './components/Nav'
import Stats from './components/Stats'
import Header from './components/Header'

function App() {
  const [stats, setStats] = useState([
    {
      number: 15000,
      text: 'Daily new cases'
    },
    {
      number: 150000,
      text: 'Infection rate'
    },
    {
      number: 200,
      text: 'Positive test rate'
    },
    {
      number: 60,
      text: 'Percent vaccinated'
    },
    {
      number: 9000,
      text: 'Deaths'
    }
  ])

  return (
    <div className="App">
      <Nav />
      <div className='container'>
        <Header title='Auburn, Alabama' />
        <Stats stats={stats} />
      </div>
    </div>
  );
}

export default App;
