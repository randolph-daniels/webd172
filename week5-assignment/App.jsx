import { useState } from "react";
import Header from "./Header"
import MovieList from "./MovieList"
import './App.css'

const movies = [
  {
    id: 1,
    title: "The Matrix",
    year: 1999,
    description: "A computer hacker learns from mysterious rebels about the true nature of his reality"
  },
 
  {
    id: 2,
    title:"John Wick",
    year: 2014,
    description: "An ex-hitman comes out of retirement to track down the gangsters that took everything from him."
  },

  {
    id: 3,
    title: "Speed",
    year: 1994,
    description: "A young SWAT cop must prevent a bomb exploding aboard a city bus by keeping its speed above 50 mph."
  },

  {
    id: 4,
    title: "Constantine",
    year: 2005,
    description: "A supernatural exorcist and demonology  helps a policewoman prove her sister's death was not a suicide."
  },

  {
    id: 5,
    title: "Bill & Ted's Excellent Adventure",
    year: 1989,
    description: "Two teens travel through time to pass their history class assignment."
  },
]

function App() {
const [showDashboard, setShowDashboard] = useState(true);

return (
<main className="container">
<Header />

<button
className="toggle-dashboard-btn"
onClick={() => setShowDashboard(!showDashboard)}
>
{showDashboard ? "Hide Dashboard" : "Show Dashboard"}
</button>

{showDashboard && (
<MovieList
movieData={movies}
/>
)}
</main>
);
}

export default App;