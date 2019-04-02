// 限制在特定的时间段内执行一次对应的方法
const defaultThreshold = 500

export default (threshold) => (target, name, descriptor) => {
  let timer = null
  let func = descriptor.value

  return {
    ...descriptor,
    value: function(){
      if(timer) {
        return
      }

      func.apply(this, arguments)

      timer = setTimeout(() => {
        clearTimeout(timer)
        timer = null
      }, threshold || defaultThreshold)
    }
  }
}
