import React from 'react';

class Title extends React.Component {
    render() {
        const data = this.props.data.title || {};
        console.log(data);
        return(
            <div className={'title'}>
                    <div className={'poster'}>
                        <img src={data.Poster} />
                    </div>
                    <div className={'main'}>
                        <h2>{data.Title} ({data.Year})</h2>
                        <div className="plot"><span>{data.Plot}</span></div>
                        <span>{data.imdbRating}</span>
                        <dl>
                            <dt></dt>
                            <dd>{data.Production}</dd>
                            <dt></dt>
                            <dd>{data.Director}</dd>
                            <dt></dt>
                            <dd>{data.Writer}</dd>
                            <dt></dt>
                            <dd>{data.Released}</dd>
                            <dt></dt>
                            <dd>{data.Runtime}</dd>
                            <dt></dt>
                            <dd></dd>
                        </dl>
                    </div>
            </div>
        );
    }
}

export default Title;