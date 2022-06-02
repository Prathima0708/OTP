// import React from 'react'

// const Tree = ({data=[]}) => {
//   return (
//     <div className='d-tree'>Tree
// <ul className='flex flex-col d-tree-container' >
// {data.map(tree=>(
//     <TreeNode node={tree} />
// ))}
// </ul>
//     </div>
//   )
// }


// const TreeNode=({node})=>{
//     const [childVisible,setChildVisible]=useState(false)
//     const hasChild=node.children?true : false
//     return(
//         <li className='d-tree-node'>
//             <div className='flex' onClick={e=>setChildVisible(v=>!v)}>
//                 {hasChild && (
//                      <div
//                      className={`d-inline d-tree-toggler ${
//                        childVisible ? "active" : ""
//                      }`}
//                    >
//                         <FontAwesomeIcon icon="fa-solid fa-caret-right" />
//                         </div>
//                 )}
//                 <div className='col d-tree-head'>

//                 </div>
//             </div>
//         </li>
//     )

// }

// export default Tree






import React, { useState } from "react";
import classes from "./Tree.module.css";

const Tree = ({ data = [] }) => {
  return (
    <div className={classes.dtree} >
      <ul  className={classes.dtreecontainer}>
        {data.map((tree) => (
          <TreeNode node={tree} />
        ))}
      </ul>
    </div>
  );
};

const TreeNode = ({ node }) => {
  const [childVisible, setChildVisiblity] = useState(false);

  const hasChild = node.children ? true : false;

  return (
    <li className={classes.dtreenode}>
      <div className="d-flex" onClick={(e) => setChildVisiblity((v) => !v)}>
        {hasChild && (
          <div
            className={`d-inline d-tree-toggler ${
              childVisible ? "active" : ""
            }`}
          >
           <i class="fa-solid fa-caret-right"></i>
          </div>
        )}

        <div className="col d-tree-head">
          <i className={`mr-1 ${node.icon}`}> </i>
          {node.label}
        </div>
      </div>

      {hasChild && childVisible && (
        <div className="d-tree-content">
          <ul className="d-flex d-tree-container flex-column">
            <Tree data={node.children} />
          </ul>
        </div>
      )}
    </li>
  );
};

export default Tree;