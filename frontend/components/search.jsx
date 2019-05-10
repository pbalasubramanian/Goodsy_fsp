import React from "react";
import { withRouter } from "react-router-dom";

class SearchForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
    }

    update(field) {
        return e =>
            this.setState({
                [field]: e.target.value
            });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.history.push("/products?title=" + this.state.title);
        this.props.search(this.state.title)
            .then((products) => {
                // this.props.history.push("/products");
                this.props.history.push("/products?title=" + this.state.title);
                this.setState({ title: "" });
            });
    }


    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} className='search-form'>
                    <input
                        placeholder='Search for items'
                        type="text"
                        value={this.state.title}
                        onChange={this.update("title")}
                        className="inputSearch"
                    />
                    <input
                        className='search-button'
                        type="submit"
                        value='Search'
                    />
                </form>
            </div>
        );
    }
}

export default withRouter(SearchForm);