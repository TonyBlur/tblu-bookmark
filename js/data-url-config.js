(async () => {
  const defaultBookmarkDataURL = 'json/pintree.json';
  let finalBookmarkDataURL = defaultBookmarkDataURL;

  try {
    const response = await fetch('js/env-data.js');
    const envData = await response.text();
    eval(envData);
    
    if (window.env && window.env.BOOKMARK_DATA_URL) {
      console.log('use BOOKMARK_DATA_URL:', window.env.BOOKMARK_DATA_URL);
      finalBookmarkDataURL = window.env.BOOKMARK_DATA_URL;
    } else {
      console.log('use default BookmarkDataURL');
    }
  } catch (error) {
    console.log('Error loading env-data.js, using default BookmarkDataURL');
  }

  const bookmarkDataURL = finalBookmarkDataURL;
  window.bookmarkDataURL = bookmarkDataURL;
})();