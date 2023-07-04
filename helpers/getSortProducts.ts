import { CardProps } from "@/components/card/Card.props";

export const getSortedProducts = (
  productsData: CardProps[],
  descOrAsc: boolean,
  sortField: string
): CardProps[] => {
  let sortedProductData = [];

  if (descOrAsc) {
    if (typeof productsData[0][sortField] === "string") {
      sortedProductData = productsData.sort((a, b) =>
        a[sortField].localeCompare(b[sortField])
      );
    } else {
      sortedProductData = productsData.sort(
        (a, b) => b[sortField] - a[sortField]
      );
    }
  } else {
    if (typeof productsData[0][sortField] === "string") {
      sortedProductData = productsData.sort((a, b) =>
        b[sortField].localeCompare(a[sortField])
      );
    } else {
      sortedProductData = productsData.sort(
        (a, b) => a[sortField] - b[sortField]
      );
    }
  }

  return sortedProductData;
};
