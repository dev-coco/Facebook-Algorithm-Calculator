# Facebook-Algorithm-Calculator
Facebook algorithm weight calculator. Facebook 演算法权重计算器。

More articles and online calculators on algorithms.

[Facebook Algorithm 2023 Update](https://dev-coco.github.io/post/Facebook-Algorithm-EN/)

[Facebook 演算法 2023 最新](https://dev-coco.github.io/post/Facebook-Algorithm/)

# Usage
## Reaction Score Calculate
```JavaScript
const data = {
  like: 5,
  love: 3,
  wow: 10,
  haha: 0,
  sorry: 1,
  anger: 5,
  support: 30,
  comment: 120,
  share: 6
}

reactionScore(data)

>> Popular 2284
```

## Time Decay Calculate
```JavaScript
calcPostWeight('2023-5-2 23:00:00')

>> 0.9951037416516715
```

## Post Sentiment Analyze
```JavaScript
// JavaScript library needs to be imported before use:: https://github.com/dev-coco/Analyze-Sentiment/
postType('Today is a beautiful day.')

>> 👍 Positive
```
