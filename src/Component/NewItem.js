import React, { Component } from 'react'
import newsimg from "../newimg.jpg"
export class NewItem extends Component {
  render() {
    let {title,description,imgurl,newsurl,author,date}=this.props;
    return (
      <div>
        <div className="card">
            <img src={imgurl?imgurl:newsimg} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}...</p>
              <p className="card-text"><small className="text-body-secondary">By-{author?author:"Unknown"}  on {new Date(date).toGMTString()}</small></p>
              <a href={newsurl} target='_blank' rel="noreferrer" className="btn btn-sm btn-primary">More to Read</a>
            </div>
        </div>
      </div>
    )
  }
}

export default NewItem
