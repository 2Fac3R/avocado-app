import React, { useEffect, useState } from 'react'

function Home() {
  const [producList, setProductList] = useState<TProduct[]>([])

  useEffect(() => {
    fetch('/api/avo')
      .then(response => response.json())
      .then(data => setProductList(data.data))
  }, [])

  return (
    <div>
      <h1>Home</h1>
      {producList.map(product => (
        <div key={product.id}>
          {product.name}
        </div>
      ))}
    </div>
  )
}

export default Home
