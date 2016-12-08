"use strict";

class FavoritesDisplay extends React.Component {

    render() {
        var favorites = this.props.favorites;    

       return (
            <div>
                 <h3>Your Favorite Lyrics</h3>
                     <ul>
                         {
                             this.props.favorites.map((favorites)=> {
                                 return <li key={favorites}>
                                     <a href="#" onClick={(e) => this.onSavedClick(e, favorites)}>
                                         {favorites}
                                     </a>
                                 </li>
                             })
                         }
                     </ul>
            </div>
         )
     }          
 }