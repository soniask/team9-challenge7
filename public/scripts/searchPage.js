"use strict";

class SearchPage extends React.Component {

    render() {

        return(

            <div>
                <SearchForm
                    search={(track) => this.searchTracks(track)}
                />
            </div>

        );
    }

    searchTracks(track){
        var url = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20html%20where%20url%3D%22http%3A%2F%2Fwww.kanyerest.xyz%2Fapi%2Ftrack%2F"+track+"%22&format=json&diagnostics=true&callback=";
        fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((json) => {
            var result = JSON.parse(json.query.results.body);
            var title = result.title;
            var album = result.album;
            var lyrics = result.lyrics.split("\n");

            console.log(lyrics);

            this.setState({
                title: title,
                album: album,
                lyrics: lyrics
            });
        })
    }
}

var searchWrapper = document.getElementById("search-wrapper");
ReactDOM.render(<SearchPage />, searchWrapper);