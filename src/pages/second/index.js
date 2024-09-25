import React, { useState, useEffect } from "react";
import Card from "../../components/card";
import Skeleton from "../../components/skeleton";
import ScrollToTop from "../../components/scrool";

import { Container, Itens, Temas, Produtos, BackToHome } from "./styles";
import conectionApi from "../../server.js";
import { useNavigates } from "../../constants/navigates";

function Lista() {
  const [selectedCategory, setSelectedCategory] = useState("TODOS");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { toHome } = useNavigates();

  const categories = [
    { id: 2, name: "SALA" },
    { id: 1, name: "COZINHA" },
    { id: "ALL", name: "TODOS" },
    { id: 3, name: "BANHEIRO" },
    { id: 4, name: "QUARTO" },
  ];

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const { data } = await conectionApi.get("products");

        if (selectedCategory === "TODOS") {
          setFilteredProducts(data);
        } else {
          const filtered = data.filter(
            (product) => product.category_id === selectedCategory
          );
          setFilteredProducts(filtered);
        }
      } catch (error) {
        console.error("Erro na busca de produtos", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [selectedCategory]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category.id === "ALL" ? "TODOS" : category.id);
  };

  return (
    <Container>
      <Temas>
        <h1>LISTA DE PRESENTES</h1>
        <h2>ABAIXO ESTÃO OS PRODUTOS PARA VOCÊ ESCOLHER</h2>
      </Temas>
      <Itens>
        {categories.map((category) => (
          <p
            key={category.id}
            onClick={() => handleCategoryClick(category)}
            style={{
              fontWeight:
                selectedCategory === category.id ||
                (selectedCategory === "TODOS" && category.id === "ALL")
                  ? "bold"
                  : "normal",
              backgroundColor:
                selectedCategory === category.id ||
                (selectedCategory === "TODOS" && category.id === "ALL")
                  ? "#c83966"
                  : "transparent",
              color:
                selectedCategory === category.id ||
                (selectedCategory === "TODOS" && category.id === "ALL")
                  ? "white"
                  : "black",
              width: "150px",
              borderRadius: "4px",
              cursor: "pointer",
              height: "20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {category.name}
          </p>
        ))}
      </Itens>
      <BackToHome>
        <button onClick={toHome}>
          <p>Voltar a tela inicial</p>
        </button>
      </BackToHome>
      <Produtos>
        {loading ? (
          <div className="skeleton">
            <Skeleton />
            <p>Carregando...</p>
          </div>
        ) : (
          filteredProducts && <Card filteredProducts={filteredProducts} />
        )}
      </Produtos>
      <ScrollToTop />
    </Container>
  );
}

export default Lista;
