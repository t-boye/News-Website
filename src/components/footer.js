import React from 'react';

const Footer = () => {
  const youtubeLink = 'https://www.youtube.com/your-channel-link'; // Replace with your actual Youtube channel link

  return (
    <footer className="footer fixed-bottom text-center py-1 bg-light">
      <div className="container">
        <p className="text-muted d-flex align-items-center justify-content-center">
          @updated news &nbsp; | &nbsp;
          <a href={'https://www.youtube.com/channel/UCxSycjg23yyHZsuHjVYuBeg'} target="_blank" rel="noreferrer" className="text-decoration-none">
            <i className="fab fa-youtube me-2"></i>
            YouTube Channel
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
