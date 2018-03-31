import React from 'react'
import {Animated} from 'react-native'

/**
 * Method to build an internal animation object for the library.
 * @property The property we are trying to animate. E.g. 'opacity', 'width'. REQUIRED
 * @start Starting value of the animation. Default value 0.
 * @end Ending value of the animation. Default value 1.
 * @duration Duration of the animation. Default animation duration 400ms.
 * @method Animation method. Animated.timing || Animated.decay || Animated.spring. Default Animated.timing.
 * @returns {*} Animation template object used by the library.
 */
export default animationTemplate = (property, start, end, duration, method) => ({
  animationProperty: property,
  fromValue: start || 0,
  toValue: end || 1,
  duration: duration || 400,
  animationMethod: method || Animated.timing
})