import productApi from "api/productApi";
import { useEffect, useState } from "react";

export default function useProductDetail(productId) {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await productApi.get(productId);
        setProduct(result.data);
        setLoading(false);
      } catch (error) {
        console.log("Fail to fetch data product", error);
        setLoading(false);
      }
    }
    fetchData();
  }, [productId]);

  return { product, loading };
}
