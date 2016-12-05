"use strict";
class SearchForm extends React.Component {
    render() {
        return (
            <form onSubmit={(e)=>this.searchTracks(e)}>
                <div className="input-group">
                    <input type="text" placeholder="Search" aria-label="Search input" ref="query"/>
                    <span className="input-group-btn">
                        <button className="btn btn-default" type="submit"></button>
                    </span>
                </div>
            </form>
        );
    } 

    searchTracks(e) {
        e.preventDefault();

        var trackTitle = this.refs.query.value.toLowerCase().replace(" ", "_");
        console.log(trackTitle);

        this.props.search(trackTitle);
    }
}