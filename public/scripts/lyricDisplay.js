"use strict";

class LyricDisplay extends React.Component {

    render() {

        var lyrics = this.props.lyrics;
        var title = this.props.title;
        var album = this.props.album;

        return (
            <div className="song-display">
                <h2>{this.toTitleFormat(title)}</h2>
                <h3>From the album <em>{this.toTitleFormat(album)}</em></h3>

                <div className="lyric-display">
                    {
                        this.props.lyrics.map((line, index) => (
                            <div
                                className="lyric-line"
                                key={album + "-" + title + "-" + index}
                                id={album + "-" + title + "-" + index}
                                onClick={(e) => this.selectLine(e, index)}
                            >
                                {line || "~"}
                            </div>   
                        ))
                    }
                </div>
                
            </div>
        );
    }

    // Converts a string of format "this_is_a_title" to "This Is A Title", returning a new string
    toTitleFormat(text) {
        var newText = text
            .replace(/_/g, " ")
            .replace(/(?: |\b)(\w)/g, function(key) { return key.toUpperCase() });

        return(newText);
    }

    // Add the last selected line number to the parent state
    selectLine(e, lineNumber) {
        e.preventDefault();
        this.props.storeLineNumber(lineNumber);
    }
}
