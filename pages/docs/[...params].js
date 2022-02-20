import { useRouter } from "next/router";

function Docs() {
  const router = useRouter();
  console.log(router.query);
  const { params = [] } = router.query;
  if (params.length === 2) {
    return (
      <h1>Viewing docs for feature {params[0]} and concept{params[1]}</h1>
    )
  }
  else if (params.length === 1) {
    return <h1>Viewing docs for feature {params[0]}</h1>
  }

  return <h1>docs home page</h1>
}

export default Docs;