import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const ApiNoKey = () => {
  const [data, setData] = useState(null);

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response)=> response.json())
    .then((datos) => setData(datos))
  },[])

  if(data){
    console.log(data);
  }

  return (
    <>
      { data && (
        data.map((element, index)=>{
          if(index >= 20){
            return null;
          }
          return (
            <div key={element.id}>
              <Link to={`/apinokey/${element.id}`}>
                <p>{element.id} Title: {element.title}</p>
              </Link>
            </div>
          )
        })
      )}
    </>
  );
};

export default ApiNoKey;
