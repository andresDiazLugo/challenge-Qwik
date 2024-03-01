import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { SectionHeader } from  "@sectionsPage/sectionHeader";
import { SectionRegister } from  "@sectionsPage/SectionRegister";
import { SectionCalification } from "@sectionsPage/sectionCalification";
import { SectionsRankChefs } from "@sectionsPage/sectionsRankChefs";
import { Carousel } from "@components/shared";
import { dataChefs } from "@data/dataChefs";
import { dataRestaurants } from "@data/dataRestaurants";



export default component$(() => {

  return (
    <>
      <SectionHeader/>
      <SectionRegister/>
      <Carousel dataCard={dataChefs} title="Chefs" renderCardNumber={4}/>
      <SectionCalification/> 
      <SectionsRankChefs/>
      <Carousel dataCard={dataRestaurants} title="Restaurantes" renderCardNumber={3} img="img/restaurante4.webp"/>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
