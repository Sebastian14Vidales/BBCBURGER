import React from "react";
import {Card, CardHeader, CardBody, Image, Button} from "@nextui-org/react";
import domicilio from "../../images/domicilio.png";
import evento from "../../images/evento.png";
import reserva from "../../images/reserva.png";

function Services() {
  return (
    <div className="relative isolate dark:bg-oscuro bg-white px-6 pt-9 pb-20 lg:px-8">
      
      <div className="mx-auto container text-center relative z-10">
        <h2 className="uppercase text-xl sm:text-3xl dark:text-blanco font-bold">
          🥂 Nuestro Servicio 🥂
        </h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          Aquí todos los servicios ofrecidos por la mejor hamburguesería de la
          ciudad🍔
        </p>

        <div className="grid md:grid-cols-3 gap-6 container text-center mx-auto sm:mt-0 px-5 xl:px-48 pb-10 sm:pb-20 pt-10">
          <Card isFooterBlurred className="h-[450px]">
            <CardHeader className="relative h-36 bg-gradient-to-tr from-[#EE2E31] to-[#071E22] flex justify-center"
            style={{
              clipPath:
                "polygon(74.1% 44.1% 100% 61.6% 97.5% 26.9% 85.5% 0.1% 80.7% 2% 72.5% 32.5% 60.2% 62.4% 52.4% 68.1% 47.5% 58.3% 45.2% 34.5% 27.5% 76.7% 0.1% 64.9% 17.9% 100% 27.6% 76.8% 76.1% 97.7% 74.1% 44.1%)",
            }}>
              <h4 className="-mt-20 font-quicksand  uppercase text-center font-medium text-snow text-large"
              style={{ letterSpacing: '0.5rem' }}>
                Domicilios
              </h4>
              <div className="absolute top-14 border-5 p-3 rounded-full border-solid border-snow dark:border-gray700 dark:bg-oscuro bg-gray200">
              <Image
                removeWrapper
                alt="Card background"
                className=" w-32 h-full object-cover"
                src={domicilio}
              />
              </div>
              
            </CardHeader>
            <CardBody>
              <p className="text-justify mt-16">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium blanditiis porro expedita nesciunt eum cumque voluptatibus, esse temporibus hic tenetur.</p>
              <Button className="bg-rojo mt-4 text-snow uppercase">
                Más Información
              </Button>
            </CardBody>
          </Card>
          <Card isFooterBlurred className="h-[450px]">
            <CardHeader className="relative h-36 bg-gradient-to-tr from-[#EE2E31] to-[#071E22] flex justify-center"
            style={{
              clipPath:
                "polygon(74.1% 44.1% 100% 61.6% 97.5% 26.9% 85.5% 0.1% 80.7% 2% 72.5% 32.5% 60.2% 62.4% 52.4% 68.1% 47.5% 58.3% 45.2% 34.5% 27.5% 76.7% 0.1% 64.9% 17.9% 100% 27.6% 76.8% 76.1% 97.7% 74.1% 44.1%)",
            }}>
              <h4 className="-mt-20 font-quicksand  uppercase text-center font-medium text-snow text-large"
              style={{ letterSpacing: '0.5rem' }}>
                Reservas
              </h4>
              <div className="absolute top-14 border-5 p-3 rounded-full border-solid border-snow dark:border-gray700 dark:bg-oscuro bg-gray200">
              <Image
                removeWrapper
                alt="Card background"
                className=" w-32 h-full object-cover"
                src={reserva}
              />
              </div>
              
            </CardHeader>
            <CardBody>
            <p className="text-justify mt-16">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium blanditiis porro expedita nesciunt eum cumque voluptatibus, esse temporibus hic tenetur.</p>
              <Button className="bg-rojo mt-4 text-snow uppercase">
                Más Información
              </Button>
            </CardBody>
          </Card>
          <Card isFooterBlurred className="h-[450px]">
            <CardHeader className="relative h-36 bg-gradient-to-tr from-[#EE2E31] to-[#071E22] flex justify-center"
            style={{
              clipPath:
                "polygon(74.1% 44.1% 100% 61.6% 97.5% 26.9% 85.5% 0.1% 80.7% 2% 72.5% 32.5% 60.2% 62.4% 52.4% 68.1% 47.5% 58.3% 45.2% 34.5% 27.5% 76.7% 0.1% 64.9% 17.9% 100% 27.6% 76.8% 76.1% 97.7% 74.1% 44.1%)",
            }}>
              <h4 className="-mt-20 font-quicksand  uppercase text-center font-medium text-snow text-large"
              style={{ letterSpacing: '0.5rem' }}>
                Eventos
              </h4>
              <div className="absolute top-14 border-5 p-3 rounded-full border-solid border-snow dark:border-gray700 dark:bg-oscuro bg-gray200">
              <Image
                removeWrapper
                alt="Card background"
                className=" w-32 h-full object-cover"
                src={evento}
              />
              </div>
              
            </CardHeader>
            <CardBody>
            <p className="text-justify mt-16">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium blanditiis porro expedita nesciunt eum cumque voluptatibus, esse temporibus hic tenetur.</p>
              <Button className="bg-rojo mt-4 text-snow uppercase">
                Más Información
              </Button>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Services;
