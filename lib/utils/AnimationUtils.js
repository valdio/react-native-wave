import React from 'react'
import * as AnimationType from '../consts/AnimationType'

export default buildAnimationConfig = (animationTemplate, defaultAnimationType, defaultEasing, decayVelocity) => {

  return (animationTemplate.animationType && animationTemplate.animationType === AnimationType.decay) ||
  (defaultAnimationType === AnimationType.decay) ?
    {velocity: decayVelocity} :
    {
      toValue: animationTemplate.toValue,
      duration: animationTemplate.duration
    }
}

//                easing: easing ? easing : Easing.easeInEaseOut,