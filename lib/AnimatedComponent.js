import React from 'react'
import {
  Animated
} from 'react-native'

export default buildAnimatedComponent = (Component, animations) => class AnimatedComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      [animations[0].animationProperty]: new Animated.Value(animations[0].fromValue)
    }
  }

  componentDidMount() {
    Animated.timing(
      this.state[animations[0].animationProperty],
      {
        toValue: animations[0].toValue,
        duration: animations[0].duration
      }
    ).start()
  }

  render() {
    return <Animated.View style={{
      [animations[0].animationProperty]: this.state[animations[0].animationProperty]
    }}>
      {Component}
    </Animated.View>
  }
}