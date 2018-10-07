export async function fetchData(value) {
        return fetch('//www.omdbapi.com/?apikey=b194ff96&s='+value+'&page=1')
            .then(async response => {
                let parsedJSON = await response.json();
                //console.log(parsedJSON)
                if (parsedJSON.Response === "False") {
                    return false;
                }

                let results = parsedJSON.Search.map(result => (
                {
                    Title: `${result.Title}`,
                    Year: `${result.Year}`,
                    imdbID: `${result.imdbID}`,
                    Type: `${result.Type}`,
                    Poster: `${result.Poster}`
                }
            
                ))
                let totalResults = parsedJSON.totalResults;
                //console.log(totalResults);
                return {
                    totalResults,
                    results
                };
            })
            
            
}