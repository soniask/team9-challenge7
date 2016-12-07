"use strict";

class ProfilePage extends React.Component {
    constructor(props) {
        super(props);       
        var database = firebase.database();
        var user = firebase.auth().currentUser;
        var userId = firebase.auth().currentUser.uid;
        // this.state.favorites = (
        // return firebase.database().ref('/users/' + userId).once('value').then(function(snapshot) {
        // var username = snapshot.val().username;
        

        database.ref('/userTree/' + user.uid).once('value').then((snapshot) => {
           this.state = {
               favorites:snapshot.val()
           };
        });
        }


        // var favorites = database.ref( user.uid + '/{userTree}').then(() => {
        //  this.state = {
        //      favorites: favorites
        //  })
    //    console.log(this.favorites);
    //    this.setState({favorites: favorites});
        
    
    render() {
        
        return(

            <div>
                <Header/>
                <FavoritesDisplay 
                favorites
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