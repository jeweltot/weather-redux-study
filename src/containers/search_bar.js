import React, {Component} from 'react';
import {fetchWeather} from '../actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class SearchBar extends Component {

    constructor(props) {
        super(props);

        this.state = { term : ''};
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(e)
    {
        e.preventDefault();

        this.setState({term : e.target.value})
    }

    onFormSubmit(e) {
        e.preventDefault();

        this.props.fetchWeather(this.state.term);
        this.setState({term : ''});
    }

    render () {
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input
                    type="text"
                    placeholder="도시명을 입력하세요."
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange}
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">submit</button>
                </span>
            </form>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchWeather}, dispatch) ;
}

export default connect(null, mapDispatchToProps)(SearchBar);