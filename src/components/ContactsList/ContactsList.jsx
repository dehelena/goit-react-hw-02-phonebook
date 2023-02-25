import React from 'react';
import { nanoid } from 'nanoid';

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul>
      {contacts.map(contact => {
        return (
          <li key={contact.id}>
            <span>{contact.name} </span>
            <span> {contact.number} </span>
            <button type="button" onClick={() => onDeleteContact(contact.id)}>
              Delete contact
            </button>
          </li>
        );
      })}
    </ul>
  );
};

// function ProductList({ products, onDeleteProduct }) {
//   return (
//     <div >
//        {products.map((product) => {
//           return (
//               <Product
//                 key={product.id}
//                 id={product.id}
//                 discount={product.discount}
//                 title={product.title}
//                 price={product.price}
//                 onDeleteProduct={onDeleteProduct}
//               />
//           );
//         })}
//     </div>
//   );
// }
