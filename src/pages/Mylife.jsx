import React from "react";
import Button from "../components/util/Button";

const Mylife = () => {
  return (
    <div className="mylife">
      <p>
        Bonjour, je suis Adrien GONÇALVES, étudiant en troisième année d'une licence informatique,
        je suis un passioné de la blockchain et du Web3 cherchant à améliorer mes connaissances sur
        le sujet. J'ai tout d'abord été attiré de mon plus jeune âge vers l'informatique, les
        ordinateurs et tout se qui s'y connecte. Puis un jour j'ai découvert le monde du
        développement dans lequel j'ai décider d'entamer mes études. J'ai donc débuté ma licence en
        Septembre 2021, cependant l'été précédant j'ai entendue pour la première fois parler de
        "Bitcoin". Je me suis renseigner sur ce qu'il est dans un but financier, jusqu'à investir
        mes dix premiers euros au meilleur moment, le 26 Novembre 2021 lors de l'ATH. Par la suite
        j'ai continué mes recherches jusqu'à être subjuguer de la prouesse technologique qu'est
        Bitcoin. A partir de là j'ai décider d'en faire mon futur et de commencer en autodidacte.
        Mon objectif principal est de combiner Solidity et React pour créer une DApp.
      </p>
      <Button index={1} page={"about"} />
    </div>
  );
};

export default Mylife;
