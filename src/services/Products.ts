import products from '../testData.json';

interface Params {
  perPage: number;
  offset: number;
}

export const getProducts = async (params: Params) => {
  return {
    items: [...products].splice(params.offset, params.perPage),
    total: products.length,
  };
};

export const getProductById = async (id: string) => {
  return products.filter(product => product.caseUid === id)[0];
};

export type Product = typeof products[0];
