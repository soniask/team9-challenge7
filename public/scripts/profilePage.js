"use strict";

class ProfilePage extends React.Component {

    render() {
        var database = firebase.database();
        var user = firebase.User();
        this.setState(favorites= database.ref( user.uid + '/{favorites}'))
        return(

            <div>
                <Header/>
                <FavoritesDisplay
                favorites={this.state.favorites}
                
                />

            
            </div>

        );
    }


    
}

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        // Data fetching

        
        
        

        // favorites.on('child_added', function(data) {
        //     var id = data.key;
        //     var favorite = data.val();
        // });
    
    } else {
        //redirect to index.html
        window.location.href= "index.html";
    }
})

var profileWrapper = document.getElementById("profile-wrapper");
ReactDOM.render(<ProfilePage />, profileWrapper);