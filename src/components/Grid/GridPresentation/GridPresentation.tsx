import React from "react";
import SmButton from "../../Buttons/SmButton/SmButton";
import SmButtonDownload from "../../Buttons/SmButton/SmButtonDownload";
import SmButtonLink from "../../Buttons/SmButton/SmButtonLink";

import { GrMail, GrGithub } from "react-icons/gr";
import { BsFillPersonFill } from "react-icons/bs";
import { HiDocumentText } from "react-icons/hi";

function GridPresentation() {
  return (
    <div className="bg-blue rounded-lg shadow-xl min-h-[300px] col-span-4 md:col-span-3 flex items-center">
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
            petites entreprise de se développer dans le monde en plein expension
            du web ! Afin de leurs permettre de trouver une identité graphique,
            et de s’ouvrir à un tout nouveau marché en pleine expension !
          </p>
        </div>
        <div className="flex flex-col items-center md:flex-row flex-wrap">
          <SmButton label={<GrMail />} url="contact" />
          <SmButtonLink
            label={<GrGithub />}
            url="https://github.com/Alexandreblnqro"
          />
          <SmButtonDownload
            label={<HiDocumentText />}
            url="/public/assets/img/cv.pdf"
            download="CV_alexandre-blanquero.pdf"
          />
          <SmButtonLink
            label={<BsFillPersonFill />}
            url="https://alexandre-blanquero.fr/"
          />
        </div>
      </div>
    </div>
  );
}

export default GridPresentation;
