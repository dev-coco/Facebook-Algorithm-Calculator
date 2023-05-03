/**
 * @description Post Sentiment Analyze
 * @param {string} text - content
 * @returns {string} type
 */
function postType (text) {
  if (!text) return 'Please Enter content'
  // JavaScript library needs to be imported before use:: https://github.com/dev-coco/Analyze-Sentiment/
  const score = analyzeSentiment(text)
  if (score >= 1) {
    if (score > 3) {
      return '👍👍 Exceptionally positive'
    } else {
      return '👍 Positive'
    }
  } else if (score <= -1) {
    if (score < -3) {
      return '👎👎 Exceptionally negative'
    } else {
      return '👎 Negative'
    }
  } else {
    return 'Didn\'t detect any sentiment'
  }
}
