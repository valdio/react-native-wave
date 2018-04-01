# AnimatedHOC
React Native animation library. Early release. 


## Animation API goal:

Example usage of the library:

```
import Card from './Card' //card component
import {AnimatedHOC, Animation} from './lib'


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
```


![Demo](https://github.com/valdio/AnimatedHOC/blob/master/images/anim.gif)
