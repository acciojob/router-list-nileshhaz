import { useParams } from "react-router-dom";

function ItemDetail() {
  const { id } = useParams();

  return (
    <>
      <h2>Item {id}</h2>
      <p>Description for Item {id}</p>
    </>
  );
}

export default ItemDetail;
