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

// export function PostData(type, userData) {
//     let BaseURL = '../testData';

//     return new Promise((resolve, reject) =>{

//         fetch(BaseURL+type, {
//             method: 'POST',
//             body: JSON.stringify(userData)
//           })
//           .then((response) => response.json())
//           .then((res) => {
//             resolve(res);
//           })
//           .catch((error) => {
//             reject(error);
//           });

//       });
// }

export type Product = typeof products[0];
