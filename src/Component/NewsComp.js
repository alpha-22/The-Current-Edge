import React, { Component } from 'react'
import NewItem from './NewItem'
import Spinner from './Spinner';
import propTypes from 'prop-types'

export class NewsComp extends Component {
  static defaultProps = {
    country: 'in',
    pageSize: 6,
    category:''
  }
  static propTypes = {
    country: propTypes.string,
    pageSize: propTypes.number,
    category:propTypes.string
  }

  constructor() {
    super();
    console.log("constructor Activated");
    this.state = {
      articles:[],
      loading: false,
      page: 1
    }
  }
  

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=613478a13fec4d52b9ab2fc1bceff35f&page=1&pagesize=${this.props.pageSize}`;
    this.setState({loading:true})
    let data = await fetch(url)
    let parsedData = await data.json()
    console.log(parsedData)
    this.setState({ articles: parsedData.articles,
    totalResults:parsedData.totalResults,
    loading:false
    })
  }

  FunPreviousClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=613478a13fec4d52b9ab2fc1bceff35f&page=${this.state.page-1}&pagesize=${this.props.pageSize}`;
    this.setState({loading:true})
    let data = await fetch(url)
    let parsedData = await data.json()
    console.log(parsedData)
    this.setState({
      articles: parsedData.articles,
      page: this.state.page - 1,
      loading:false
    })
  }
  FunNextClick = async () => {
    if(!((this.state.page+1)>Math.ceil(this.state.totalResults/this.props.pageSize))){
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=613478a13fec4d52b9ab2fc1bceff35f&page=${this.state.page+1}&pagesize=${this.props.pageSize}`;
    this.setState({loading:true})
    let data = await fetch(url)
    let parsedData = await data.json()
    console.log(parsedData)
    this.setState({
      articles: parsedData.articles,
      page: this.state.page + 1,
      loading:false
    })
  }
  }

  render() {
    return (
      <div className='container my-3'>
        <h2>The Current Egde - top headlines</h2>
        {this.state.loading && <Spinner/>}
        <div className="row" >
          {!this.state.loading && this.state.articles.map((element) => {
            return <div className="col-md-4 my-3" key={element.url}>
              <NewItem title={element.title ? element.title: ""} description={element.description ? element.description.slice(0, 90) : ""} imgurl={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt}/>
            </div>
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button type="button" className="btn btn-info " disabled={this.state.page <= 1} onClick={this.FunPreviousClick} >&larr; Previous</button>
          <button type="button" className="btn btn-info " disabled={(this.state.page+1)>Math.ceil(this.state.totalResults/this.props.pageSize)} onClick={this.FunNextClick} >Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default NewsComp
