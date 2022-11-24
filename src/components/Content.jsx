import Categories from './Categories';
import Sort from './Sort';
import PizzaBlock from './PizzaBlock';

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
          <PizzaBlock title="Мексиканская" price={2150} />
          <PizzaBlock title="Кубинская" price="1150" />
          <PizzaBlock title="Любимая" price="950" />
          <PizzaBlock title="Пепперони" price="650" />
          <PizzaBlock title="Чизбургер" price="1150" />
          <PizzaBlock title="Маргарита" price="1550" />
          <PizzaBlock title="Школьник" price="1990" />
        </div>
      </div>
    </div>
  );
}

export default Content;
