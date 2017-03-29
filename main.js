console.log('main.js loaded')

$(document).ready(function() {
  $ajax('content.html')
  .done(funciton(response) {
    console.log('Success'.response);
  })
})
