import React from 'react'
import {shopContext } from '../Context/ShopContext'
import {useParams} from 'react-route-dom' ;
import Breadcrum from '../Components/Breadcrums/Breadcrum';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import Relatedproducts from '../Components/ReleatedProducts/Relatedproducts';

const Product = () => {
  const {all_product}=useContext(ShopContext);
  const{productId} = useParams()
const product = all_product.find((e)=> e.id === Number(productId));
 
return (
    <div>
      <Breadcrum product = {product} />
      <ProductDisplay product={product}/>
      <DescriptionBox />
      <Relatedproducts/>
    </div>
  )
}

export default Product
