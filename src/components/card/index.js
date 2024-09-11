/* eslint-disable jsx-a11y/alt-text */
import { React, useState } from "react";
import PropTypes from "prop-types";
import PopUp from "../../components/popup";

import { Container, Button, GridContainer, Status } from "./styles";
function Card({ filteredProducts }) {
  const [showPopUp, setShowPopUp] = useState(false);
  const [selectProductId, setSelectProductId] = useState(null);

  const openPopUp = (product) => {
    setSelectProductId(product);
    setShowPopUp(true);
  };
  const closePopUp = () => {
    setShowPopUp(false);
    setSelectProductId(null);
  };

  return (
    <>
      <GridContainer>
        {filteredProducts &&
          filteredProducts.map((product) => (
            <Container key={product.id}>
              {product.availability ? (
                <Status active={product.availability}>Já Escolhido</Status>
              ) : (
                <Status className="status">Disponível</Status>
              )}
              <nav>
                <img src={product.url} alt={product.name_product} />
              </nav>
              <section>
                <p>{product.name_product}</p>
              </section>
              <Button>
                <button
                  onClick={() => openPopUp(product.id)}
                  disabled={product.availability}
                >
                  escolher
                </button>
              </Button>
            </Container>
          ))}
      </GridContainer>

      {showPopUp && (
        <PopUp closePopUp={closePopUp} productId={selectProductId} />
      )}
    </>
  );
}

Card.propTypes = {
  filteredProducts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name_product: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      availability: PropTypes.bool.isRequired,
      categoryId: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Card;
