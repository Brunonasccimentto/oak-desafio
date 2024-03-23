import useList from "./useList";

export const useSort = () => {
    const {productsList} = useList();

    const descendingOrderedList = ()=> {
        const sort = productsList.sort((a, b) => parseFloat(a.value) - parseFloat(b.value));
        localStorage.setItem('products', JSON.stringify(sort));
        return sort
    }

    const ascendingOrderedList = ()=> {
        const sort = productsList.sort((a, b) => parseFloat(b.value) - parseFloat(a.value));
        localStorage.setItem('products', JSON.stringify(sort));
        return sort
    }

    return {
        descendingOrderedList,
        ascendingOrderedList
    }
};

export default useSort;
