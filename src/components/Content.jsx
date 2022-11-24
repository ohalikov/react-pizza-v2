import Categories from './Categories';
import Sort from './Sort';
import PizzaBlock from './PizzaBlock';
import pizzasItems from '../assets/pizzas.json';

function Content() {
  return (
    <div className="content">
      <div className="container">
        <div className="content__top">
          <Categories />
          <Sort />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
          {pizzasItems.map((pizza, index) => (
            <PizzaBlock
              pizzaTitle={pizza.title}
              price={pizza.price}
              pizzaImageUrl={pizza.imageUrl}
              sizes={pizza.sizes}
              pizzaTypes={pizza.types}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Content;
