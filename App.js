import React, {Component} from 'react'
import {
  Easing,
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native'

import Card from './Example/components/Card'
import {AnimatedHOC, Animate, Composing, AnimationType} from './lib'

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
            .applyAnimation(Animate.opacity, 0, 1, 1000, AnimationType.timing, Easing.circle())
            //   .applyAnimation(Animate.width, 2, 400, 1000)
            .applyAnimation(Animate.padding, 0, 20, 2000, AnimationType.spring,Easing.elastic())
            .applyAnimation(Animate.marginBottom, 0, 60, 2000)
            .type(AnimationType.spring)
            .applyEasing(Easing.bounce())
            // .applyDecayVelocity(0.07)
            .applyComposition(Composing.parallel)
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
