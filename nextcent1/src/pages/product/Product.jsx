// import { useState, useEffect, useMemo } from "react";
// import styles from "./product.module.css"; 

// const productUrl = "https://fakestoreapi.com/products";

// const Product = () => {
//   const [products, setProducts] = useState([]);
//   const [search, setSearch] = useState("");

//   const searchProduct = async () => {
//     try {
//       const response = await fetch(productUrl);
//       const data = await response.json();
//       setProducts(data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     searchProduct();
//   }, []);

 
//   const filteredProducts = useMemo(() => {
//     return products.filter((product) =>
//       product.title.toLowerCase().includes(search.toLowerCase())
//     );
//   }, [products, search]);

//   return (
//     <div className={styles.productsContainer}>

//       <div className={styles.productsHeader}>
//         <h2>Our Store Catalog</h2>
//         <p>Explore our trending collection of high-quality items available today.</p>
        

//         <div className={styles.searchWrapper}>
//           <input
//             type="search"
//             value={search}
//             placeholder="Search products..."
//             onChange={(e) => setSearch(e.target.value)}
//             className={styles.searchInput}
//           />
//         </div>
//       </div>

   
//       <div className={styles.productsGrid}>
//         {filteredProducts.map((product) => (
//           <div key={product.id} className={styles.productCard}>
            
      
//             <span className={styles.productCategory}>{product.category}</span>
            
       
//             <div className={styles.productImgWrapper}>
//               <img src={product.image} alt={product.title} />
//             </div>

//             <div className={styles.productInfo}>
//               <h3 className={styles.productTitle}>{product.title}</h3>
//               <p className={styles.productDescription}>{product.description}</p>
              
//               <div className={styles.productFooter}>
//                 <span className={styles.productPrice}>$300</span>
//                 <button className={styles.addToCartBtn}>Add to Cart</button>
//               </div>
//             </div>

//           </div>
//         ))}
//       </div>
      

//       {filteredProducts.length === 0 && (
//         <div className={styles.noResults}>
//           <p>No products found matching "{search}"</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Product;




























import { useState, useEffect, useMemo } from "react";
import styles from "./product.module.css"; 

const productUrl = "https://fakestoreapi.com/products";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const searchProduct = async () => {
      try {
        const response = await fetch(productUrl);
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };

    searchProduct();
  }, []);

  const filteredProducts = useMemo(() => {
    return products.filter((product) =>
      product?.title?.toLowerCase().includes(search.toLowerCase())
    );
  }, [products, search]);

  return (
    <div className={styles.productsContainer}>
      <div className={styles.productsHeader}>
        <h2>Our Store Catalog</h2>
        <p>Explore our trending collection of high-quality items available today.</p>
        
        <div className={styles.searchWrapper}>
          <input
            type="search"
            value={search}
            placeholder="Search products..."
            onChange={(e) => setSearch(e.target.value)}
            className={styles.searchInput}
          />
        </div>
      </div>

      <div className={styles.productsGrid}>
        {filteredProducts.map((product) => (
          <div key={product.id} className={styles.productCard}>
            <span className={styles.productCategory}>{product.category}</span>
            
            <div className={styles.productImgWrapper}>
              <img src={product.image} alt={product.title} />
            </div>

            <div className={styles.productInfo}>
              <h3 className={styles.productTitle}>{product.title}</h3>
              <p className={styles.productDescription}>{product.description}</p>
              
              <div className={styles.productFooter}>
                <span className={styles.productPrice}>${product.price}</span>
                <button className={styles.addToCartBtn}>Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className={styles.noResults}>
          <p>No products found matching "{search}"</p>
        </div>
      )}
    </div>
  );
};

export default Product;