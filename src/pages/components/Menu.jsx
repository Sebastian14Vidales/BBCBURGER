import React from "react";
import burger from "../../images/burger.png";
import { Card, CardBody, Image } from "@nextui-org/react";

function Menu() {
  return (
    <div className="bg-oscuro dark:bg-opacity-0 shadow-2xl">
      <div className="container text-center mx-auto mt-10 px-28 py-10 ">
        <h2 className="uppercase text-xl sm:text-3xl font-quicksand font-bold text-perla">
          Nuestro Menú
        </h2>

        <div className="grid gap-8 grid-cols-3 px-28 mt-12 text-snow">
          <Card
            className="dark:bg-oscuro dark:opacity-80"
            shadow="lg"
            isPressable
            onPress={() => console.log("item pressed")}
          >
            <CardBody className="overflow-visible p-0">
              <Image
                shadow="sm"
                radius="lg"
                width="100%"
                className="w-full object-cover h-[160px]"
                // src={burger}
              />
            </CardBody>
          </Card>
          <Card
            className="dark:bg-oscuro dark:opacity-80"
            shadow="lg"
            isPressable
            onPress={() => console.log("item pressed")}
          >
            <CardBody className="overflow-visible p-0">
              <Image
                shadow="sm"
                radius="lg"
                width="100%"
                className="w-full object-cover h-[160px]"
                // src={burger}
              />
            </CardBody>
          </Card>
          <Card
            className="dark:bg-oscuro dark:opacity-80"
            shadow="lg"
            isPressable
            onPress={() => console.log("item pressed")}
          >
            <CardBody className="overflow-visible p-0">
              <Image
                shadow="sm"
                radius="lg"
                width="100%"
                className="w-full object-cover h-[160px]"
                // src={burger}
              />
            </CardBody>
          </Card>
          <Card
            className="dark:bg-oscuro dark:opacity-80"
            shadow="lg"
            isPressable
            onPress={() => console.log("item pressed")}
          >
            <CardBody className="overflow-visible p-0">
              <Image
                shadow="sm"
                radius="lg"
                width="100%"
                className="w-full object-cover h-[160px]"
                // src={burger}
              />
            </CardBody>
          </Card>
          <Card
            className="col-span-2 dark:bg-oscuro dark:opacity-80"
            shadow="lg"
            isPressable
            onPress={() => console.log("item pressed")}
          >
            <CardBody className="overflow-visible p-0">
              <Image
                shadow="sm"
                radius="lg"
                width="100%"
                className="w-full object-cover h-[160px]"
                // src={burger}
              />
            </CardBody>
          </Card>
          {/*    
          <div>2. Malteadas & Bebidas</div>
          <div>3. Combos</div>
          <div>4. Hot Fries</div>
          <div className="col-span-2">5. Hamburguesas</div> */}
        </div>
      </div>
    </div>
  );
}

export default Menu;
