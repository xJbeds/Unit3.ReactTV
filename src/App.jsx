import ShowDetails from "./shows/ShowDetails";
import { tvShows } from "./shows/data.js";
import ShowSelection from 
/**
 * React TV is an web streaming platform that allows users to browse
 * through the episodes of a variety of different shows.
 */
export default function App() {
  const [allShows, setAllShows] = useState(tvShows);
  const [selectedShow, setSelectedShow] = useState(null);
  return (
    <>
      <header>
        <p>React TV</p>
        <ShowSelection shows={show} setSelectedShow={setSelectedShow}/>
      </header>
      <main>
        <showDetails />
      </main>
    </>
  );
}
