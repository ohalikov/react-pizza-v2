import { useState } from 'react';

export const Categories = () => {
  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
  const [indexCategory, setIndexCategory] = useState(0);

  const clickCategory = (index) => {
    setIndexCategory(index);
  };
  return (
    <div className="categories">
      <ul>
        {categories.map((value, index) => (
          <li
            key={`category-index-${index}`}
            onClick={() => clickCategory(index)}
            className={indexCategory === index ? 'active' : ''}>
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
};
