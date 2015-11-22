$(function(){

  var links = {
    home: 'index.html',
    stories: 'stories.html',
    bookmarks: 'bookmarks.html',
    facebook: 'http://facebook.com',
    twitter: 'http://twitter.com',
  }

  $('.search').on('key-Down', function(event){
    if ( event.which == 13 ) {
      console.log('enter was pressed');
      event.preventDefault();
    }
  });


});
