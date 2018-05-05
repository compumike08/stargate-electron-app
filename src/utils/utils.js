export function sortGlyphs(unsortedGlyphs) {
  // Shallow copy passed in array
  const sortingGlyphs = unsortedGlyphs.slice();
  sortingGlyphs.sort((a, b) => a.id - b.id);
  return sortingGlyphs;
}

export function sortChevrons(unsortedChevrons) {
  // Shallow copy passed in array
  const sortingChevrons = unsortedChevrons.slice();
  sortingChevrons.sort((a, b) => a.num - b.num);
  return sortingChevrons;
}
