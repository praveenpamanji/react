import React from 'react';

// Define ListItems component before it's used
export const Listitems = () => {
  const Fruits = ["Apple", "Banana", "Kiwi", "Orange", "Papaya"];
  return (
    <>
      {Fruits.map((eachfruit, index) => (
        <li key={index}>{eachfruit}</li> // Added key prop
      ))}
    </>
  );
};

// // Unordered List component
// export const Unorderedlist = () => {
//   return (
//     <div>
//       <ul>
//         <Listitems /> {/* Use consistent component casing */}
//       </ul>
//     </div>
//   );
// };

// // Ordered List component
// export const Orderedlist = () => {
//   return (
//     <div>
//       <ol>
//         <Listitems />
//       </ol>
//     </div>
//   );
// };

// CustomList component
const CustomList = (props) => {
  const { list } = props;
  return (
    <ol>
      {list.map((eachFruit, index) => (
        <li key={index}>{eachFruit}</li> // Added key prop
      ))}
    </ol>
  );
};

export default CustomList; // Only one default export per file

// CustomOrderedList component
export const CustomOrderedList = () => {
  return (
    <ol>
      <Listitems />
    </ol>
  );
};
