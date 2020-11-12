import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {Component} from 'react'
import "../../containers/Annouces.css";

  
 class Título extends Component {
    
  
    const [videoModalActive, setVideomodalactive] = useState(false);
  
    const openModal = (e) => {
      e.preventDefault();
      setVideomodalactive(true);
    }
  
    const closeModal = (e) => {
      e.preventDefault();
      setVideomodalactive(false);
    }   
  
    const outerClasses = classNames(
      'hero section center-content',
      topOuterDivider && 'has-top-divider',
      bottomOuterDivider && 'has-bottom-divider',
      hasBgColor && 'has-bg-color',
      invertColor && 'invert-color',
      className
    );
  
    const innerClasses = classNames(
      'hero-inner section-inner',
      topDivider && 'has-top-divider',
      bottomDivider && 'has-bottom-divider'
    );
    render(){
      return (
        <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content">
            <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
              <span className="text-color-primary">MUFASA</span><p>a sua calculadora de imposto de renda</p>
            </h1>
            <div className="container-xs">
              <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
                
                </p>
              
                             </div>
            </div>
          </div>
          </div>
      )}}

      export default Título;
