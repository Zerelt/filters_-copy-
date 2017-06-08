import React, {Component} from 'react';

export default class FiltersPreview extends React.Component {
  render() {
    return (
      <div className='filters-preview'>
        <div className='filters-preview-inner'>
          <div className='preview'>
            <img src={require('../images/phone-intensity@2x.png')} />
            <p>Adjust the intensity of the filter, textured overlay or effect. Save your favorite filters for later.</p>
          </div>
          <div className='preview'>
            <img src={require('../images/phone-menu@2x.png')} />
            <p>All filters, photo overlays and effects are accessible from a simple pop-up menu interface.</p>
          </div>
          <div className='preview'>
            <img src={require('../images/phone-previews@2x.png')} />
            <p>Scroll through vivid previews of your photo to choose your favorite look.</p>
          </div>

          <div className='preview'>
            <img src={require('../images/phone-textures@2x.png')} />
            <p>Choose from over 150 vintage film grains and hand-painted texture overlays to add extra drama.</p>
          </div>
          <div className='preview'>
            <img src={require('../images/phone-vibrant@2x.png')} />
            <p>A vibrant, blurred version of your photo provides a backdrop to the interface.</p>
          </div>
          <div className='preview'>
            <img src={require('../images/phone-colored@2x.png')} />
            <p>Professionally-designed colored gel overlays can be applied using one of four blend modes.</p>
          </div>
        </div>
      </div>
    );
  }
}
