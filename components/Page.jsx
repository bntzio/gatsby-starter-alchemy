import React from 'react';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';

class Page extends React.Component {
  render() {
    const { route } = this.props;
    const post = route.page.data;

    return (
      <div>
        <div className="page">
          <div className="page-container">
            <Link to={prefixLink('/')}>
              <div className="logo fixed">
                <div className="logo-outerCircle">
                  <div className="logo-outerCircle-triangle">
                    <div className="logo-outerCircle-triangle-square">
                      <div className="logo-outerCircle-triangle-square-innerCircle" /></div>
                  </div>
                </div>
              </div>
            </Link>

            <div className="page-container-title">
              <h1>{post.title}</h1>
              <div className="page-container-body">
                <div dangerouslySetInnerHTML={{ __html: post.body }} /></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Page;
