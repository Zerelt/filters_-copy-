import React, {Component} from 'react';

export default class Footer extends React.Component {
  render() {
    return (
      <div className='footer'>
        <a href='https://itunes.apple.com/us/app/filters-for-iphone/id972426013?ls=1&mt=8'>
          <img src={require('../images/download@2x.png')} />
        </a>
        <p>Filters for iPhone was designed & built by Mike Rundle.{'\u00A0'}
          <a href='http://twitter.com/flyosity'>Follow him on Twitter.</a>
        </p>
      </div>
    );
  }
}
