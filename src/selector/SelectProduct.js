export default (products, filter) => {
  return products.filter(product => {
    if (filter.sortBy === "searchText") {
      return product.name.toLowerCase().includes(filter.text.toLowerCase());
    }else if(filter.sortBy === "allProducts"){
      return product;
    }
    return product;
  }).sort((a, b) => {
    const parsePrice = product => parseFloat(product.replace(/^\$/, "")) || 0;
    if (filter.sortBy === "highToLow") {
      return parsePrice(a.price) < parsePrice(b.price) ? 1 : -1;
    } else if (filter.sortBy === "lowToHigh") {
      return parsePrice(a.price) > parsePrice(b.price) ? 1 : -1;
    }
    return;
  });
};
