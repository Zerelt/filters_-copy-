import React, {Component} from 'react';

export default class LogoOnHeader extends React.Component {
  render() {
    return (
      <div className='logo-on-header'>
        <h1>
          <strong>Filters</strong> for iPhone
        </h1>
        <a href='https://itunes.apple.com/us/app/filters-for-iphone/id972426013?ls=1&mt=8'>
          <img src={require('../images/download@2x.png')} />
        </a>
      </div>
    );
  }
}
