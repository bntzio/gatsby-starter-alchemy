import React from 'react';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';

class Article extends React.Component {
  render() {
    const { title, path, description } = this.props.data;

    return (
      <div className="article">
        <div className="article-title">
          <h3><Link to={prefixLink(`${path}`)}>{title}</Link></h3>
        </div>
        <div className="article-description">
          <p>{description}</p>
        </div>
        <div className="article-read">
          <Link to={prefixLink(`${path}`)}>Read</Link>
        </div>
      </div>
    );
  }
}

export default Article;
