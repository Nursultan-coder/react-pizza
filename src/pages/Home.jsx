import React from 'react'
import { useSelector, useDispatch } from "react-redux";

import { Categories, SortPopup, PizzaBlock, LoadingBlock } from '../components/';
import { setCatigory, setSortBy } from "../redux/actions/filters";
import { addPizzaToCart } from "../redux/actions/cart";
import { fetchPizzas } from "../redux/actions/pizzas";



const categoryName = ['Мясные', 'Вегетарианская', 'Гриль', 'Острое', 'Закрытые'];
const sortItems = [{name: 'популярности', type: 'popular', order: 'desc'}, 
                  {name: 'цене', type: 'price', order: 'desc'}, 
                  {name:'алфавиту', type: 'name', order: 'asc'}];

function Home() {
  const cartItems = useSelector(({ cart }) => cart.items);
  const items = useSelector(({ pizzas }) => pizzas.items);
  const isLoading = useSelector(({ pizzas }) => pizzas.isLoading);
  const { catigoryBy, sortBy } = useSelector(({ filters }) => filters);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchPizzas(catigoryBy, sortBy));
  }, [catigoryBy, sortBy]);


  const onSelectCatigory = (index) => {
    dispatch(setCatigory(index));
  };

  const onSelectSortBy = (type) => {
    dispatch(setSortBy(type));
  };

  const handleAddPizzaToCart = (obj) => {
    dispatch(addPizzaToCart(obj));
  };

  return (
    <div className="container">
      <div className="content__top">
        <Categories 
          activeCategory={catigoryBy}
          items={categoryName} 
          onClickItem={onSelectCatigory} />
        <SortPopup activeSortBy={sortBy.type} items={sortItems} onClickSortType={onSelectSortBy} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading &&
          items.map((obj) => (
            <PizzaBlock 
            onClickAddPizza={handleAddPizzaToCart} 
            key={obj.id} 
            inCartCuont={cartItems[obj.id] && cartItems[obj.id].length} 
            {...obj} />
          ))
          }{!isLoading &&
          Array(10).fill(0).map((_, index) => <LoadingBlock key={index} />)
        }
      </div>
    </div>
  );
}

export default Home;
