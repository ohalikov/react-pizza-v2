import { Categories } from './Categories';
import { Sort } from './Sort';
import { PizzaBlock } from './PizzaBlock';
import pizzasItems from '../assets/pizzas.json';

export const Content = () => {
  return (
    <div className="content">
      <div className="container">
        <div className="content__top">
          {/* <Categories /> */}
          <Sort />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
          {pizzasItems.map((pizzasObj, index) => (
            <PizzaBlock key={`pizza_${pizzasObj.id}`} {...pizzasObj} />
          ))}
        </div>
      </div>
    </div>
  );
};
