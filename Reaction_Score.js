/**
 * @description Reaction Score Calculate
 * @param {Object} data - Post information
 * @returns {string} score
 */
function reactionScore (data) {
  const score = ~~data.like + ~~data.love * 2 +~~data. wow * 3 + ~~data.haha * 4 + ~~data.sorry * 7 + ~~data.anger * 8 + ~~data.support * 16 + ~~data.comment * 13 + ~~data.share * 26
  return (score > 400 ? 'Popular ' : '') + score
}
