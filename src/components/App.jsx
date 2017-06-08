import React , {Component} from 'react';
import ReactDOM from 'react-dom';
import  '../style/style.scss';

import Modal from './Modal.jsx';
import LogoOnHeader from './LogoOnHeader.jsx';
import MainImage from './MainImage.jsx';
import FeatureDetails from './FeatureDetails.jsx';
import FiltersPreview from './FiltersPreview.jsx';
import Adj from './Adj.jsx';
import Examples from './Examples.jsx';
import Footer from './Footer.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rotateBtn:'',
      opac_Modal:'',
      show_Modal:''
    };
    this.closeModal = this.closeModal.bind(this);
  }

  closeModal () {
    this.setState({
      rotateBtn:'rotate-btn'
    });

    setTimeout(function(){
      this.setState({
        opac_Modal:'modal-fade'
      });
    }.bind(this),350);

    setTimeout(function(){
      this.setState({
        show_Modal:'modal-close'
      });
    }.bind(this),450);
  }

  render() {
    return(
      <div className='app-root'>
        <Modal
          rotateBtn={this.state.rotateBtn}
          show_Modal={this.state.show_Modal}
          opac_Modal={this.state.opac_Modal}
          closeModal={this.closeModal}
        />
        <LogoOnHeader />
        <MainImage />
        <FeatureDetails />
        <FiltersPreview />
        <Adj />
        <Examples />
        <Footer />
      </div>
    )
  }
}

ReactDOM.render(<App/>,document.getElementById('app'));
