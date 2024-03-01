import { component$ } from "@builder.io/qwik";
// import { useServerTimeLoader } from "../../../routes/layout";
// import styles from "./footer.module.css";

export const Footer = component$(() => {
  // const serverTime = useServerTimeLoader();
  return (
    <footer class=" p-3 lg:pt-[79px] lg:pr-[32px] lg:pb-[32px] lg:pl-[32px] bg-[#1E1E1E] text-primary">
      <div class="m-w-[1260px] xl:w-[1260px]  m-auto grid lg:grid-cols-2 gap-[10px] lg:gap-0" >
        <div class=" w-full lg:w-[703px] flex flex-col lg:flex-row items-center justify-center lg:ustify-between gap-[60px]">
          <div class="maz-w-[398px]" >
            <p class="text-primary]">About us</p>
            <p class="text-[primary]">Lorem ipsum dolor sit amet consectetur. Sed lectus sagittis cursus at tortor. Lobortis lectus mauris tortor leo viverra quisque est donec viverra.</p>
          </div>
          <div class="text-center">
            <h3 class="text-primary">Logo</h3>
            <p>Correo</p>
          </div>
        </div>
        <div class="flex flex-col items-center lg:items-end   justify-center">
          <p>Comunidad</p>
          <p>input</p>
          <p>input</p>
        </div>
      </div>
      <div class="flex justify-center items-center gap-[35px] mt-[48px]">
        <p>Nombre 2023 All right reserved</p>
        <a href="#">Policy privacy</a>
        <a href="#">Security</a>
        <a href="#">Therns of use</a>
      </div>
    </footer>
  );
});
