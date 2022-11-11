import React from 'react';
import ArcProgress from 'react-arc-progress';

import Style from './style.module.scss';

const Uploading = ({ percent }) => {
  const progress = percent / 100;

  return (
    <div className={Style.container}>
      <span className={Style.percent}>{Math.floor(percent)}%</span>

      <ArcProgress
        className={Style.arcProgress}
        size={40}
        progress={progress}
        thickness={3}
        arcStart={-90}
        arcEnd={270}
        fillColor="#0096FF"
        // observer={(current) => {
        //   const { percentage, currentText } = current;
        //   console.log('observer:', percentage, currentText);
        // }}
        // animationEnd={({ progress, text }) => {
        //   console.log('animationEnd', progress, text);
        // }}
      />
    </div>
  );
};

export default Uploading;
