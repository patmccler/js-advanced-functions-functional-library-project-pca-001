const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      for(let key in collection) {
        callback(collection[key], key, collection)
      }
      return collection
    },

    map: function(collection, callback) {
      let result = []
      for(let key in collection) {
        result.push(callback(collection[key], key, collection))
      }
      return result
    },

    reduce: function(collection, callback, acc) {
      // set initial result
      let result = (acc ? acc : collection[0])
      // make copy
      let coll = Object.assign({}, collection)
      // delete first from copy if no start
      acc ? "" : delete coll[0]

      for(let key in coll) {
        result = (callback(result, coll[key], coll))
      }
      return result
    },

    find: function(collection, predicate) {
      for(let key in collection) {
        if (predicate(collection[key], key, collection))
        {
          return collection[key]
        }
      }
    },

    filter: function(collection, predicate) {
      let include = []
      for(let key in collection) {
        if (predicate(collection[key], key, collection))
        {
          include.push(collection[key])
        }
      }
      return include
    },

    size: function(collection) {
      return Object.keys(collection).length
    },

    first: function(collection, n = 1) {
      if (n !== 1) {
        return Object.values(collection).slice(0,n)
      } else {
        return Object.values(collection)[0]
      }
    },

    last: function(collection, n = 1) {
      let values = Object.values(collection)
      let count = values.length
      if (n !== 1) {
        return values.slice(count - n)
      } else {
        return values[count - 1]
      }
    },

    compact: function(collection) {
      let include = []
      for(let key in collection) {
        if (collection[key])
        {
          include.push(collection[key])
        }
      }
      return include
    },

    sortBy: function(collection, callback) {
      return Object.assign([],collection).sort((a,b) => callback(a) - callback(b))
    },

    flatten: function(collection, justOnce = false) {
      let flatterArray = []
      let noArray = true
      for(let elem of collection) {
        if (Array.isArray(elem))
        {
          noArray = false
          flatterArray.push(...elem)
        } else {
          flatterArray.push(elem)
        }
      }

      return (justOnce || noArray) ? flatterArray : this.flatten(flatterArray)
    },

    uniq: function(collection, isSorted = false, callback = (e => e)) {
      let uniqArray = []
      let last = null
      for(let elem of collection) {
        if(!(isSorted && elem === last)) {
          if(!uniqArray.find(e => e.elemValue === callback(elem))){
            uniqArray.push({elem, elemValue: callback(elem)})
            last = elem
          }
        }
      }
      return uniqArray.map(e => e.elem)
    },

    keys: function(collection) {
      let result = []
      for(let key in collection) {
        result.push(key)
      }
      return result
    },

    values: function(collection) {
      let result = []
      for(let key in collection) {
        result.push(collection[key])
      }
      return result
    },

    functions: function(collection) {
      let result = []
      for(let key in collection) {
        if(typeof collection[key] === 'function') { result.push(collection[key]) }
      }
      return result.sort().reverse()
    }

  }
})()

fi.libraryMethod()
