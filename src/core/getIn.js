/**
 * 主动防御
 * 对于我们操作的数据，尤其是由 API 接口返回的，时常会有一个很复杂的深层嵌套的数据结构。为了代码的健壮性，很多时候需要对每一层访问都作空值判断，就像这样：
 props.user &&
 props.user.posts &&
 props.user.posts[0] &&
 props.user.posts[0].comments &&
 props.user.posts[0].comments[0]
 代码看起来相当不美观，因此提供了一个非常简洁明了的原生的方式。
 *
 * @param p 属性列表
 * @param o 对象
 * @returns {*} 如果正常访问到，则返回对应的值，否则返回 null。
 * @example
 *
 * var props = {
 *  user: {
 *    post: [{
 *      comments: 'test'
 *    }]
 *  }
 * };
 * getIn(['user', 'post', 0, 'comments'], props);
 * // => test
 */
function getIn(p, o) {
  return p.reduce(function(xs, x) {
    return (xs && xs[x]) ? xs[x] : null;
  }, o);
}

export default getIn;
