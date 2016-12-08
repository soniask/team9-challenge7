"use strict";

class FavoritesDisplay extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            lyricItemArray: []
        };
    }

    componentDidMount(){
        var favorites = this.props.favorites;
        this.createListOfLyricItems(favorites);
    }

    render() {
        return (
            <div>
                <h3>Your Favorite Lyrics</h3>
                <ul>
                    {
                        this.state.lyricItemArray.map((lyricItem) => {
                            var key = Object.keys(lyricItem)[0];
                            var lyricObject = lyricItem[key];
                            return (
                                <li key={key}>
                                    <p>{lyricObject.title}</p>
                                    <p>{lyricObject.album}</p>
                                    <p>{lyricObject.line}</p>
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        );
    }

    createListOfLyricItems(favorites){
        Object.keys(favorites).map((albumTitle) => {
            var album = favorites[albumTitle];
            Object.keys(album).map((songName)=>{
                var songItems = album[songName];
                var lyricItemArray = this.state.lyricItemArray;
                lyricItemArray.push(songItems);
                this.setState({
                    lyricItemArray: lyricItemArray
                })
            })
        })
    }    
}