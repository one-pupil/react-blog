import React, { Component } from 'react';
import { withRouter } from "react-router-dom"

class ArticleItem extends Component {  
  render() {
    let { article } = this.props;
    return (
      <div className="item">
        <h2 onClick={ this.goTo } data-id={article.id}>{ article.title }</h2>
      </div>
    );
  }

  goTo = (e) => {
    let id = e.target.dataset.id;
    this.props.history.push(`/detail/${id}`);
  }
}

export default withRouter(ArticleItem);