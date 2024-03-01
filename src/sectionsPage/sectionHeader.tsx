/* eslint-disable qwik/jsx-img */
import { component$, useSignal,useVisibleTask$, $} from "@builder.io/qwik";

import { dataMainCarousel } from "@data/dataMainCarousel";
import { LinksInfo } from "@components/shared";

export const SectionHeader = component$(() => {
const containerCards = useSignal<HTMLLIElement>();
const sizeCard = useSignal(0);
const referenceImg = useSignal(0);

useVisibleTask$( ( { track} ) => {
  track( () =>  referenceImg.value)
  if(containerCards.value){
    const card:HTMLLIElement = containerCards.value.firstChild as HTMLLIElement;
    sizeCard.value = card.getBoundingClientRect().width
  }  
})
const eventBtnRight = $((e: string) => {
  if(containerCards.value){
    if(e === "RIGHT"){
      referenceImg.value = (dataMainCarousel.length-1 >  referenceImg.value) ?referenceImg.value + 1 : dataMainCarousel.length-1;
    }
    if(e === "LEFT"){
      referenceImg.value -= (referenceImg.value !== 0) ? 1 : 0;
    }
    const currentScrollLeft = containerCards.value.scrollLeft;
    const newScrollLeft = (e === "RIGHT") ? currentScrollLeft + sizeCard.value +20 : currentScrollLeft - sizeCard.value -20 ;
    containerCards.value.scrollLeft = newScrollLeft;
  }
});
  return (
  <section id="wrapper" class="h-[100vh] relative">
    <button onClick$={()=> eventBtnRight("LEFT")} class="absolute left-24 top-[380px] z-10">
      <img width="36"  height="36" src="/svg/arrowleft.svg" />
    </button>
    <ul ref={containerCards} id="carousel" class="h-full w-full  grid grid-flow-col auto-cols-[100%] gap-[20px] scroll-snap-type-x-mandatory p-0 scroll-behavior-smooth scrollbar-hidden overflow-y-hidden overflow-x-hidden" style="scroll-behavior: smooth; scrollbar-width: 0;">

      {dataMainCarousel.map( ({ img, id }) => (
        <li  class="w-full h-full" key={id}>
          <img width="1024" height="500" class="w-full h-full object-cover" src={img} alt={`Carousel Image ${id}`}/>
        </li>
      ))}
     </ul>
     <button onClick$={()=> eventBtnRight("RIGHT")} class="absolute right-24 top-[380px] z-10">
      <img width="36"  height="36" src="/svg/arrowright.svg" />
    </button>
    <div class="absolute inset-0 w-full h-full bg-black bg-opacity-70"></div>
    <div class="absolute bottom-16 w-full">
      <LinksInfo/>
      <div class="flex justify-center gap-[4px] mt-[24px] ">
      {dataMainCarousel.map( ({ id }) => (
        <div class={`${id == referenceImg.value ? 'bg-primary' : 'bg-[#D9D9D9]'} w-[14px] h-[14px] rounded-full`} key={id}></div>
      ))}
      </div>
    </div>
  </section>
  )
});