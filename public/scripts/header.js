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
                            <button className="btn btn-default dropbtn">
                                Welcome, {this.state.user.displayName}
                                <span className="caret"></span>
                            </button>
                            <div className="dropdown-content">
                                <a className="btn btn-default" href="profile.html">
                                    <div className="text-right">
                                        Profile
                                    </div>
                                </a>
                                <a className="btn btn-default" href="#" id="logout">
                                    <div className="text-right">
                                        Logout
                                    </div>
                                </a>
                            </div>
                        </div>
                    ) : (
                        <div className="dropdown pull-right">
                            <button className="btn-default dropbtn">
                                Welcome
                                <span className="caret"></span>
                            </button>
                            <div className="dropdown-content">
                                <a className="btn btn-default" href="index.html" id="logout">
                                    <div className="text-right">
                                        Login
                                    </div>
                                </a>
                            </div>
                        </div>
                    )
                }
                
                <h1>Lyricy McLyricFace</h1>
                
            </header>
        );
    }
}
