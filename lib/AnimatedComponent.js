import React from 'react'
import {
  Animated,
  Easing
} from 'react-native'
import * as Composing from './consts/Composing'
import * as AnimationType from './consts/AnimationType'


export default buildAnimatedComponent = (Component, animations, animationType, decayVelocity, easing) => class AnimatedComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      [animations[0].animationProperty]: new Animated.Value(animations[0].fromValue)
    }

  }

  componentDidMount() {

    Animated[animationType ? animationType : AnimationType.timing]
    (
      this.state[animations[0].animationProperty],
      animationType !== AnimationType.decay ? {
        easing: easing ? easing : Easing.easeInEaseOut,
        toValue: animations[0].toValue,
        duration: animations[0].duration
      } : {velocity: decayVelocity}
    ).start()

    //decay template
    // Animated.decay
    // (
    //   this.state[animations[0].animationProperty],
    //   {velocity: 0.2}
    // ).start()


    // //compose animations together
    // Animated[composition ? composition : Composing.sequence]([])
    //   .start() // start the composition group
  }

  /**
   *

   Animated.sequence([
   // decay, then spring to start and twirl
   Animated.decay(position, {
    // coast to a stop
    velocity: {x: gestureState.vx, y: gestureState.vy}, // velocity from gesture release
    deceleration: 0.997,
  }),
   Animated.parallel([
   // after decay, in parallel:
   Animated.spring(position, {
      toValue: {x: 0, y: 0}, // return to start
    }),
   Animated.timing(twirl, {
      // and twirl
      toValue: 360,
    }),
   ]),
   ]).start(); // start the sequence group

   */


  render() {
    return <Animated.View style={{
      [animations[0].animationProperty]: this.state[animations[0].animationProperty]
    }}>
      {Component}
    </Animated.View>
  }
}