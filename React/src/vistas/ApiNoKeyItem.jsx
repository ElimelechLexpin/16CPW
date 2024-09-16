import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ApiNoKeyItem = () => {
  const [data, setData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((response) => response.json())
      .then((datos) => setData(datos));
  }, [id]);

  if (data) {
    console.log(data);
  }

  return (
    <>
      {data && (
        <div>
          <p>
            {data.id} Title: {data.title}
          </p>
        </div>
      )}
    </>
  );
};

export default ApiNoKeyItem;
