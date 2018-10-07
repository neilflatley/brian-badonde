export async function fetchTitle(value) {
    return fetch('//www.omdbapi.com/?apikey=b194ff96&i='+value)
        .then(async response => {
            let parsedJSON = await response.json();
            
            if (parsedJSON.Response === "False") {
                return false;
            }

            return parsedJSON;
        })
        
        
}