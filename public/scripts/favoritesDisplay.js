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
                        this.state.lyricItemArray.map((lyricItem) => (
                            <li>
                                <p>{lyricItem.title}</p>
                                <p>{lyricItem.album}</p>
                                <p>{lyricItem.line}</p>
                            </li>
                        ))
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
                Object.keys(songItems).map((songItem) => {
                    var lyricItem = songItems[songItem];
                    console.log(this.state);
                    var lyricItemArray = this.state.lyricItemArray;
                    lyricItemArray.push(lyricItem);
                    console.log(lyricItemArray);
                    this.setState({
                        lyricItemArray: lyricItemArray
                    }, this)
                }, this)
            }, this)
        }, this)
    }    
}