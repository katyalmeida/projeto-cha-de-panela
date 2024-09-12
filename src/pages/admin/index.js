import React, { useEffect, useState } from "react";
import conectionApi from "../../server.js";
import { Container } from "../admin/styles.js";

function Admin() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const allProducts = async () => {
      const { data } = await conectionApi.get("products");
      setProducts(data);
    };

    allProducts();
  }, []);

  return (
    <Container className="table-container">
      <table>
        <thead>
          <tr>
            <th className="titulo">Produto</th>
            <th className="titulo">Assinante</th>
            <th className="titulo">Assinante</th>
            <th className="titulo">Assinante</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td>{product.name_product}</td>
              <td>{product.name_user}</td>
              <td>{product.name_user_second}</td>
              <td>{product.name_user_third}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}
export default Admin;
