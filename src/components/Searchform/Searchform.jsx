import { Component } from 'react';
import PropTypes from 'prop-types';
import { ImSearch } from 'react-icons/im';
import {
  SearchForm,
  SearchFormButton,
  SearchFormInput,
} from './Searchform.styled';

export class Searchform extends Component {
static propTypes = {
  onSearch: PropTypes.func.isRequired,
}

  state = {
    value: '',
  };

  handleChange = event => {
    const { value } = event.target;
    this.setState({ value });
  };

  handleSubmit = event => {
    event.preventDefault();

    const { onSearch } = this.props;
    const { value } = this.state;
    onSearch(value);
    
    this.reset();
  };

  reset = () => {
    this.setState({
      value: '',
    });
  };

  render() {
    const { value } = this.state;
    return (
      <SearchForm onSubmit={this.handleSubmit}>
        <SearchFormButton type="submit">
          <ImSearch size={20} />
        </SearchFormButton>
        <SearchFormInput
          type="text"
          name="query"
          value={value}
          onChange={this.handleChange}
          autocomplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </SearchForm>
    );
  }
}
