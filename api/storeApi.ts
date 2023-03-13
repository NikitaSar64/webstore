export async function fetchDataForOffer<T>(): Promise<T> {
    const response = await fetch('https://fakestoreapi.com/products?limit=3')
    const data = await response.json();
    return data;
  };