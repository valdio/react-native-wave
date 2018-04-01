import React from 'react'
import {Animated, View} from 'react-native'
import buildAnimatedComponent from './AnimatedComponent'
import animationTemplate from './animationTemplate'
import * as AnimationType from './consts/AnimationType'
import * as Composing from './consts/Composing'

const AnimatedHOC = (Component) => {
  this.animation = []
  this.animationType = AnimationType.timing //default set to Animated.timing
  this.composition = Composing.sequence //default set to Animated.sequence
  this.decayVelocity = 0.1
  this.easing = undefined
  this.component = Component ? <Component test={'test prop'} {...this.props}/> : undefined
  return this
}

AnimatedHOC.prototype = new AnimatedHOC()
// AnimatedHOC.prototype.constructor = AnimatedHOC


AnimatedHOC.prototype.applyAnimation = (animation, start, end, duration, animationType) => {
  this.animation.push(animationTemplate(animation, start, end, duration, animationType))
  return this
}

AnimatedHOC.prototype.applyEasing = (easing) => {
  this.easing = easing
  return this
}

AnimatedHOC.prototype.applyComposition = (composition) => {
  this.composition = composition
  return this
}

AnimatedHOC.prototype.type = (type) => {
  this.animationType = type
  return this
}


AnimatedHOC.prototype.applyDecayVelocity = (decayVelocity) => {
  this.decayVelocity = decayVelocity
  return this
}


AnimatedHOC.prototype.animate = () => {
  if (!this.component)
    return <View/>
  if (!this.animation || this.animation.length === 0)
    return this.component

  const AnimatedComponent = buildAnimatedComponent(this.component, this.animation, this.animationType, this.composition, this.decayVelocity, this.easing)
  return <AnimatedComponent/>
}


const exports = {
  AnimatedHOC
}

module.exports = exports

