import React, { useState, useRef } from "react";

import {
  RiWhatsappFill,
  RiMessengerFill,
  RiInstagramFill,
} from "react-icons/ri";
import SmButtonLink from "../components/Buttons/SmButton/SmButtonLink";

import { AiOutlineArrowRight } from "react-icons/ai";

function Contact() {
  const formRef = useRef(null);
  const scriptUrl =
    "https://script.google.com/macros/s/AKfycbyBoo5ryifpmj5TBH2FNXYt-qK7mApauYvrCTFdGoG45tRy4o8B3cuS8ah8xiUW10_pqA/exec";
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setLoading(true);

    fetch(scriptUrl, {
      method: "POST",
      //@ts-ignore
      body: new FormData(formRef.current),
    })
      .then((res) => {
        console.log("SUCCESSFULLY SUBMITTED");
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex flex-row">
      <div className="w-1/2 flex flex-col justify-center items-center text-white">
        <div>
          <h2 className="text-5xl my-10">Un projet en tête ?</h2>
        </div>
        <div>
          <div>
            <p className="text-5xl mt-10 mb-4">Je serait ravis de vous aider</p>
          </div>
          <div className="flex flex-row justify-center">
            <div>
              <SmButtonLink label={<RiWhatsappFill size={24} />} />
            </div>
            <div>
              <SmButtonLink label={<RiMessengerFill size={24} />} />
            </div>
            <div>
              <SmButtonLink label={<RiInstagramFill size={24} />} />
            </div>
          </div>
        </div>
      </div>
      {/* */}
      <div className="w-1/2">
        <form
          className="bg-white w-3/4 h-full rounded-3xl"
          name="google-sheet"
          ref={formRef}
          onSubmit={handleSubmit}
        >
          <div>
            <h3 className="ml-5 font-bold">Prenez contact:</h3>
          </div>
          <div>
            <div className="flex flex-row">
              <div>
                <label className="mx-5" htmlFor="name">
                  Votre nom:
                </label>
                <input
                  name="name"
                  id="name"
                  className="bg-gray-FORM mx-5"
                  type="text"
                ></input>
              </div>
              <div>
                <label className="mx-5" htmlFor="mail">
                  Votre mail:
                </label>
                <input
                  className="bg-gray-FORM mx-5"
                  type="mail"
                  name="mail"
                  id="mail"
                ></input>
              </div>
            </div>
            <div className="flex flex-col mx-5 my-5">
              <label htmlFor="category">Catégorie du projet:</label>

              <select className="bg-gray-FORM" name="category" id="category">
                <option value="">--Choisir une option--</option>
                <option>Divers</option>
                <optgroup label="Web">
                  <option>Site vitrine</option>
                  <option>Site multipage</option>
                  <option>Boutique/Ecommerce</option>
                </optgroup>
                <optgroup label="Design">
                  <option>Création Logo</option>
                  <option>Création affiche/flyer</option>
                  <option>Identitée graphique</option>
                </optgroup>
                <optgroup label="Vidéo">
                  <option>Publicitée courte</option>
                  <option>Édition vidéo</option>
                  <option>Tournage -18</option>
                </optgroup>
              </select>
            </div>
            <div className="flex flex-col mx-5 my-5">
              <label htmlFor="message">Catégorie du projet:</label>
              <textarea
                name="message"
                id="message"
                rows={6}
                className="bg-gray-FORM"
              ></textarea>
            </div>
          </div>
          <input
            type="submit"
            value={loading ? "Loading..." : "SEND MESSAGE"}
          />
        </form>
      </div>
    </div>
  );
}

export default Contact;
