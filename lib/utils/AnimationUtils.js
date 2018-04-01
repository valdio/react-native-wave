import React from 'react'
import * as AnimationType from '../consts/AnimationType'

/**
 * Method used to build the animation configuration object.
 * @param animationTemplate Applied animation using the applyAnimation() method
 * @param defaultAnimationType Default animation type to apply to the animation config if no type is specified in the applyAnimation() method
 * @param defaultEasing Default easing function to apply to the animation config if no easing is specified in the applyAnimation() method
 * @param decayVelocity Decay velocity in case the animation is of type DECAY.
 *                      The decayVelocity can be set using the applyDecayVelocity() method
 */
export default buildAnimationConfig = (animationTemplate, defaultAnimationType, defaultEasing, decayVelocity) =>
  (animationTemplate.animationType && animationTemplate.animationType === AnimationType.decay) || (defaultAnimationType === AnimationType.decay) ?
    {
      velocity: decayVelocity,
      easing: buildEasingConfig(animationTemplate, defaultEasing)
    } :
    {
      toValue: animationTemplate.toValue,
      duration: animationTemplate.duration,
      easing: buildEasingConfig(animationTemplate, defaultEasing)
    }


/**
 * Method to generate the correct easing function.
 * Easing can be set as a default Easing for all the animations or is specified in the applyAnimation() method,
 * in which case the applied easing comes from the animationTemplate object of this library.
 * Only apply easing if there is any easing to apply.
 * @param animation Internal animation object for the library.
 * @param defaultEasing Default easing applied to app animations
 * @return Returns the correct Easing function or undefined if no Easing is applied
 * either in the animation template or as a default animation.
 */
buildEasingConfig = (animation, defaultEasing) => {
  return animation.easing || defaultEasing ?
    animation.easing ? animation.easing : defaultEasing
    : undefined
}
