import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Styles
import 'styles/pages/NotFound.scss';

class NotFoundPage extends Component {
  render() {
    return (
      <div className="page not-found">
        <div className="not-found__content">
          <div className="container">
            <h1>404</h1>
            <h2>Page Not Found</h2>
            <p>Sorry, the page you are looking for could not be found. You can <a href="javascript: history.back()">go back</a> or head to <Link to={process.env.PUBLIC_URL + '/'}>homepage</Link>.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default NotFoundPage;
