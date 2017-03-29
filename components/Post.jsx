import React from 'react';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';

class Post extends React.Component {
  componentWillMount() {
    if (typeof window !== 'undefined') {
      const body = document.getElementsByTagName('body');
      const css = body[0].style;
      css.color = '#333';
      css.backgroundColor = '#fff';
    }
  }
  componentWillUnmount() {
    if (typeof window !== 'undefined') {
      const body = document.getElementsByTagName('body');
      const css = body[0].style;
      css.color = '#fff';
      css.backgroundColor = '#2b4496';
    }
  }
  render() {
    const { route } = this.props;
    const post = route.page.data;

    return (
      <div>
        <div className="post">
          <div className="post-container">
            <Link to={prefixLink('/articles/')}>
              <div className="logo fixed">
                <div className="logo-outerCircle">
                  <div className="logo-outerCircle-triangle">
                    <div className="logo-outerCircle-triangle-square">
                      <div className="logo-outerCircle-triangle-square-innerCircle" /></div>
                  </div>
                </div>
              </div>
            </Link>

            <div className="post-container-title">
              <h1>{post.title}</h1>
              <div className="post-container-body">
                <div dangerouslySetInnerHTML={{ __html: post.body }} /></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Post;
