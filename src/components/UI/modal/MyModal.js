// import React from 'react';

// const MyModal = () => {

// }
// import classes from './MyModal.module.css'

// const MyModal = ({children, visible, setVisible}) => {

//   const rootClasses = [classes.myModal]

//   if (visible){
//     rootClasses.push(classes.active)
//   }
//   return (
//     <div className={rootClasses.join(' ')} onClick={()=> setVisible(false)}>
//       <div className={classes.myModalContent} onClick={(e)=> e.stopPropagation()}>
//         {children}
//       </div>
//     </div>
//   );
// };

// export default MyModal;

// import React, {useState} from "react"

// const [isVisible, setIsVisible] = useState(false)
// const toggleVisible = () => {
//     setIsVisible(!isVisible)
// }

// export {toggleVisible}