const formatPrice = (x, currency) => {
  switch(currency) {
    case 'BRL':
      return x.toFixed(2).replace('.', ',');
    case 'USD':
      return x.toFixed(2);  
    default:
      return x
  }
};

export default {
    formatPrice,
}
