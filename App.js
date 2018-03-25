import React, {Component} from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native'

import Card from './Example/components/Card'
import {AnimatedHOC, Animation} from './lib/Index'

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
            .applyAnimation(Animation.width, 0, 400, 1000)
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
