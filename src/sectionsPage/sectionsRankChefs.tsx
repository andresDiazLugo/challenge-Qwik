import { component$ } from '@builder.io/qwik';

export const SectionsRankChefs = component$(() => {
  return(
    <section class="flex flex-col justify-center items-center gap-[90px] mt-[80px] mb-[80px]">
        <h2 class="text-[25px] font-[700] leading-[34.05px] text-primary">Top 3 Chefs estelares</h2>
        <div class="max-w-[960px] lg:h-[465px] m-auto grid grid-cols-auto lg:grid-cols-3 gap-[40px]">
            <div class="rounded-[10px] relative" >
                <img width="288" height="465" class="w-full h-full rounded-[10px] object-cover" src="/img/chef2.webp" alt="chef-imagen"/>
                <div class="flex justify-center items-center absolute inset-0 w-full  h-[60px] top-1 ">
                    <img width="160" height="160" src="/svg/hat2.svg" alt="chef-imagen"/>
                </div>
            </div>
            <div class="rounded-[10px] relative">
                <img width="288" height="465" class="w-full h-full rounded-[10px] object-cover" src="/img/chef3.webp" alt="chef-imagen"/>
                <div class="flex justify-center items-center absolute inset-0 w-full  h-[60px] top-1 ">
                    <img width="180" height="180" src="/svg/hat1.svg" alt="chef-imagen"/>
                </div>
            </div>
            <div class="rounded-[10px] relative">
                <img width="288" height="465" class="w-full h-full rounded-[10px] object-cover" src="/img/chef4.webp" alt="chef-imagen"/>
                <div class="flex justify-center items-center absolute inset-0 w-full  h-[60px] top-1 ">
                    <img width="140" height="140" src="/svg/hat3.svg" alt="chef-imagen"/>
                </div>
            </div>
            
        </div>
    </section>
  )
});