import React, {Component} from 'react';

export default class FeatureDetails extends React.Component {
  render() {
    return (
      <div className='feature-details'>
        <h2> Filters has common sense features that aren’t so commonplace </h2>
        <div className='ul-container'>
            <ul className='ul-left'>
              <li>Zoom in on the photo while you're editing</li>
              <li>Tap photo to compare edits with original photo</li>
              <li>No need to import into a special in-app library</li>
              <li>Simple, distraction-free user interface</li>
            </ul>
            <ul className='ul-right'>
              <li>Live-updating, large filter previews</li>
              <li>No gimmicky, silly or unusable photo effects</li>
              <li>Apply an unlimited number of filters & effects</li>
              <li>Save your favorite filters for quick access</li>
            </ul>
          </div>
      </div>
    );
  }
}
