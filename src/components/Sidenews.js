import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import '../App.css';

const Sidenews = (props) => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const url = `https://newsapi.org/v2/everything?q=fact&sortBy=publishedAt&apiKey=${props.apiKey}&pageSize=8`;
        const response = await fetch(url);
        const parsedData = await response.json();
        setArticles(parsedData.articles);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchArticles();
  }, []);

  function truncate(str, n) {
    return (str.length > n) ? str.substr(0, n - 1) + '...' : str;
  }

  return (
    <div className='sideNEwsContainer'>
      <div className="container" id="sideContainer">
        <h4 style={{ marginTop: '1em', marginLeft: '1.1em' }}>
          FACT-CHECKING <span className="badge bg-danger">Live</span>
        </h4>
        {isLoading ? (
          <div className="loading">Loading articles...</div>
        ) : error ? (
          <div className="error">{error.message}</div>
        ) : (
          <div className="container">
            {articles.length > 0 ? (
              articles.map((element) => (
                <div key={element.url}>
                  <div className="card-body">
                    <a
                      className="link-dark"
                      style={{ textDecoration: 'none' }}
                      href={element.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <h6 className="card-title sideCardTitle">
                        {truncate(element.title, 70)}
                      </h6>
                    </a>
                    <p className="card-text">
                      <small className="text-muted">{element.source.name}</small>
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <div className="no-results">No articles found.</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
Sidenews.defaultProps = {
    country: 'in',
    category: 'general'
}

Sidenews.propTypes = {
    country: PropTypes.string,
    category: PropTypes.string
}

export default Sidenews;
