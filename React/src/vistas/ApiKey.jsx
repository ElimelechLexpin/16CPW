import { useEffect, useState } from "react";

const ApiKey = () => {
  const [data, setData] = useState(null);
  const [name1, setName1] = useState(null);
  const [name2, setName2] = useState(null);

  useEffect(() => {
    const useApi = async () => {
      try {
        const response = await fetch(
          `https://love-calculator.p.rapidapi.com/getPercentage?sname=${name1}&fname=${name2}`,
          {
            method: "GET",
            headers: {
              "x-rapidapi-key":
                "fa83679aaamsh53706b4053859fcp1c3e91jsnd629606d75c0",
              "x-rapidapi-host": "love-calculator.p.rapidapi.com",
            },
          }
        );

        if (response.ok) {
          const datos = await response.json();
          console.log(datos);
          setData(datos);
        } else {
          console.log("Error al traer los datos");
        }
      } catch (error) {
        console.log(error);
      }
    };

    if(name1 && name2){
      useApi();
    }
  }, [name1, name2]);
  return (
    <>
      <label htmlFor="nombre1">Nombre1</label>
      <input type="text" id="nombre1" onChange={(e)=> setName1(e.target.value)} />

      <label htmlFor="nombre2">Nombre2</label>
      <input type="text" id="nombre2" onChange={(e)=> setName2(e.target.value)} />

      {data && (
        <div>
          <p>{data.percentage}%</p>
          <p>{data.result}</p>
        </div>
      )}
    </>
  );
};

export default ApiKey;
