import Link from 'next/link'
function ProductList() {
  return <>
    <Link href="/"><a>Go Home</a></Link>
    <h1><Link href="product/product1"><a>Product 1</a></Link></h1>
    <h1><Link href="product/product2"><a>Product 2</a></Link></h1>
    <h1><Link href="product/product3" replace><a>Product 3</a></Link></h1>
    <h1><Link href="product/product4"><a>Product 4</a></Link></h1>
  </>
}

export default ProductList;