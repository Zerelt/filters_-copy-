import React, {Component} from 'react';

export default class Modal extends React.Component {
  render() {
    return(
      <div className={'modal '+this.props.show_Modal+' '+this.props.opac_Modal} >
        <div className='modal-message'>
          <div className={'close-Btn '+this.props.rotateBtn} onClick={this.props.closeModal}>
            <span></span>
            <span></span>
          </div>
          <h2>Attention !</h2>
          <br/>
          <p>{'\u00A0'}{'\u00A0'}{'\u00A0'}This is a fully responsive, non-comerical,
            1-to-1 copy of the <u>Filters for Iphone app landing page</u>.
            I made this copy to practice my general knowledge of modern day
            web development tools like react, es6, sass, webpack2 and above all to make sure
            I learned webpack2 configuration correctly.
          </p>
          <br/>
          <p>In case you got here by chance and haven't gone through my website: Hi, My name is Alex ! Feel free
            to have a look at <a href='https://alexander.netlify.com' target='_blank'>my projects</a> and maybe say Hi :) .</p>
          <br/>
          <p>{'\u00A0'}{'\u00A0'}{'\u00A0'}All the links go to the real Application in the Apple App Store and social media
            points to the social media of the author of the original site</p>
          <br/>
        <p>To visit the original site please <a href='http://flyosity.com/filters/' target='_blank'>click here</a> .</p>
        </div>
      </div>
    );
  }
}
