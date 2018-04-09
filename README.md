# Wave
React Native animation library.

## Getting started

 ```
 npm i react-native-wave --save
 ```

## Usage

Example usage of the library:

```

import React, {Component} from 'react'
import {
  StyleSheet,
  View,
  Easing
} from 'react-native'
import Card from './app/components/Card'
import {Wave, Animate, Composing, AnimationType} from '../lib'

const AnimatedCard = Wave(Card)
  .applyAnimation(Animate.opacity, 0, 1, 1000, AnimationType.timing, Easing.circle())
  .applyAnimation(Animate.marginBottom, 0, 60, 2000)
  .applyAnimation(Animate.padding, 0, 40, 2000)
  .applyAnimationType(AnimationType.spring)
  .applyEasing(Easing.bounce())
  .applyDecayVelocity(0.07)
  .applyComposition(Composing.parallel)
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

```


![Demo](https://github.com/valdio/Wave/blob/master/images/anim.gif)
