import React, { Component } from "react";
import NewsItem from "./NewsItem";
export default class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1
    };
  }

  async componentDidMount() {
    let url =
      "https://saurav.tech/NewsAPI/top-headlines/category/health/in.json";
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles });
    this.setState({ loading: false });
  }

  Nextclick = async () => {
    let url =
      "https://saurav.tech/NewsAPI/top-headlines/category/health/in.json";
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles, page: this.state.page + 1 });
  };

  Prevclick = async () => {
    this.state.page = this.state.page - 1;
    let url =
      "https://saurav.tech/NewsAPI/top-headlines/category/health/in.json";
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles, page: this.state.page - 1 });
  };

  render() {
    return (
      <div className="container my-4">
        <h3 className="text-center">BREAKING NEWS</h3>
        <div className="row">
          {!this.state.loading &&
            this.state.articles.map((element) => {
              return (
                <div className="my-3 " key={element.url}>
                  <NewsItem
                    desc={
                      element.description && element.description.slice(0, 90)
                    }
                    title={element.title.slice(0, 50)}
                    imgurl={element.urlToImage}
                    url={element.url}
                  />
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}
