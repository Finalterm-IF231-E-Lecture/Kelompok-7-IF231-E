import React, { Component } from "react";
import "./NewsItem";

export default class NewsItem extends Component {
  render() {
    let { title, desc, imgurl, url } = this.props;

    return (
      <div className="NewsItem">
        <div className="card" style={{ width: "11.5rem" }}>
          <img
            className="card-img-top "
            alt="Images"
            src={
              !imgurl
                ? "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
                : imgurl
            }
          />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{desc}...</p>
            <a href={url} className="btn btn-sm btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}
