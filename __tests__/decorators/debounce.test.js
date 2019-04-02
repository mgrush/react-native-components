import debounce from 'decorators/debounce'

function runTest(expectTimes, threshold) {
  const intervalTimeout = 180
  const originFunc = jest.fn()

  class Person {
    @debounce(threshold)
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

        setTimeout(() => {
          resolve()
        }, 600)
      }
    }, 10)
  }).then(() => {
    expect(originFunc).toBeCalledTimes(expectTimes)
  })
}

test('debounce, originFunc called once in 180ms with defaultThreshold = 500ms', () => {
  return runTest(1)
})

test('debounce, oringinFunc called once in 180ms with threshold = 100ms', () => {
  return runTest(1, 100)
})
