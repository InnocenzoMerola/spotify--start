import Col from "react-bootstrap/Col";

import React, { useState, useEffect } from "react";

const Artist = function ({ singer }) {
  const [data, setData] = useState(null);

  const fetchArtist = () => {
    fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${singer}`, {
      headers: {
        "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
        "X-RapidAPI-Key": "9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore nella richiesta a Deezer");
        }
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error("Si è verificato un errore:", error);
      });
  };

  useEffect(() => {
    fetchArtist();
  }, []);

  return (
    <>
      {data && (
        <>
          {data.data
            .map((sing, index) => (
              <Col className="text-center" key={sing.id}>
                <img className="img-fluid" src={sing.album.cover_medium} alt="track" />
                <p>
                  Track: {sing.title.length < 16 ? sing.title : sing.title.substring(0, 16)} <br />
                  Artist: {sing.artist.name}
                </p>
              </Col>
            ))
            .slice(0, 6)}
        </>
      )}
    </>
  );
};
export default Artist;

// --------------------------------------------
// PROVA
// Artist = function ({ singer }) {
//   const artHome = useSelector((state) => state.ricercati.artistHome);

//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(getArtistHome());
//   }, []);

//   if (!artHome || artHome.length === 0) {
//     return <p>Loading...</p>; // Aggiunto un messaggio di caricamento per mostrare durante il caricamento dei dati
//   }
//   const filterSong = artHome.filter((song) => song.artist.name.toLowerCase() === singer.toLowerCase());
//   console.log(`Filtrato per ${singer}:`, filterSong);

//   return (
//     <>
//       {filterSong
//         .map((sing) => (
//           <Col className="text-center" key={sing.id}>
//             <img className="img-fluid" src={sing.album.cover_medium} alt="track" />
//             <p>
//               Track: {sing.title.length < 16 ? sing.title : sing.title.substring(0, 16)} <br />
//               Artist: {sing.artist.name}
//             </p>
//           </Col>
//         ))
//         .slice(0, 6)}
//     </>
//   );
// };
// export default Artist;
