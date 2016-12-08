"use strict";

class TopLyrics extends React.Component {

    render() {

        var favorites = this.getTopLines(5);

        return(
            
            <div>

            </div>
        );
    }

    // Returns an array of the top "n" most favorited lines of the current song,
    // in order of decreasing popularity
    getTopLines(n) {

        var database = firebase.database();
        var refLocation = "lyricTree/" + this.props.album + "/" + this.props.title;

        // Will contain objects with line number and favorites
        var lineList = [];

        // Builds up `lineList`
        database.ref(refLocation).on("value", (snapshot) => {

            snapshot.forEach((line) => {

                lineList.push({
                    lineNumber: line.key,
                    favorites: Object.keys(line.val()).length
                });
            });
        });

        // Sorts array by decreasing number of favorites
        lineList.sort((a, b) => {
            return b.favorites - a.favorites
        });

        // Will contain most favorited lyrics, in order
        var lyricList = [];
        var lyrics = this.props.lyrics;

        // build up `lineList`
        lineList.forEach((line) => {
            lyricList.push(lyrics[line.lineNumber]);
        });

        // Only return top "n" lines
        return lyricList.slice(0, n);
    }
}