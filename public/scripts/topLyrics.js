"use strict";

class TopLyrics extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            favorites: []
        }
    }

    componentDidMount() {
    }
    
    render() {

        return(
            
            <div className="top-lyrics">

                <div className="title">Top Lines:</div>

                <ol>
                    {
                        this.props.favorites.map((line, index) => (
                            <li key={index}
                                className="line">
                                {line}
                            </li>
                        ))
                    }
                </ol>

            </div>
        );
    }

    // Returns an array of the top "n" most favorited lines of the current song,
    // in order of decreasing popularity
}