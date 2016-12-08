"use strict";

class FavoritesDisplay extends React.Component {

    render() {
        return (
            <div>
                <h3>Your Favorite Lyrics</h3>
                <ul>
                    {
                        Object.keys(this.props.favorites).map((albumTitle)=> {
                            Object.keys(this.props.favorites[albumTitle]).map((songName)=>{
                                var songItems = this.props.favorites[albumTitle][songName];
                                Object.keys(songItems).map((songItem) => {
                                    var lyricsItem = songItems[songItem];
                                    console.log(lyricsItem.title);

                                    return (
                                        <li>
                                            <p>Help, why isn't this working</p>
                                            <p>{lyricsItem.title}</p>
                                            <p>{lyricsItem.album}</p>
                                            <p>{lyricsItem.line}</p>
                                        </li>
                                    )
                                })
                            })
                            


                        }, this)
                    }
                </ul>
            </div>
        );
    }          
}