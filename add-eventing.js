// Really struggled witht this question, couldn't figure out a solution 
// Found this one:

onst addEventing = function (obj) {
    let events = {}
  
    obj.on = (eventName, fn) => {
      if (events[eventName]) {
        events[eventName].push(fn)
      } else {
        events[eventName] = [fn]
      }
    }
  
    obj.trigger = (eventName, ...args) => {
      events[eventName].forEach(fn => fn(...args))
    }
  
    return obj
  };


  module.exports = addEventing
