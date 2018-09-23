# 🌊 Wave 🌊
React Native animation library.



## Getting started

 ```
 npm i react-native-wave --save
 ```
 
 
 ## Full documentation
 For the full documentation and detailed examples read the [react-native-wave wiki](https://github.com/valdio/react-native-wave/wiki)

## Animation examples
|![Screenshot](https://github.com/valdio/react-native-wave/blob/master/images/fade-in.gif)|![Screenshot](https://github.com/valdio/react-native-wave/blob/master/images/bounce.gif)|
| ------------- | ------------- |
|![Screenshot](https://github.com/valdio/react-native-wave/blob/master/images/fadein-bounce.gif)|![Screenshot](https://github.com/valdio/react-native-wave/blob/master/images/bounce-rotate.gif)|



## Usage

An example including the suported methods. Check the docs to learn more on how to build your animations.

```
import React, {Component} from 'react'
import {
  View,
  Easing
} from 'react-native'
import Card from './app/components/Card'
import {Wave, Animate} from 'react-native-wave'

const AnimatedCard = Wave(Card)
  .applyAnimation(Animate.marginBottom, 0, 60, 500, AnimationType.timing, Easing.elastic(5))
  .applyAnimation(Animate.opacity, 0, 1, 500, AnimationType.spring)
  .applyAnimationType(AnimationType.spring)
  .applyEasing(Easing.bounce())
  .applyDecayVelocity(0.07)
  .applyComposition(Composing.parallel)
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
```

### License

```

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

```
