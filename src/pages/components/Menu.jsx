import React, { useEffect, useState } from "react";
import { Card, CardBody, Image } from "@nextui-org/react";

function Menu() {
  const APIURL = import.meta.env.VITE_API_URL;

  const [categoria, setCategoria] = useState([]);
  
  useEffect(() => {
    fetch(`${APIURL}/categorias?populate=*`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error HTTP: " + response.status);
        }
        return response.json();
      })
      .then((data) => setCategoria(data.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div id="menu" className="bg-oscuro shadow-2xl">
      <div className="container text-center mx-auto sm:mt-0 px-5 xl:px-48 pb-10 sm:pb-20 pt-10 ">
        <h2 className="uppercase text-xl sm:text-3xl text-blanco font-bold">
          🍽️ Nuestro Menú 🍽️
        </h2>

        <div className="grid gap-8 md:grid-cols-3 mt-12 text-snow">
          {categoria.map((producto) => (
            <Card
              key={producto.id}
              className="dark:bg-oscuro dark:opacity-80 hover:scale-105 relative transition-all"
              shadow="lg"
              isPressable
              onPress={() => console.log("item pressed", producto.id)}
            >
              <CardBody className="relative overflow-visible p-0">
                <Image
                  shadow="sm"
                  radius="lg"
                  width="100%"
                  className="w-full object-cover h-[280px]"
                  src={
                    producto.attributes.imagen.data.attributes.formats.small.url
                  }
                  loading="lazy"
                  alt={producto.attributes.nombre}
                />
                <div className="absolute inset-0 z-10 bg-oscuro opacity-50"></div>
                <h1
                  className="absolute font-saira text-center text-blanco uppercase text-3xl font-bold z-20 top-1/2 left-1/2 transform -translate-x-2/4 -translate-y-2/4"
                  key={producto.id}
                  style={{mixBlendMode:"plus-lighter"}}
                >
                  {producto.attributes.nombre}
                </h1>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Menu;
