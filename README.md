# AnimatedHOC
React Native animation library. Early release. 


## Animation API goal:


```
import Card from './Card' //card component
import {AnimatedHOC, Animation} from './lib'


  render() {
    return (
      <View style={styles.container}>
        {
          AnimatedHOC(Card)
           .applyAnimation(Animation.opacity, 0, 1, 1000)
           .animate()
        }
      </View>
    )
  }
```