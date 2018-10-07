import React from 'react';
import {Link} from 'react-router-dom';

class Result extends React.Component {
    render(){
        const e = this.props.result;
        return(
            <div className={'result'}>
                <Link to={'/title/' + e.imdbID} className={'poster-link'}>
                    { e.Poster !== 'N/A' &&
                        <div className={'result-poster'}>
                            <img src={e.Poster} className={'poster'} />
                        </div>
                    }  
                    <div className={'result-inner'}>
                        <span className={'title'}>{e.Title}</span>
                        <span className={'year'}>{e.Year}</span>
                    </div>
                </Link>
            </div>
        );
    }
}

export default Result;