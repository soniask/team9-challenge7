"use strict";

class LyricInfo extends React.Component {

    render() {

        var user = firebase.auth().currentUser;

        return(

            <div className="lyric-info">

                <div className="chosen-line">
                    {this.props.line}
                </div>

                {
                    user
                        ?
                            <div>
                                <div className="favorite-list">
                                    <ul>
                                        <li>hi</li>
                                        <li>hi</li>
                                        <li>hi</li>
                                        <li>hi</li>
                                    </ul>
                                </div>

                                <button 
                                    type="button"
                                    className="btn btn-primary btn-lg"
                                    onClick={(e) => this.addfavorite(e)}
                                >
                                    Favorite line
                                </button>

                            </div>
                        : 
                            <div className="alert alert-info" role="alert">
                                You must be logged in to see other user's favorites and favorite your own lyrics
                            </div>
                }
            
            </div>
        );
    }

    addfavorite(e) {
        e.preventDefault();


    }
}
