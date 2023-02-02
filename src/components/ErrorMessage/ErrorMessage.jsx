import PropTypes from 'prop-types';
export { Text } from './ErrorMessage.styled';

export const ErrorMessage = ({error}) => {
  // eslint-disable-next-line react/jsx-no-undef
  return <Text>{error}</Text>;
};

ErrorMessage.propTypes = {
  error: PropTypes.string.isRequired,
}