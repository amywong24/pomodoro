import React from 'react';
import './animation.css'

const CircleAnimation = () => {
  return (
    <div class="flex">
        <div class="m-progress-loader">
            <div class="m-progress-loader--fill"></div>
            <div class="m-progress-loader--mask"></div>
        </div>
     </div>
  )
};

export default CircleAnimation;