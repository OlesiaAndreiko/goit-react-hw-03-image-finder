import PropTypes from 'prop-types';
import { Header } from './Searchbar.styled';
import { Searchform } from 'components/Searchform/Searchform';

export const Searchbar = ({ onSearch }) => {
  return (
    <Header>
      <Searchform onSearch={onSearch}></Searchform>
    </Header>
  );
};

Searchbar.propTypes = {
  onSearch: PropTypes.func.isRequired,
}