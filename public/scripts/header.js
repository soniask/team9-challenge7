"use strict";

class Header extends React.Component {
    constructor(props) {
        super(props);
        var user = firebase.auth().currentUser;
        if(user){
            this.state={
                user: user
            };
        } else {
            this.state={};
        }
    }

    componentDidMount(){
        document.getElementById("logout").addEventListener("click", function (e) {
            firebase.auth().signOut();
            window.location.href = "index.html";
        });
    }

    render(){
        return (
            <header>
                {
                    this.state.user ? (
                        <div className="dropdown pull-right">
                            <button className="dropbtn">
                                Welcome, {this.state.user}
                                <span className="caret"></span>
                            </button>
                            <div className="dropdown-content">
                                <a href="profile.html">Profile</a>
                                <a href="#" id="logout">Logout</a>
                            </div>
                        </div>
                    ) : (
                        <div className="dropdown pull-right">
                            <button className="dropbtn">
                                Welcome
                                <span className="caret"></span>
                            </button>
                            <div className="dropdown-content">
                                <a href="index.html" id="logout">Login</a>
                            </div>
                        </div>
                    )
                }
                
                <h1>Lyricy McLyricFace</h1>
                
            </header>
        );
    }
}
