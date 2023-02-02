import { Overlay, ThumbImage, ModalImage } from './Modal.styled';
import { Component } from 'react';

export class Modal extends Component {
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
