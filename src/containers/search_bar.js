import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';


class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' }
    // 앞 라인 : this.onInputChange => new scope
    // 뒤 라인:  this(instance of SearchBar).onInputChange(has a function called).bind(this(SearchBar))
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  //The (event) is the argument we get from onChange and so on...
  onInputChange(event) {
    this.setState({term: event.target.value});
  }

  onFormSubmit(event) {
    //don't sumbit the form to back-end
    event.preventDefault();

    //We need to go and fetch weather data
    this.props.fetchWeather(this.state.term);
    this.setState({term: ''});
  }

  //form element used because it has auto focus when typing and the enter key works
  render () {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="선택한 도시의 5일치 날씨를 알아봅시다."
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
          />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}

//this causes the actioncreator to bind searchbar
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
