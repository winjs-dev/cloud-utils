/**
 * 深层映射对象键
 *
 * @param obj
 * @param fn
 * @returns {{}}
 * @example
 *
 * const obj = {
  foo: '1',
  nested: {
    child: {
      withArray: [
        {
          grandChild: ['hello']
        }
      ]
    }
  }
};

 const upperKeysObj = deepMapKeys(obj, key => key.toUpperCase());

 // =>
 {
  "FOO":"1",
  "NESTED":{
    "CHILD":{
      "WITHARRAY":[
        {
          "GRANDCHILD":[ 'hello' ]
        }
      ]
    }
  }
}
 */
function deepMapKeys(obj, fn) {
  return Array.isArray(obj)
    ? obj.map((val) => deepMapKeys(val, fn))
    : typeof obj === 'object'
      ? Object.keys(obj).reduce((acc, current) => {
        const val = obj[current];
        acc[fn(current)] =
          val !== null && typeof val === 'object' ? deepMapKeys(val, fn) : (acc[fn(current)] = val);
        return acc;
      }, {})
      : obj;
}

export default deepMapKeys;
