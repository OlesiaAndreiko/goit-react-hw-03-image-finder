import PropTypes from 'prop-types';
import { Overlay, ThumbImage, ModalImage } from './Modal.styled';
import { Component } from 'react';

export class Modal extends Component {
  static propTypes = {
    onClose: PropTypes.func.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.onEscapeClose);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onEscapeClose);
  }

  onEscapeClose = event => {
    const { onClose } = this.props;
    if (event.code === 'Escape') {
      onClose();
    }
  };

  onBackdropClose = event => {
    const { onClose } = this.props;
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  render() {
    const { largeImageURL, tags } = this.props;

    return (
      <Overlay>
        <ThumbImage>
          <ModalImage
            src={largeImageURL}
            alt={tags}
            onClick={this.onBackdropClose}
          />
        </ThumbImage>
      </Overlay>
    );
  }
}
