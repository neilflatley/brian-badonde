import React from 'react';

class Title extends React.Component {
    render(){
        const data = this.props.data;
        return(
            <div className={'title'}>
                    <div className={'poster'}>
                        <img src={data.Poster} />
                    </div>
                    <div className={'main'}>
                        <h2>{data.Title}</h2>
                        <span>{data.Year}</span> 
                    </div>
            </div>
        );
    }
}

export default Title;