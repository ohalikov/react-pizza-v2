import { useState } from 'react';

export const PizzaBlock = ({ title, price, imageUrl, sizes, types }) => {
  const [pizzaCount, setCounterPizza] = useState(0);
  const [sizeIndexPizza, setSizePizza] = useState(0);
  const [typePizza, setTypePizza] = useState(0);

  const typeNamesPizza = ['тонкое', 'Традиционное'];

  const incrementPizza = () => {
    console.log(pizzaCount + 1);
    setCounterPizza(pizzaCount + 1);
  };

  return (
    <div className="pizza-block-wrapper">
      <div className="pizza-block">
        <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
        <h4 className="pizza-block__title">{title}</h4>
        <div className="pizza-block__selector">
          <ul>
            {types.map((typeId) => (
              <li
                key={typeId}
                onClick={() => setTypePizza(typeId)}
                className={typePizza === typeId ? 'active' : ''}>
                {typeNamesPizza[typeId]}
              </li>
            ))}
          </ul>
          <ul>
            {sizes.map((itemSize, index) => (
              <li
                key={`index-size-${index}`}
                onClick={() => setSizePizza(index)}
                className={sizeIndexPizza === index ? 'active' : ''}>
                {`${itemSize} см`}
              </li>
            ))}
          </ul>
        </div>
        <div className="pizza-block__bottom">
          <div className="pizza-block__price"> {`от ${price} ₽`}</div>
          <button onClick={incrementPizza} className="button button--outline button--add">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                fill="white"
              />
            </svg>
            <span>Добавить</span>
            <i>{pizzaCount}</i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PizzaBlock;
