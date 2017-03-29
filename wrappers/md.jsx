import React from 'react';
import Helmet from 'react-helmet';

import Post from '../components/Post';
import Page from '../components/Page';
import ArticlesList from '../components/ArticlesList';

import { config } from 'config';
import '../styles/markdown-styles.css';

class MarkdownWrapper extends React.Component {
  render() {
    const { route } = this.props;
    const post = route.page.data;
    const layout = post.layout;
    let template;

    if (layout === 'post') {
      template = <Post {...this.props} />;
    } else if (layout === 'page') {
      template = <Page {...this.props} />;
    } else {
      template = <ArticlesList {...this.props} />;
    }

    return (
     <div>
       <Helmet title={`${config.siteTitle} - ${post.title}`} />
       {template}
     </div>
   );
  }
}

export default MarkdownWrapper;
