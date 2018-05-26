export function sortGlyphs(unsortedGlyphs) {
  // Shallow copy passed in array
  const sortingGlyphs = unsortedGlyphs.slice();
  sortingGlyphs.sort((a, b) => a.id - b.id);
  return sortingGlyphs;
}
