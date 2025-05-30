import React,{useEffect,useState} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'


/*
Dummy Respoce For Product:
{
      "id": 1,
      "title": "Essence Mascara Lash Princess",
      "description": "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
      "category": "beauty",
      "price": 9.99,
      "discountPercentage": 10.48,
      "rating": 2.56,
      "stock": 99,
      "tags": [
        "beauty",
        "mascara"
      ],
      "brand": "Essence",
      "sku": "BEA-ESS-ESS-001",
      "weight": 4,
      "dimensions": {
        "width": 15.14,
        "height": 13.08,
        "depth": 22.99
      },
      "warrantyInformation": "1 week warranty",
      "shippingInformation": "Ships in 3-5 business days",
      "availabilityStatus": "In Stock",
      "reviews": [
        {
          "rating": 3,
          "comment": "Would not recommend!",
          "date": "2025-04-30T09:41:02.053Z",
          "reviewerName": "Eleanor Collins",
          "reviewerEmail": "eleanor.collins@x.dummyjson.com"
        },
        {
          "rating": 4,
          "comment": "Very satisfied!",
          "date": "2025-04-30T09:41:02.053Z",
          "reviewerName": "Lucas Gordon",
          "reviewerEmail": "lucas.gordon@x.dummyjson.com"
        },
        {
          "rating": 5,
          "comment": "Highly impressed!",
          "date": "2025-04-30T09:41:02.053Z",
          "reviewerName": "Eleanor Collins",
          "reviewerEmail": "eleanor.collins@x.dummyjson.com"
        }
      ],
      "returnPolicy": "No return policy",
      "minimumOrderQuantity": 48,
      "meta": {
        "createdAt": "2025-04-30T09:41:02.053Z",
        "updatedAt": "2025-04-30T09:41:02.053Z",
        "barcode": "5784719087687",
        "qrCode": "https://cdn.dummyjson.com/public/qr-code.png"
      },
      "images": [
        "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp"
      ],
      "thumbnail": "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp"
    },
*/


export default function ProductDetails() {
    const {id} = useParams()

    let [product,setProduct] = useState({})

    useEffect(()=>{
        async function getData(){
            const response = await axios.get(`https://dummyjson.com/products/${id}`)
            console.log(response.data)
            setProduct(response.data)
        }
        getData()
    },[])

  return (
    <div>
        <div>
            {/* <img src={product.images[0]} alt="" /> */}
        </div>
        <div>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <h3>{product.price}</h3>
            <p>{product.rating}</p>
            <p>{product.stock}</p>
            <p>{product.category}</p>
            <p>{product.brand}</p>
            <p>{product.sku}</p>
            <p>{product.weight}</p>
            {/* <p>{product.dimensions.width}</p>
            <p>{product.dimensions.height}</p>
            <p>{product.dimensions.depth}</p> */}
            <p>{product.warrantyInformation}</p>
            <p>{product.shippingInformation}</p>
            <p>{product.availabilityStatus}</p>
            <p>{product.returnPolicy}</p>
            <p>{product.minimumOrderQuantity}</p>

        </div>
    </div>
  )
}
