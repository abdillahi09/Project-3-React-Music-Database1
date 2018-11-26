import React, {Component} from 'react';

import Banner from '../components/banner';
import ArtistList from '../components/artistList';

const URL_ARTIST = "http://localhost:3050/artists"

// This class uses components and feeds the main html page that will be displayed when the page is started.

class Home extends Component {
    constructor(props){
        super(props);

        this.state={
            artists:''
        }
    }

    componentDidMount(){
        fetch(URL_ARTIST, {
            method:'GET'
        })
        .then((response) => response.json())
        .then(json => {
            this.setState({
                artists:json
            })
        })
    }

    render(){
        return (
            <div>
                <Banner></Banner>
                <div className=''>
                    <ArtistList allArtists={this.state.artists}></ArtistList>
                </div>
            </div>
        )
    }
}

export default Home;