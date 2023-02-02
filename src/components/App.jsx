import { fetchImages } from '../sevices/fetchImages.service';
import { Component } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageSkeleton } from './ImageSkeleton/ImageSkeleton';
import { ErrorMessage } from './ErrorMessage/ErrorMessage';
import { ButtonLoadMore } from './ButtonLoadMore/ButtonLoadMore';
// import { Modal } from './Modal/Modal';

export class App extends Component {
  state = {
    q: '',
    gallary: [],
    isLoading: false,
    error: null,
    page: 1,
    perPage: 12,    
    totalHits: 0,
  };

  componentDidMount() {
    if (this.state.gallary.length) {
      this.makeGallary();
    }
  }

  componentDidUpdate(_, prevState) {
    const { q, page } = this.state;
    if (q && (prevState.q !== q || prevState.page !== page)) {
      this.fetchData();
    }
  }

  fetchData = async () => {
    const { q, page } = this.state;
    this.setState({ isLoading: true, error: null });
    try {
      const data = await fetchImages({q, page});
      this.setState({ gallary: data.hits, totalHits: data.totalHits });
    } catch (error) {
      // console.log(error);
      this.setState({
        error: 'Sorry, there was a negative effect. Please refresh the page.',
      });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  makeGallary = array => {
    this.setState({ gallary: array });
  };

  getQuery = searchWord => {
    this.setState({ q: searchWord, gallary: [], page: 1, totalHits: 0 });
  };

  changePage = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };


  render() {
    const { isLoading, error, page, perPage, totalHits, isOpen } = this.state;
    return (
      <>
        <Searchbar onSearch={this.getQuery} />

        <ImageGallery gallary={this.state.gallary} isOpen={isOpen}/>

        {isLoading && <ImageSkeleton />}

        {error && <ErrorMessage error={error} />}

        {totalHits && (totalHits > page * perPage) && (
          <ButtonLoadMore onClick={this.changePage} />
        )}
        
      </>
    );
  }
}
