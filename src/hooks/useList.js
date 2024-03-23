import { useEffect, useState, useCallback } from "react";

const useList = () => {
  const [productsList, setProductsList] = useState([]);

  const onSubmit = useCallback(async (data) => {
    const updatedList = [...productsList, data];
    localStorage.setItem("products", JSON.stringify(updatedList));
    setProductsList(updatedList)
  }, [productsList]);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("products")) === null) {
      localStorage.setItem("products", JSON.stringify(productsList));
    }
    setProductsList(JSON.parse(localStorage.getItem("products")));
  }, []);

  return {
    onSubmit,
    productsList,
    setProductsList,
  };
};

export default useList;
