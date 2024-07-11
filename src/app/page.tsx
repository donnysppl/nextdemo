

const fetchData = async () => {
  const api = await fetch(`https://backapi.shopsppl.in/product/front/list?page=2&limit=12&brand=all&category=all&price&size`)

  const req = await api.json();
  return req
}



export default async function Home() {

  const data = await fetchData()

  return (
    <>
      <div className="max-w-screen-lg mx-auto" >
        {
          JSON.stringify(data)
        }
      </div>
    </>
  );
}
