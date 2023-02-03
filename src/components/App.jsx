import { fetchImages } from '../sevices/fetchImages.service';
import { Component } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageSkeleton } from './ImageSkeleton/ImageSkeleton';
import { ErrorMessage } from './ErrorMessage/ErrorMessage';
import { ButtonLoadMore } from './ButtonLoadMore/ButtonLoadMore';

export class App extends Component {
  state = {
    q: '',
    gallary: [],
    isLoading: false,
    error: null,
    page: 1,
    isShow: false,
  };

  perPage = 12;

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
    this.setState({ isLoading: true });
    try {
      const data = await fetchImages({ q, page });
      this.setState(prevState => ({
        gallary: [...prevState.gallary, ...data.hits],
        isShow: (page < Math.ceil(data.totalHits / this.perPage)),
      }));
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
    this.setState({ q: searchWord, gallary: [], page: 1, error: null });
  };

  changePage = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { gallary, isLoading, error, isShow } = this.state;
    return (
      <>
        <Searchbar onSearch={this.getQuery} />

        {gallary.length > 0 && <ImageGallery gallary={this.state.gallary} />}

        {isLoading && <ImageSkeleton />}

        {error && <ErrorMessage error={error} />}

        {isShow && <ButtonLoadMore onClick={this.changePage} />}
      </>
    );
  }
}
