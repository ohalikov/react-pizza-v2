import { Categories } from '../components/Categories';
import { Sort } from '../components/Sort';
import { PizzaBlock } from '../components/PizzaBlock';
import { Skeleton } from '../components/PizzaBlock/PizzaBlockSkeleton';
import { useState, useEffect } from 'react';

export const Home = () => {
  const [pizzaItems, setPizzaItems] = useState([]);
  const [isLoadingPizzas, setIsLoadingPizzas] = useState(true);

  useEffect(() => {
    const getPromisePizzas = fetch('https://638422c44ce192ac60505ee2.mockapi.io/api/v2/pizzas');
    const pizzasJSON = getPromisePizzas.then((data) => data.json());
    pizzasJSON.then((pizzaItem) => {
      setPizzaItems(pizzaItem);
      setIsLoadingPizzas(false);
    });
  }, []);
  console.log(pizzaItems);

  return (
    <>
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoadingPizzas
          ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
          : pizzaItems.map((pizzasObj, index) => (
              <PizzaBlock key={`pizza_${pizzasObj.id}`} {...pizzasObj} />
            ))}
      </div>
    </>
  );
};
