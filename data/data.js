export async function getStaticProps() {
  const res = await fetch('https://fakestoreapi.com/products');
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}
