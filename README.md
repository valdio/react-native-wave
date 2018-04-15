# 🌊 Wave 🌊
React Native animation library.



## Getting started

 ```
 npm i react-native-wave --save
 ```
 
 
 ## Full documentation
 For the full documentation and detailed examples read the [react-native-wave wiki](https://github.com/valdio/react-native-wave/wiki)

## Usage

Simple example of a fade in animation:

```
import React, {Component} from 'react'
import {
  View,
  Easing
} from 'react-native'
import Card from './app/components/Card'
import {Wave, Animate} from 'react-native-wave'

const AnimatedCard = Wave(Card)
  .applyAnimation(Animate.opacity, 0, 1, 1000)
  .animate()

export default class App extends Component {
  render() {
    return (
      <View>
        {AnimatedCard}
      </View>
    )
  }
}
