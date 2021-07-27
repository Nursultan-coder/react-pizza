import React from 'react';


function Categories({ items, onClickItem }) {
  const [activeItem, setActiveItem] = React.useState(null);

  const onSelectItem = (index) => {
    setActiveItem(index);
  } 

  return (
    <div className="categories">
      <ul>
        <li 
        className={activeItem === null ? "active" : ""} 
        onClick={() => onSelectItem(null)}
        >Все</li>
        {
          items.map((item, index) => {
            return (
              <li 
              className={activeItem === index ? "active" : ""}
              onClick={() => {onSelectItem(index)}} 
              key={`${item}_${index}`}>
                {item}
              </li>
            );
          })
        }
      </ul>
    </div>
  );
}

export default Categories;



// class Categories extends React.Component {
//   state = {
//     activeItem: 0,
//   };

//   onSelectItem = index => {
//     this.setState({
//       activeItem: index
//     });
//   }

//   render() {
//     const { items, onClickItem } = this.props;
//     return (
//       <div className="categories">
//         <ul>
//           {
//             items.map((item, index) => {
//               return (
//<li className={
//  this.state.activeItem === index ? "active" : ""} 
//onClick={() => {this.onSelectItem(index)}} 
//                 key={`${item}_${index}`}>{item}</li>
//               );
//             })
//           }
//         </ul>
//       </div>
//     );
//   }
// }