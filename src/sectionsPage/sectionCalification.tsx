import { component$ } from '@builder.io/qwik';

export const SectionCalification = component$(() => {
  return( 
  <section class="grid grid-cols-auto  lg:grid-cols-3">
    <div class="h-[402px] bg-white">
        <img width="478" height="402" class="object-cover w-full h-full" src='/img/platoCalification.webp' alt="platillo-1"/>
    </div>
    <div  class="h-[402px] bg-white relative">
        <img width="478" height="402" class="object-cover w-full h-full" src='/img/platoCalification2.webp'  alt="platillo-2"/>
        <div class="absolute inset-0 w-full h-full bg-[#1E1E1E] bg-opacity-50">
            <div class="flex flex-col justify-center gap-[110px] items-center h-full">
                <div class="flex flex-col justify-center items-center gap-5 ">
                    <p class="font-[700] text-[30px] leading-[40.85px] text-[#F5F5F5]">Nombre del plato</p>
                    <div class="flex items-center justify-center gap-2">
                        <img width="83.5" height="83.5" src="/img/chef.webp" alt="chef-imagen"/>
                        <span class="font-[400] text-[20px] leading-[27.24px] text-[#F5F5F5]">Nombre del chef</span>
                    </div>
                </div>
                <div>
                    <img width="240" height="44" src='/svg/startsCalification.svg'  alt="estrella-calificacion"/>          
                </div>
            </div>
        </div>
    </div>
    <div  class="h-[402px] bg-white">
        <img width="478" height="402" class="object-cover w-full h-full" src='/img/platoCalification3.webp'  alt="platillo-3"/>    
    </div>

  </section>
  )
});