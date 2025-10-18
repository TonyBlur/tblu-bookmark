// ES5 compatible version
(function () {
  'use strict';

  // Set default immediately so it's available
  var defaultBookmarkDataURL = 'json/pintree.json';
  window.bookmarkDataURL = defaultBookmarkDataURL;

  // Try to load env-data.js
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'js/env-data.js', true);

  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      var finalBookmarkDataURL = defaultBookmarkDataURL;
      
      if (xhr.status === 200) {
        try {
          eval(xhr.responseText);
          if (window.env && window.env.BOOKMARK_DATA_URL) {
            console.log('use BOOKMARK_DATA_URL:', window.env.BOOKMARK_DATA_URL);
            finalBookmarkDataURL = window.env.BOOKMARK_DATA_URL;
          } else {
            console.log('use default BookmarkDataURL');
          }
        } catch (e) {
          console.error('Failed to eval env-data.js:', e);
        }
      } else {
        console.log('Error loading env-data.js, using default BookmarkDataURL');
      }

      // Always update URL and notify listeners
      window.bookmarkDataURL = finalBookmarkDataURL;

      // Create and dispatch event in a backwards compatible way
      try {
        if (typeof CustomEvent === 'function') {
          var event = new CustomEvent('bookmarkDataURLReady', {
            detail: { url: finalBookmarkDataURL }
          });
          document.dispatchEvent(event);
        } else {
          var legacyEvent = document.createEvent('CustomEvent');
          legacyEvent.initCustomEvent('bookmarkDataURLReady', true, true, {
            url: finalBookmarkDataURL
          });
          document.dispatchEvent(legacyEvent);
        }
      } catch (e) {
        // Ignore event dispatch errors
      }
    }
  };

  xhr.send();
})();