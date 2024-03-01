import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';

export const SectionRegister = component$(() => {
  return (
  <section class="flex flex-col lg:flex-row gap-[16px] mt-14">
    <div class="w-full lg:w-[800px] h-[376px] bg-[#1E1E1E] flex flex-col justify-center gap-[16px]">
        <div class="flex justify-center items-center gap-[40px]">
            <Link class="text-[16px] font-[700] w-[151px] pt-[8px] pr-[16px] pb-[8px] pl-[16px] bg-primary text-[#1E1E1E] text-center rounded-[5px] border-none" href='#'>Chef</Link>
            <Link class="text-[16px] font-[700] w-[151px] pt-[8px] pr-[16px] pb-[8px] pl-[16px] bg-primary text-[#1E1E1E] text-center rounded-[5px] border-none" href='#'>Usuario</Link>
        </div>
        <div  class="W-[10PX]">
            <p class="text-[#FFFFFF] leading-[27.24px] text-[20px] font-[400] W-[10PX] text-center">Regístrate y forma parte de la revolución</p>
            <p class="text-[#FFFFFF] leading-[27.24px] text-[20px] font-[400] W-[10PX] text-center">de la industria culinaria</p> 
        </div>
    </div>
    <div class="h-[376px] bg-[#1E1E1E]  w-full flex justify-center items-center">
        <img width="491" height="327" src='/svg/groupCheff.svg'/>
    </div>
  </section>
  )
});