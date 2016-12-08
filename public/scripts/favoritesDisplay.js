"use strict";

class FavoritesDisplay extends React.Component {

    render() {   
       return (
            <div>
                 <h3>Your Favorite Lyrics</h3>
                     <ul>
                         {
                             this.props.favorites.map((favorites)=> (
                                 <li key={favorites}>
                                     <a href="#" onClick={(e) => this.onSavedClick(e, favorites)}>
                                         {favorites}
                                     </a>
                                 </li>
                             ))
                         }
                     </ul>
            </div>
         )
     }          
 }