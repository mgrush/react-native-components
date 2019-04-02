// 防抖动
const defaultThreshold = 500

export default (threshold) => (target, name, descriptor) => {
  var timer = null
  var func = descriptor.value

  return {
    ...descriptor,
    value: function(){
      if(timer) {
        clearTimeout(timer)
      }

      timer = setTimeout(() => {
        timer = null

        func.apply(this, arguments)
      }, threshold || defaultThreshold)
    }
  }
}
