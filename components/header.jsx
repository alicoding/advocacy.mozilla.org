var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var ImageTag = require('./imagetag.jsx');

module.exports = React.createClass({
  render: function() {
    var logoImage = this.props.logoImage || "/assets/logo-advocacy.svg";
    return (
      <div className="header">
        <div className="header-content">
          <div className="nav-home">
            <Link to="/">
              <ImageTag src1x={logoImage}
                alt="advocacy logo"/>
            </Link>
          </div>
          <div className="nav-items">
            <div className="nav-link-container">
              <Link to="/">Home</Link>
            </div>
            <div className="nav-link-container">
              <Link to="/open-web-fellows/">Open Web Fellows</Link>
            </div>
            <div className="nav-link-container">
              <a href="">Blog</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
});
