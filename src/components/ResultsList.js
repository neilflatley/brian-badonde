import React from 'react';
import Result from './Result';
import Pager from './Pager';

class ResultsList extends React.Component {
    //`this.props.history.push('/some/path')`
    render(){
        const {value, search, isLoading, searchData} = this.props.data;
        if (value != undefined && value != '') {
            this.props.history.push('/search/' + value);
        }
        return(
            <div className={search ? 'results' : ''}>
                { isLoading && <h2>Loading...</h2> }
                { search && searchData.totalResults == 0 && <h2>No results found for: &quot; {value} &quot;</h2>}
                { !isLoading && searchData.totalResults > 0 && 
                    <div>
                        <h2>Results for &quot; {value} &quot;</h2>
                        <span>{searchData.totalResults} found</span> 
                    </div>
                }
                {
                    !isLoading && searchData.totalResults > 0 ? searchData.results.map(result => {
                        const {Title, Year, imdbID, Type, Poster} = result;
                        return <Result key={imdbID} result={result} />
                    }) : null
                }
                {
                    !isLoading && searchData.totalResults > 0 &&
                    <Pager numPages={Math.ceil(searchData.totalResults / 10)} perPage={10} />
                }
            </div>
        );
    }
}

export default ResultsList;