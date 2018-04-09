import React from 'react'
import {View} from 'react-native'
import {buildAnimatedComponent} from './AnimatedComponent'
import animationTemplate from './animationTemplate'
import * as AnimationType from './consts/AnimationType'
import * as Composing from './consts/Composing'

const Wave = (Component) => {
  this.animation = []
  this.animationType = AnimationType.timing //default set to Animated.timing
  this.composition = Composing.sequence //default set to Animated.sequence
  this.decayVelocity = 0.1
  this.easing = undefined
  this.componentRef = undefined
  this.component = Component ? <Component {...this.props}/> : undefined
  return this
}

Wave.prototype = new Wave()

Wave.prototype.applyAnimation = (animation, start, end, duration, animationType, easing) => {
  this.animation.push(animationTemplate(animation, start, end, duration, animationType, easing))
  return this
}

Wave.prototype.applyEasing = (easing) => {
  this.easing = easing
  return this
}

Wave.prototype.applyComposition = (composition) => {
  this.composition = composition
  return this
}

Wave.prototype.applyAnimationType = (type) => {
  this.animationType = type
  return this
}

Wave.prototype.applyDecayVelocity = (decayVelocity) => {
  this.decayVelocity = decayVelocity
  return this
}

Wave.prototype.setRef = (componentRef) => {
  this.componentRef = componentRef
  return this
}


Wave.prototype.animate = () => {
  if (!this.component)
    return <View/>
  if (!this.animation || this.animation.length === 0)
    return this.component

  const AnimatedComponent = buildAnimatedComponent(this.component, this.animation, this.animationType, this.composition, this.decayVelocity, this.easing)
  return <AnimatedComponent/>
}

module.exports = {
  Wave
}

