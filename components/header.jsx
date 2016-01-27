var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var ImageTag = require('./imagetag.jsx');

var Menu = React.createClass({
  render: function() {
    return (
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
    );
  }
});

module.exports = React.createClass({
  render: function() {
    var logoImage = this.props.logoImage || "/assets/logo-advocacy.svg";
    var menu = (<Menu/>);
    if (this.props.disabledMenu) {
      menu = '';
    }
    return (
      <div className="header">
        <div className="header-content">
          <div className="nav-home">
            <Link to="/">
              <ImageTag width={this.props.width} height={this.props.height} src1x={logoImage}
                alt="advocacy logo"/>
            </Link>
          </div>
          {menu}
        </div>
      </div>
    );
  }
});
