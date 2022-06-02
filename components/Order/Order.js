// import React, { useState } from "react";

// import classes from "./Order.module.css";
// const Order = () => {
//   const [color, setColor] = useState("red");

//   const click = () => {
//     setColor("blue");
//   };
//   return (
//     <>
//       <div className="container">
//         <button
//           id="l1"
//           className="title text-center addItem"
//           style={{ color }}
//           onClick={click}
//         >
//           Add Item
//         </button>
//         <div id="base" />
//       </div>
//       <div className="key-value-container">
//         <span className="arrow hide">▶</span>
//         <input type="text" className={classes.key} placeholder="property" />
//         <input type="text" className={classes.value} placeholder="cost" />
//         <button className={classes.add}>+</button>
//         <button className={classes.remove}>x</button>
//       </div>
//     </>
//   );
// };

// export default Order;








import React from 'react'

const Order = () => {
  const base = document.getElementById("base");
      const addNewExpander = document.querySelector(".addItem");
      const l1 = document.getElementById("l1");
      // l1.contentEditable=true

      const keyValueTemplate = document.querySelector(".key-value");
      const getJsonTemplate = document.querySelector(".get-json");

      function getJSON(container) {
        const object = {};

        const keyEl = container.querySelector(".key");
        const valueEl = container.querySelector(".key + .value");

        if (keyEl && keyEl.value) {
          if (valueEl.style.display !== "none")
            object[keyEl.value] = valueEl.value;
          else {
            let subItem = container.querySelector(".sub-item");
            const subItems = [subItem];
            while (subItem.nextElementSibling) {
              subItems.push(subItem.nextElementSibling);
              subItem = subItem.nextElementSibling;
            }
            let obj = {};
            subItems.forEach((subItem) => {
              obj = { ...obj, ...getJSON(subItem) };
            });
            object[keyEl.value] = obj;
          }
        }
        return object;
      }

      function getElementsOfTemplate(element) {
        return {
          container: element.querySelector(".key-value-container"),
          valueEl: element.querySelector(".value"),
          addEl: element.querySelector(".add"),
          removeEl: element.querySelector(".remove"),
          arrowEl: element.querySelector(".arrow"),
        };
      }

      function getNode() {
        const keyValueNode = keyValueTemplate.content.cloneNode(true);
        const { container, valueEl, addEl, removeEl, arrowEl } =
          getElementsOfTemplate(keyValueNode);

        arrowEl.addEventListener("click", () => {
          arrowEl.classList.toggle("open");
        });

        addEl.addEventListener("click", () => {
          valueEl.style.display = "none";

          const subItem = document.createElement("div");
          subItem.classList.add("sub-item");
          subItem.appendChild(getNode());

          container.appendChild(subItem);
          arrowEl.classList.remove("hide");
          arrowEl.classList.add("open");
        });

        removeEl.addEventListener("click", () => {
          const subItemEl = container.parentElement;
          const parentEl = subItemEl.parentElement;

          subItemEl.remove();
          if (!parentEl.querySelector(".sub-item")) {
            parentEl.querySelector(".value").style.display = "inline";
            parentEl.querySelector(".arrow").classList.remove("open");
            parentEl.querySelector(".arrow").classList.add("hide");
          }
        });

        return container;
      }

      addNewExpander.addEventListener("click", () => {
        const container = base.appendChild(getNode());
        const getJSONButton = document.createElement("button");
        getJSONButton.textContent = "Add Product";
        getJSONButton.classList.add("get-json-button");
        base.appendChild(getJSONButton);

        getJSONButton.addEventListener("click", () => {
          // const res=  JSON.stringify(getJSON(container))
          console.log(JSON.stringify(getJSON(container)));
          // console.log(JSON.parse(res))
        });
      });

      addNewExpander.click();
  return (
   <>

<div className="container">
      <button id="l1" className="title text-center addItem">Add Item</button>
      <div id="base"></div>
    </div>

    <div className="key-value">
      <div className="key-value-container">
        <span className="arrow hide">▶</span>
        <input type="text" className="key" placeholder="property" />
        <input type="text" className="value" placeholder="cost" />
        <button className="add">+</button>
        <button className="remove">x</button>
      </div>
    </div>

   </>
  )
}

export default Order














 

