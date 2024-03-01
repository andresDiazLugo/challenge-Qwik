import { $, useSignal } from '@builder.io/qwik';

export const useCounter = () => {
    const counter = useSignal(0);
    const sumCounter = $( ()=>{
        counter.value++
    } )
    const restCounter = $( ()=>{
        counter.value--
    } )
    return {
        counter,
        sumCounter,
        restCounter
    }
};