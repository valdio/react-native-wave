import React, {Component} from 'react'
import {
  Easing,
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native'

import Card from './Example/components/Card'
import {AnimatedHOC, Animation, Composing, AnimationType} from './lib'

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.container}>
        {
          AnimatedHOC(Card)
          // .applyAnimation(Animation.opacity, 0, 1, 1000)
          //   .applyAnimation(Animation.width, 2, 400, 1000)
            .applyAnimation(Animation.padding, 0, 50, 2000)
            .type(AnimationType.spring)
            .applyEasing(Easing.elastic())
            .applyDecayVelocity(0.07)
            .animate()
        }
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
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
})
