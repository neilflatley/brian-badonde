const Search = {
    fetchData(component, value){
        component.setState({
            isLoading: true,
            search: true
        })
        fetch('http://www.omdbapi.com/?apikey=b194ff96&s='+value+'&page=1')
            .then(response => response.json())
            .then(function(parsedJSON) {
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
                console.log(totalResults);
                return {
                    totalResults,
                    results
                };
            })
            //.then(parsedJSON => parsedJSON.totalResults)
            .then(searchData => component.setState({
                searchData,
                isLoading: false
            }))
            .catch(function(error) {
                //console.log('parsing failed', error);
                component.setState({searchData: {totalResults: 0}, isLoading: false})
            })
            
    }
};
export default Search;