import { component$ } from '@builder.io/qwik';

export const LinksInfo = component$(() => {
  return (
    <div class="flex items-center justify-center gap-[24px] p-0 m-auto">
        <a href='#'><img width="51" height="51" src="/svg/instagram.svg"/></a>
        <a href='#'><img width="51" height="51" src="/svg/linkedin.svg" /></a>
        <a href='#'><img width="51" height="51" src="/svg/youtube.svg" /></a>
        <a href='#'><img width="51" height="51" src="/svg/twitter.svg" /></a>
    </div>
  )
});