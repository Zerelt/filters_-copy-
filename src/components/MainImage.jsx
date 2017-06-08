import React, {Component} from 'react';

export default class MainImage extends React.Component {
  render() {
    return (
      <div className='main-image'>
        <div className='feature'><big>800<sup>+</sup></big> <br/> <span>Filters, textures, vintage film recreations and visual effects</span></div>
        <div className='pricing'><big>99<sup>¢</sup></big> <span>Everything is included. No in-app purchases. No gimmicks.</span></div>
        <img src={require('../images/tilted@2x.png')} />
        <span className='img-credits'>iPhone render by the excellent folks at <a href='http://ramotion.com'>Ramotion</a></span>
      </div>
    );
  }
}
