import React from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';
class News extends React.Component {
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1,
        }
    }
    updateNews = async () => {

        this.setState({ loading: true });
        let data = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=6a6f9ce8f48244588895064e1a52e377&page=${this.state.page}&pageSize=${this.props.pageSize}`);
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        });
    }


    componentDidMount = async () => {
        this.updateNews();
    }

    
    fetchData = async () => {

        this.setState({
            page: this.state.page + 1
        })
        this.setState({ loading: true });
        let data = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=6a6f9ce8f48244588895064e1a52e377&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`)
        let parsedData = await data.json();
        this.setState({
            articles:  this.state.articles.concat(parsedData.articles),
            totalResults: parsedData.totalResults,
            loading: false
        })
    }

    render() {
        console.log(this.state.articles)
        return (
            <>
                <h3 id='newsTitle'>Daily Alert - Top Headlines</h3>
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Spinner />}
                >
                    <div className="col">
                        {
                            !this.state.loading && this.state.articles.map((element) => {
                                return <div className="outerCol" key={element.url}>
                                    <NewsItem title={element.title} description={element.description} image={element.urlToImage} url={element.url} />
                                </div>
                            })
                        }
                    </div>
                </InfiniteScroll>
            </>
        )
    }
}
export default News;