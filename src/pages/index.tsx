import React from 'react'
import fetch from 'isomorphic-fetch'
import Layout from '@components/Layout/Layout'
import KawaiiHeader from '@components/KawaiiHeader/KawaiiHeader'
import ProductList from '@components/ProductList/ProductList'

const apiUrl = 'https://avocado-app-wine.vercel.app/api/avo'

export const getStaticProps = async () => {
  const response = await fetch(apiUrl)
  const { data: productList }: TAPIAvoResponse = await response.json()

  return {
    props: {
      productList
    }
  }
}

const HomePage = ({ productList }: { productList: TProduct[] }) => {
  return (
    <Layout>
      <KawaiiHeader />
      <ProductList products={productList} />
    </Layout>
  )
}

export default HomePage
