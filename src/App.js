// import User from "./User";

// function App() {
//   const productData = {
//     product: "Mobile",
//     productprice: 23000,
//     productmodel: "moto g13",
//     productstorage: 4000,
//   };


//   return (
//     <div className="App">
//      <User 
//      name={productData.product} 
//      price={productData.productprice } 
//      email={productData.productmodel}
//      storage={productData.productstorage}
//      />
//     </div>
//   );
// }

// export default App;

import React,{useState} from 'react'

export const App = () => {

const [num, setNum] =  useState(1);

 let x = 1;

const handleAdd = () =>{
  // x = x + 1;
  // console.log("x",x);
  // setNum(2);
  setNum((currvalue) =>{
    return currvalue + 1;
  }

)
  
}

// console.log(num);
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={handleAdd}>Add</button>
      </div>
  )
}

export default App;
