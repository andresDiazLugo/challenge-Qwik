import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export const Header = component$(() => {
    return (
      <header class='fixed top-0 left-0 w-full z-20 flex justify-center items-center'>
        <div class="w-[90%] mt-7 flex flex-col gap-4 lg:flex-row lg:gap-0 justify-between items-center">
            <ul class="flex items-center justify-center gap-[12px] text-primary">
              <li class="text-[12px] font-[400] leading-[16.34px] cursor-pointer">Home</li>
              <li class="text-[12px] font-[400] leading-[16.34px] cursor-pointer">Chef</li>
              <li class="text-[12px] font-[400] leading-[16.34px] cursor-pointer">Restaurantes</li>
              <li class="text-[12px] font-[400] leading-[16.34px] flex gap-2 items-center justify-center cursor-pointer">Búsqueda <img width={9.89} height={5.74} src="/svg/arrowdown.svg" /></li>
            </ul>
            <p class="text-[20px] font-[800] text-primary cursor-pointer flex items-center">Logo</p>
          <div class="flex justify-center items-center gap-3">
          <img width={24} height={24} src="svg/search.svg"/>
          <div class="flex gap-[8px] justify-center items-center">
            <Link class="text-center rounded-[5px] text-[12px] font-[700] leading-[13.62px] text-[#1E1E1E] pt-[4px] pr-[16px] pb-[4px] pl-[16px] bg-primary border-none" href="#">Iniciar Sesión</Link>           
            <Link class="text-center rounded-[5px] text-[12px] font-[700] leading-[13.62px] text-[#1E1E1E] pt-[4px] pr-[16px] pb-[4px] pl-[16px] bg-primary border-none" href="#" >Crear cuenta</Link>
          </div>
        </div>
        </div>
    
    </header>
    )
    });
