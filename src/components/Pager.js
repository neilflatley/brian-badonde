import React from 'react';
import {Link} from 'react-router-dom';

class Pager extends React.Component {
    render(){
        const perPage = this.props.perPage;
        const numPages = this.props.numPages;
        var pages = [];
        for(var i = 1; i <= numPages; i++) {
            pages.push(<span className='page'><Link to={'/page/'+i}>{i}</Link>&nbsp;</span> );
        }
        var display = pages.length > 1 ? 'block' : 'none';
        return(
            <div className={'pager'} style={{display:display}}>
                <span className='previous-page'><Link to={'/page/1'}>&lt;&lt;</Link></span>&nbsp;
                {pages}
                <span className='next-page'><Link to={'/page/1'}>&gt;&gt;</Link></span>
            </div>
        )
    }
}

export default Pager;