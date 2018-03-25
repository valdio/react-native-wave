import React from 'react'
import buildAnimatedComponent from './AnimatedComponent'
import animationTemplate from './animationTemplate'

const AnimatedHOC = (Component) => {
  this.animation = []
  this.component = <Component test={'test prop'} {...this.props}/>
  return this
}

AnimatedHOC.prototype = new AnimatedHOC()
// AnimatedHOC.prototype.constructor = AnimatedHOC


AnimatedHOC.prototype.applyAnimation = (animation, start, end, duration) => {
  this.animation.push(animationTemplate(animation, start, end, duration))
  return this
}

AnimatedHOC.prototype.animate = () => {
  let Temp = buildAnimatedComponent(this.component, this.animation)

  return <Temp/>
}


const exports = {
  AnimatedHOC
}

module.exports = exports

