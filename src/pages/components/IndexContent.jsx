import React from "react";
import Typed from "typed.js";
import burger from "../../images/burger.png";
import facebook from "../../images/facebook.png";
import instagram from "../../images/instagram.png";
import tiktok from "../../images/tiktok.png";
import { Button, Tooltip } from "@nextui-org/react";

function IndexContent() {
  const el = React.useRef(null);
  const typed = React.useRef(null);

  React.useEffect(() => {
    const options = {
      strings: [
        '<span class="">#LocosPor<span class="text-rojo">LasBurgers</span></span>',
        '<span class="">#QueFalteLoQueSea<span class="text-rojo">MenosLasBurgers</span></span>',
      ],
      typeSpeed: 100,
      backSpeed: 40,
      loop: true,
    };
    typed.current = new Typed(el.current, options);

    return () => {
      typed.current.destroy();
    };
  }, []);

  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 250">
        <path
          fill="#EE2E31"
          fillOpacity="1"
          d="M0,128L21.8,133.3C43.6,139,87,149,131,170.7C174.5,192,218,224,262,208C305.5,192,349,128,393,90.7C436.4,53,480,43,524,64C567.3,85,611,139,655,138.7C698.2,139,742,85,785,85.3C829.1,85,873,139,916,181.3C960,224,1004,256,1047,245.3C1090.9,235,1135,181,1178,176C1221.8,171,1265,213,1309,218.7C1352.7,224,1396,192,1418,176L1440,160L1440,0L1418.2,0C1396.4,0,1353,0,1309,0C1265.5,0,1222,0,1178,0C1134.5,0,1091,0,1047,0C1003.6,0,960,0,916,0C872.7,0,829,0,785,0C741.8,0,698,0,655,0C610.9,0,567,0,524,0C480,0,436,0,393,0C349.1,0,305,0,262,0C218.2,0,175,0,131,0C87.3,0,44,0,22,0L0,0Z"
        ></path>
      </svg>
      <div className="relative dark:bg-oscuro contenidoPrincipal">
        <div className="container 2xl:absolute -top-20 right-0 left-0 px-5 mx-auto grid grid-cols-1 gap-8 pt-8 xl:pt-0 xl:px-28 sm:grid-cols-2">
          <div className="flex flex-col justify-center">
            <h1 className="uppercase text-7xl font-breeSerif font-bold">
              Bbc burger
            </h1>
            <p className="pt-8 ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse
              assumenda perferendis commodi maiores optio vero, at nemo
              consectetur debitis sunt. Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            </p>
            <p className="pt-8 text-2xl font-bold">
              <span className="font-breeSerif font-extrabold text-lg md:text-normal" ref={el}></span>
            </p>
            <div className="w-full contents md:flex">
              <Button className="bg-rojo mt-10 text-snow uppercase">
                Descubre nuestra historia
              </Button>
            </div>
            <div className="mt-8">
              <ul className="flex gap-4 items-center">
                <li>
                  <a href="">
                    <Tooltip
                      showArrow
                      placement="bottom"
                      content="Facebook"
                      classNames={{
                        base: "py-2 px-4 shadow-xl text-black dark:bg-snow dark:text-oscuro bg-gradient-to-br from-white to-neutral-400",
                        arrow: "bg-neutral-400 dark:bg-snow",
                      }}
                    >
                    <img className="dark:invert" src={facebook} alt="Imagen Facebook" width="40px" height="40px"/>
                    </Tooltip>
                  </a>
                </li>
                <li>
                <a href="">
                    <Tooltip
                      showArrow
                      placement="bottom"
                      content="Instagram"
                      classNames={{
                        base: "py-2 px-4 shadow-xl text-black dark:bg-snow dark:text-oscuro bg-gradient-to-br from-white to-neutral-400",
                        arrow: "bg-neutral-400 dark:bg-snow",
                      }}
                    >
                    <img className="dark:invert" src={instagram} alt="Imagen Instagram" width="40px" height="40px"/>
                    </Tooltip>
                  </a>
                </li>
                <li>
                <a href="">
                    <Tooltip
                      showArrow
                      placement="bottom"
                      content="Tik-Tok"
                      classNames={{
                        base: "py-2 px-4 shadow-xl text-black dark:bg-snow dark:text-oscuro bg-gradient-to-br from-white to-neutral-400",
                        arrow: "bg-neutral-400 dark:bg-snow",
                      }}
                    >
                    <img className="dark:invert" src={tiktok} alt="Imagen TikTok" width="45px" height="40px"/>
                    </Tooltip>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="row-start-1 row-end-2">
            <img className="mx-auto w-4/5" src={burger} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default IndexContent;
