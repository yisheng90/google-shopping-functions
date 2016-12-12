var data = require('../products.json')

/*
 * example function called getItemsCount
 * input: accepts full item data
 * output: returns the length of the items array
 */
/*
 *function getItemsCount (itemData) {
 *return itemData.items.length
 *}
 */

/*
 * Define and use your functions here
 */

function getItems (objectData) {
  return objectData.items
}

function getItemsByBrand (items, brand) {
  var results = []
  brand = brand.toLowerCase()
  for (var i = 0; i < items.length; i++) {
    if (items[i].product.brand.toLowerCase().includes(brand)) {
      results.push(items[i])
    }
  }
  return results
}

function getItemsByAuthor (items, author) {
  var results = []
  author = author.toLowerCase()
  for (var i = 0; i < items.length; i++) {
    if (items[i].product.author.name.toLowerCase().includes(author)) {
      results.push(items[i])
    }
  }
  return results
}

function getAvailableProducts (items) {
  var results = []
  for (var i = 0; i < items.length; i++) {
    if (items[i].product.inventories[0].availability === 'inStock') {
      results.push(items[i])
    }
  }
  return results
}

// output item count using the getItemsCount function
// console.log('Item Count: ' + getItemsCount(data));

// console.log(getItems(data));

var items = getItems(data)

function showObject (obj) {
  for (var key in obj) {
    if (Array.isArray(obj[key])) {
      if (obj[key].length === 1 && typeof (obj[key][0]) === 'string') {
        console.log(key.toUpperCase(), '  :  ', obj[key][0])
      } else {
        console.log(key.toUpperCase(), ' :')
        show(obj[key])
      }
    } else if (obj[key] !== null && typeof (obj[key]) === 'object') {
      showObject(obj[key])
    } else {
      console.log(key.toUpperCase() + '  :  ' + obj[key])
    }
  }
}

function show (array) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] !== null && typeof (array[i]) === 'object') {
      if (Object.keys(array[i])[0] === 'kind') {
        console.log('')
        console.log('-------------- Result', i + 1, '-------------------')
      }
      showObject(array[i])
    }
  }
}

console.log('-------------------5-1------------------')
show(getItemsByBrand(items, 'sony'))

console.log('-------------------5-2------------------')
show(getItemsByBrand(getAvailableProducts(items), 'sony'))

console.log('-------------------5-3------------------')
show(getItemsByAuthor(items, 'Adorama Camera'))

console.log('-------------------5-4------------------')
show(getItemsByAuthor(getItemsByBrand(items, 'nikon'), 'eBay'))
