import User from "./User";

function App() {
  const productData = {
    product: "Mobile",
    productprice: 23000,
    productmodel: "moto g13",
    productstorage: 4000,
  };


  return (
    <div className="App">
     <User 
     name={productData.product} 
     price={productData.productprice } 
     email={productData.productmodel}
     storage={productData.productstorage}
     />
    </div>
  );
}

export default App;
