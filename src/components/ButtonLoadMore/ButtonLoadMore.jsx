import PropTypes from 'prop-types';
import {BtnMore} from "./ButtonLoadMore.styled"

export const ButtonLoadMore = ({onClick}) => {
    return (
    <BtnMore onClick={onClick}>Load More</BtnMore>
    )
}

ButtonLoadMore.propTypes = {
    onClick: PropTypes.func.isRequired,
  }