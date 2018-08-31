function toCountIfRickHaveAFamily(rick) {
  if ("family" in rick) {
    if (rick.family.length > 0) return true;
    return false;
  }
}

function toPickOnlyTheRicksNameAndDimension(rick) {
  if("name" in rick && "dimension" in rick) {
      return {
          name: rick.name,
          dimension: rick.dimension,
      };
  }
}

function retriveOnlyTheRicksWithFamily(ricks) {
  return ricks
          .filter(toCountIfRickHaveAFamily)
          .map(toPickOnlyTheRicksNameAndDimension);
}

module.exports = {
  toPickOnlyTheRicksNameAndDimension,
  retriveOnlyTheRicksWithFamily,
  toCountIfRickHaveAFamily,
};