import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';

interface IdataCart {
    id: number;
    img: string;
    name: string;
    width?:number;
    height?:number;
    especialidad?:string;
    ubicacion?:string;
}
interface Props{
    dataCard: IdataCart[];
    title: string;
    img?: string | undefined;
    renderCardNumber?: number;
}

export const Carousel = component$(({ dataCard, title, img, renderCardNumber = 4}:Props) => {
    
  return (
       <div class="flex justify-center items-center" style={`background-image: url(${img}); background-size: cover; background-position: center; background-repeat: no-repeat;`} >
            <div class="w-full" >
                <h2 class="text-[25px] font-[700] leading-[34.05px] text-primary text-center mb-[32px]">{ title }</h2>
                <div class="w-full h-full m-auto relative">
                    <div class=" flex items-center  justify-between absolute inset-0 w-full h-full" >
                        <button class="lg:ml-32 z-20">
                            <img width="36"  height="36" src="/svg/arrowleft.svg" />
                        </button>
                        <button class="lg:mr-32 z-20">
                            <img width="36"  height="36" src="/svg/arrowright.svg" />
                        </button>
                    </div>
                    <div id="wrapper" class="max-w-[1100px] w-full  relative m-auto">
                        <ul id="carouselComponent" class={`w-full grid grid-flow-col grid-cols-auto gap-[70px] scroll-snap-type-x-mandatory p-0 scroll-behavior-smooth scrollbar-hidden overflow-y-hidden overflow-x-hidden`} style={`grid-auto-columns:calc((100% / ${renderCardNumber}) - 52px);`}>
                        {dataCard.map( ({ img, id, width, height }) => (
                            <li class="cursor-pointer rounded-lg" key={id}>
                                <img width={width} height={height} class="w-full h-auto object-cover rounded-lg" src={img} alt={`Carousel Image ${id}`}/>
                            </li>
                        ))}
                        </ul>
                    </div>
                </div>
                <div class="flex  justify-center  items-center mt-[32px]">
                    <Link class="text-[16px] font-[700] w-[151px] pt-[8px] pr-[16px] pb-[8px] pl-[16px] bg-primary text-[#1E1E1E] text-center rounded-[5px] border-none" href='#'>Ver todos</Link>
                </div>
            </div>
            
       </div>
  )
});