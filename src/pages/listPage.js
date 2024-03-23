import React, { useState } from "react";
import useList from "../hooks/useList";
import useSort from "../hooks/useSort";
import { order } from "../enum/order";
import TransitionsModal from "../components/modal";

export const ListPage = () => {
  const { productsList } = useList();
  const { ascendingOrderedList, descendingOrderedList } = useSort();
  const [showList, setShowList] = useState(order.DEF);

  const handleChange = (e) => {
    setShowList(e.target.value);
  };

  return (
    <div className="container">
      <div className="options">
        <TransitionsModal />
        <select
          className="selectTable"
          onChange={handleChange}
          value={showList}
        >
          <option value={order.DEF} selected hidden>
            Ordernar por
          </option>
          <option value={order.DES}>Ordem decrescente</option>
          <option value={order.ASC}>Ordem crescente</option>
        </select>
      </div>

      <table>
        <thead>
          <tr>
            <th>Nome do produto</th>
            <th>Preço</th>
          </tr>
        </thead>

        <tbody>
          {showList === order.ASC
            ? ascendingOrderedList().map((e) => {
                return (
                  <tr key={e.productName}>
                    <td>{e.productName}</td>
                    <td>R$ {parseFloat(e.value).toFixed(2)}</td>
                  </tr>
                );
              })
            : showList === order.DES
            ? descendingOrderedList().map((e) => {
                return (
                  <tr key={e.productName}>
                    <td>{e.productName}</td>
                    <td>R$ {parseFloat(e.value).toFixed(2)}</td>
                  </tr>
                );
              })
            : productsList.map((e) => (
                <tr key={e.productName}>
                  <td>{e.productName}</td>
                  <td>R$ {parseFloat(e.value).toFixed(2)}</td>
                </tr>
              ))}
        </tbody>
      </table>
    </div>
  );
};
