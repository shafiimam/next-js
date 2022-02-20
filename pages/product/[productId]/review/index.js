import { useRouter } from "next/router";

function Review() {
  const router = useRouter();
  const { productId } = router.query;
  return <h1>Review about product {productId}</h1>
}

export default Review;