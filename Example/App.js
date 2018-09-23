import React, {Component} from 'react'
import {
  StyleSheet,
  View,
  Easing
} from 'react-native'

import Card from './app/components/Card'
import {Wave, Animate, Composing, AnimationType} from 'react-native-wave'

const AnimatedCard = Wave(Card)
// .applyAnimation(Animate.opacity, 0, 1, 1000, AnimationType.timing, Easing.circle())
  .applyAnimation(Animate.rotation, 0, 4, 1000)
  .applyAnimation(Animate.margin, 0, 20, 1500, AnimationType.timing, Easing.bounce())
  .applyAnimationType(AnimationType.spring)
  .applyEasing(Easing.elastic(5))
  // .applyDecayVelocity(0.07)
  // .applyComposition(Composing.parallel)
  .animate()

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        {AnimatedCard}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
})
