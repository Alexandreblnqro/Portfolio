import React from "react";

function Home() {
  return (
    <div className="grid grid-cols-4 gap-5 px-6">
      <div className="bg-blue rounded-lg shadow-xl min-h-[300px] col-span-3 flex items-center">
        <div className="flex flex-col m-4 text-white">
          <div>
            <div>
              <h2 className="font-interBold text-4xl mb-2">
                Salutations ! Je suis Alexandre !
              </h2>
              <p className="font-inter text-3xl mb-6">
                Concepteur Web, infographiste et éditeur vidéo !
              </p>
            </div>
          </div>
          <div>
            <p>
              Ce qui m’intéresse le plus est de permettre à des associatons, ou
              petites entreprise de se développer dans le monde en plein
              expension du web ! Afin de leurs permettre de trouver une identité
              graphique, et de s’ouvrir à un tout nouveau marché en pleine
              expension !
            </p>
          </div>
          <div>
            <button className="text-white bg-red font-medium rounded-full text-sm px-5 py-2.5 mr-2 my-4">
              Me contacter
            </button>
            <button className="text-white bg-red font-medium rounded-full text-sm px-5 py-2.5 mr-2 my-4">
              G
            </button>
            <button className="text-white bg-red font-medium rounded-full text-sm px-5 py-2.5 mr-2 my-4">
              C
            </button>
            <button className="text-white bg-red font-medium rounded-full text-sm px-5 py-2.5 mr-2 my-4">
              S
            </button>
          </div>
        </div>
      </div>
      <div className="bg-[url('/src/assets/img/alex_background.png')] bg-cover scale-x-[-1] rounded-lg shadow-xl min-h-[300px]"></div>
      <div className="bg-[url('/src/assets/img/projects_background.jpg')] bg-cover rounded-lg shadow-xl min-h-[300px] col-span-2 flex justify-center items-center">
        <h2 className="font-interBold text-7xl text-white text-shadow-md">
          Mes projets
        </h2>
      </div>
      <div className="overflow-hidden rounded-lg shadow-xl col-span-2 ">
        <div className="bg-[url('/src/assets/img/tincoffee_background.jpg')] min-h-[300px] bg-cover flex justify-center items-center">
          <h2 className="font-interBold text-7xl text-white text-shadow-md">
            Tincoffee
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Home;
