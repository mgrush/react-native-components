import throttle from 'decorators/throttle'

function runTest(expectTimes, threshold) {
  const intervalTimeout = 180
  const originFunc = jest.fn()

  class Person {
    @throttle(threshold)
    greeting(){
      return originFunc()     
    }
  }

  var person = new Person()
  var startTime = new Date().getTime()

  return new Promise(function(resolve){
    var interval = setInterval(() => {
      person.greeting()

      if((new Date().getTime() - startTime) >= intervalTimeout) {
        clearInterval(interval)
        resolve()
      }
    }, 10)
  }).then(() => {
    expect(originFunc).toBeCalledTimes(expectTimes)
  })
}

test('throttle, originFunc called once in 180ms with defaultThreshold = 500ms', () => {
  return runTest(1) 
})

test('throttle, oringinFunc called twice in 180ms with threshold = 100ms', () => {
  return runTest(2, 100)
})
