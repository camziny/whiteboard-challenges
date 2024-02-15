function designerPdfViewer(h, word) {
  let maxHeight = 0;

  for (let i = 0; i < word.length; i++) {
    let height = h[word.charCodeAt(i) - 97];
    if (height > maxHeight) {
      maxHeight = height;
    }
  }
  return maxHeight * word.length;
}
