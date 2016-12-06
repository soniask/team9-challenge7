"use strict";

class SearchPage extends React.Component {
    constructor(props){
        super(props);

        this.state = {};
    }

    render() {

        return(
            <div className="container">
                <Header/>
                <SearchForm
                    search={(track) => this.searchTracks(track)}
                />

                {
                    this.state.error 
                        ? (
                            <p className="alert alert-danger">{this.state.error}</p>
                        ) 
                        : null
                }

                <div className="row">
                    {
                        this.state.lyrics
                            ?
                                <div className="col-md-6">
                                    <LyricDisplay
                                        lyrics={this.state.lyrics}
                                        title={this.state.title}
                                        album={this.state.album}
                                        storeLineNumber={(lineNumber) => this.storeLineNumber(lineNumber)}
                                    />
                                </div>
                            : null
                    }

                    {
                        this.state.lineNumber != undefined
                            ?
                                <div className="col-md-6">
                                    <h1>The currently selected line is {this.state.lineNumber}</h1>
                                    <h2>The current lyric is: {this.state.lyrics[this.state.lineNumber]}</h2>
                                </div>
                            : null
                    }
                </div>


            </div>
        );
    }

    searchTracks(track){
        this.setState({error: undefined});
        var url = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20html%20where%20url%3D%22http%3A%2F%2Fwww.kanyerest.xyz%2Fapi%2Ftrack%2F"+track+"%22&format=json";
   
        fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((json) => {
            var result = json.query.results;
            if(result){
                var resultJSON = JSON.parse(result.body);
                var title = resultJSON.title;
                var album = resultJSON.album;
                var lyrics = resultJSON.lyrics.split("\n");

                this.setState({
                    title: title,
                    album: album,
                    lyrics: lyrics,
                    lineNumber: undefined // reset the stored line number whenever a new song is loaded
                });
            } else {
                this.setState({error: "Song not found"});
            }
            
          
        })
    }

    // Add the given line number to the current state
    storeLineNumber(lineNumber) {

        this.setState({
            lineNumber: lineNumber
        });
    }
}

var searchWrapper = document.getElementById("search-wrapper");
ReactDOM.render(<SearchPage />, searchWrapper);
