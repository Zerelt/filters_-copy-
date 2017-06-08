import React, {Component} from 'react';

export default class Adj extends React.Component {
  render() {
    return (
      <div className='adj'>
        <img src={require('../images/all-icons@2x.png')} />
        <h2>Some adjustments you might expect and others you’ve never seen</h2>
        <p>Filters offers traditional image adjustments like brightness, contrast, exposure,
          saturation, color temperature and more, but also introduces five brand new adjustments:
          <strong> Shine</strong>, <strong> Luna</strong>, <strong> Intimidate</strong>,
          <strong> Color Boost</strong> and <strong> Smart Fade</strong>. These custom multi-effects intelligently
          assess image color data and let you add drama, vibrancy or the perfect retro look to your photograph.
        </p>
      </div>
    );
  }
}
