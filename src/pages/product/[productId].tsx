import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const ProductItem = () => {
  const [product, setProduct] = useState<TProduct>()
  const {
    query: { productId }
  } = useRouter()

  useEffect(() => {
    if (productId) {
      fetch(`/api/avo/${productId}`)
        .then(response => response.json())
        .then(data => setProduct(data))
        .catch(error => console.log(error))
    }
  }, [productId])

  return (
    <section>
      <h1>ProductItem: {productId}</h1>
      <p>{product?.name}</p>
      <p>{product?.sku}</p>
      <p>{product?.price}</p>
      <p>{product?.image}</p>
      <p>{product?.attributes.description}</p>
    </section>
  )
}

export default ProductItem
