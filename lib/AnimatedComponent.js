import React from 'react'
import {Animated} from 'react-native'
import buildAnimationConfig from './utils/AnimationUtils'

const buildAnimatedComponent = (Component, animations, animationType, composition, decayVelocity, easing) => class AnimatedComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    animations.forEach(animation => this.state[animation.animationProperty] = new Animated.Value(animation.fromValue))
  }

  componentDidMount() {
    //compose animations together
    Animated[composition](
      animations.map(animation =>
        // If no animation type is specified in the applyAnimation() method,
        // the default animation type is applied. The default animation type is Animated.timing
        Animated[animation.animationType ? animation.animationType : animationType]
        (
          this.state[animation.animationProperty], //the property we are trying to animate
          //Building the animation configuration object
          buildAnimationConfig(animation, animationType, easing, decayVelocity)
        )
      )
    ).start() // start the composition group
  }

  render() {
    return <Animated.View style={this.state}>
      {Component}
    </Animated.View>
  }

}


module.exports = {
  buildAnimatedComponent
}