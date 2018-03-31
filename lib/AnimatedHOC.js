import React from 'react'
import {View} from 'react-native'
import buildAnimatedComponent from './AnimatedComponent'
import animationTemplate from './animationTemplate'

const AnimatedHOC = (Component) => {
  this.animation = []
  this.animationType = undefined
  this.decayVelocity = 0.1
  this.easing = undefined
  this.composition = undefined
  this.component = Component ? <Component test={'test prop'} {...this.props}/> : undefined
  return this
}

AnimatedHOC.prototype = new AnimatedHOC()
// AnimatedHOC.prototype.constructor = AnimatedHOC


AnimatedHOC.prototype.applyAnimation = (animation, start, end, duration) => {
  this.animation.push(animationTemplate(animation, start, end, duration))
  return this
}

AnimatedHOC.prototype.applyEasing = (easing) => {
  this.easing = easing
  return this
}

AnimatedHOC.prototype.composition = (composition) => {
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

  const AnimatedComponent = buildAnimatedComponent(this.component, this.animation, this.animationType, this.decayVelocity, this.easing)
  return <AnimatedComponent/>
}


const exports = {
  AnimatedHOC
}

module.exports = exports

