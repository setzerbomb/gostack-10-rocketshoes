const formatter = {
  price: new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format,
};

export default formatter;
