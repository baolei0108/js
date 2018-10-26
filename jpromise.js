/**
 * jquery版的promise
 * 为了保证兼容性
 * 使用then不使用done
 * 使用fail不使用catch
 * 还可以使用always
 */
var $ = jQuery;

/**
 * jquery版的promise
 * 
 * @param {any} callfun 
 * @returns 
 */
function jpromise(callfun){
  var dtd = $.Deferred();
  callfun(dtd.resolve, dtd.reject);
  return dtd.promise();
}

jpromise.all = function(jpromise_list){
  var plist = [];
  if(!plist instanceof Array){
    throw new Error('不是数组')
  }
  if(jpromise_list.length == 0){
    return new jpromise(function(resolve, reject){
      resolve([])
    })
  }


  return new jpromise(function(resolve, reject){
    $.when.apply(this, jpromise_list)
    .then(function(){
      var back = [];

      if(jpromise_list.length == 1){
        back.push(arguments[0])
      }
      else{
        for (var i = 0; i < arguments.length; i++) {
          back.push(arguments[i][0])
        }        
      }

      resolve(back)
    })
    .fail(function(error){
      reject(error)
    })
  })
}

jpromise.reject = function(error){
  return new jpromise(function(resolve, reject){
    reject(error)
  })
}

jpromise.resolve = function(data){
  return new jpromise(function(resolve, reject){
    resolve(data)
  })
}


module.exports = jpromise