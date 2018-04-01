import React from 'react'
import {
  Animated,
  Easing
} from 'react-native'
import * as Composing from './consts/Composing'
import * as AnimationType from './consts/AnimationType'
import buildAnimationConfig from './utils/AnimationUtils'

export default buildAnimatedComponent = (Component, animations, animationType, composition, decayVelocity, easing) => class AnimatedComponent extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
    animations.forEach(animation => this.state[animation.animationProperty] = new Animated.Value(animation.fromValue))
  }


  componentDidMount() {

    // Animated[animationType ? animationType : AnimationType.timing]
    // (
    //   this.state[animations[0].animationProperty],
    //   animationType !== AnimationType.decay ? {
    //     easing: easing ? easing : Easing.easeInEaseOut,
    //     toValue: animations[0].toValue,
    //     duration: animations[0].duration
    //   } : {velocity: decayVelocity}
    // ).start()
    /***************************************************************************/
    /***************************************************************************/
    /***************************************************************************/

    // let animationComposition = animations.map(animation =>
    //   // If no animation type is specified in the applyAnimation() method,
    //   // the default animation type is applied. The default animation type is Animated.timing
    //   Animated[animation.animationType ? animation.animationType : animationType]
    //   (
    //     this.state[animation.animationProperty], //the property we are trying to animate
    //     //Building the animation configuration object
    //     {
    //       // easing: easing ? easing : Easing.easeInEaseOut,
    //       toValue: animation.toValue,
    //       duration: animation.duration
    //     }
    //     // buildAnimationConfig(animation, animationType, easing, decayVelocity)
    //   )
    // )
    // console.log(animationComposition)

    /***************************************************************************/
    /***************************************************************************/
    /***************************************************************************/
    /***************************************************************************/

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

    return <Animated.View style={this.state}>
      {Component}
    </Animated.View>
  }


}


/**
 *
 * // ANIMATED DECAY template
 * // Animated.decay
 * // (
 * //   this.state[animations[0].animationProperty],
 * //   {velocity: 0.2}
 * // ).start()
 *
 */


/**
 *
 * Animation template
 *

 Animated[animationType ? animationType : AnimationType.timing]
 (
 this.state[animations[0].animationProperty],
 animationType !== AnimationType.decay ? {
              easing: easing ? easing : Easing.easeInEaseOut,
              toValue: animations[0].toValue,
              duration: animations[0].duration
            } : {velocity: decayVelocity}
 ).start()

 */