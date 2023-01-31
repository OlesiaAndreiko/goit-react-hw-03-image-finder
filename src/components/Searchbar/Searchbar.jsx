import { Header } from './Searchbar.styled';
import { Searchform } from 'components/Searchform/Searchform';

export const Searchbar = ({ onSearch }) => {
  return (
    <Header>
      <Searchform onSearch={onSearch}></Searchform>
    </Header>
  );
};
