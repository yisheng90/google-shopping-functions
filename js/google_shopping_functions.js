var data = require('../products.json');

/*
 * example function called getItemsCount
 * input: accepts full item data
 * output: returns the length of the items array
 */
function getItemsCount(itemData) {
  return itemData.items.length;
}

function getItems(objectData) {
  return objectData.items
}

function getItemsByBrand(items, brand) {
  var results =[]
  brand = brand.toLowerCase()
  for (var i = 0; i < items.length ; i++) {
    if (items[i].product.brand.toLowerCase().includes(brand)) {
      results.push(items[i])
    }
  }
  return results
}

function getItemsByAuthor(items, author) {
  var results =[]
  author = author.toLowerCase()
  for (var i = 0; i < items.length ; i++) {
    if (items[i].product.author.name.toLowerCase().includes(author)) {
      results.push(items[i])
    }
  }
  return results
}

function getAvailableProducts(items) {
  var results =[]
  for (var i = 0; i < items.length ; i++) {
    if (items[i].product.inventories[0].availability === 'inStock') {
      results.push(items[i])
    }
  }
  return results
}
/*
 * Define and use your functions here
 */

// output item count using the getItemsCount function
//console.log('Item Count: ' + getItemsCount(data));

//console.log(getItems(data));

var length = getItemsCount(data)
var items = getItems(data)


function show (arr) {
  /*for (var i = 0; i < arr.length; i++) {
    for (var key in arr[i]) {
     if (arr[i][key] !== null && typeof(arr[i][key]) === 'object') {
        console.log(key ,': ----------------------------------------');
       for (var prop in arr[i][key]) {
          console.log('  ',prop, ':  ',  arr[i][key][prop])
        }
        console.log('----------------------------------------');
      } else if (typeof(arr[i][key][prop]) === 'array'){
          for (var j = 0; j < arr[i][key][prop].length; j++)
            console.log('  ', prop,':  ', arrt[i][key][prop][j]);
      } else {
    console.log( key + ':' + arr[i][key])
  }
    }
  }*/
  showArray(arr)
}

function showObject(obj) {
  for (var key in obj) {
    if (typeof(obj[key]) === 'array') {
      showArray(obj[key])
    } else if (obj[key] !==null && typeof(obj[key])=== 'object'){
      if (key != '0' && key != '1' && key != '2' && key != '3') {
        console.log(key,':' );
      }
        showObject(obj[key])
    } else {
      if (key != '0' && key != '1' && key != '2' && key != '3') {
      console.log( key + ': ' + obj[key])
    } else {
      console.log(obj[key]);
    }

    }
  }
}

function showArray(array) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] !== null && typeof(array[i]) === 'object'){
      console.log('-------------- Result ', i+1,' -------------------');
      showObject(array[i])
    } else {
      console.log(array[i])
    }
  }
}

console.log('-----------5-1-----------');
show(getItemsByBrand(items, 'sony'))

console.log('-----------5-2-----------');
show(getItemsByBrand(getAvailableProducts(items), 'sony') )

console.log('-----------5-3-----------');
show(getItemsByAuthor(items, 'Adorama Camera'))

console.log('-----------5-4-----------');
show(getItemsByAuthor(getItemsByBrand(items, 'nikon'), 'eBay'))

//console.log(getAvailableProducts(getItems(data)));
