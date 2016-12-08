"use strict";

class ProfilePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {}; 
    }

    componentDidMount(){
        var database = firebase.database();
        var userId = firebase.auth().currentUser.uid;

        database.ref('/userTree/' + userId).once('value').then((snapshot) => {
            this.setState({
                favorites:snapshot.val()
            });
        });
    }
        
    
    render() {
        return(
            <div>
                <Header/>
                {
                    this.state.favorites ? (
                    <FavoritesDisplay 
                        favorites={this.state.favorites}
                    />
                    ) : null
                }
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