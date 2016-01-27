var React = require('react');
var Footer = require('../../components/footer.jsx');
var Header = require('../../components/header.jsx');
var HeroUnit = require('../../components/hero-unit.jsx');
var Video = require('../../components/video.jsx');

module.exports = React.createClass({
  render: function() {
    return (
      <div className="encrypt">
        <Header disabledMenu={true} height="30" width="105" logoImage={'/assets/mozilla-wordmark.svg'}></Header>
        <HeroUnit>
          <div className="encryptText">
            <h1>hehe</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </HeroUnit>
        <Video/>
        <div className="encryptMeta">
          <h2>
            Why does encryption matter?
          </h2>
          <span className="videoMeta">FEBUARY 05, 2016  |  EPISODE 1  | 0:53</span>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <Footer/>
      </div>
    );
  }
});
