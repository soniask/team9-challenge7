"use strict";

class FavoritesDisplay extends React.Component {

    render() {
        console.log("now for the render in favoritesdisplay:");
        console.log(this.props.favorites);   
        // WHAT IF THE USER HASN'T FAVORITED ANY LINES???????????????'
        return (
            <div>
                <h3>Your Favorite Lyrics</h3>
                <ul>
                    {
                        this.props.favorites.map((possiblyAnAlbum)=> {
                            console.log(possiblyAnAlbum);
                        })
                    }
                </ul>
            </div>
        );
    }          
}