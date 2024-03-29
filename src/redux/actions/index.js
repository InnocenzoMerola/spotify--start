export const SEARCH_ARTIST = "SEARCH_ARTIST";
export const ARTIST_HOME = "ARTIST_HOME";

export const getSearchedAction = (music) => {
  return (dispatch, getState) => {
    fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=` + music, {
      method: "GET",
      headers: {
        "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
        "X-RapidAPI-Key": "9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore nella chiamata api");
        }
      })
      .then((fetchedSearch) => {
        dispatch({
          type: SEARCH_ARTIST,
          payload: fetchedSearch.data,
        });
      })
      .catch((error) => console.log("ERRORE", error));
  };
};

// export const getArtistHome = (singer) => {
//   return (dispatch, getState) => {
//     fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${singer}`, {
//       headers: {
//         "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
//         "X-RapidAPI-Key": "9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0",
//       },
//     })
//       .then((response) => {
//         if (response.ok) {
//           return response.json();
//         } else {
//           throw new Error("Errore nella richiesta a Deezer");
//         }
//       })
//       .then((data) => {
//         dispatch({
//           type: ARTIST_HOME,
//           payload: data.data,
//         });
//       })
//       .catch((error) => {
//         console.error("Si è verificato un errore:", error);
//       });
//   };
// };
