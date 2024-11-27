import type { Site } from '$lib/types/site';
import type { Giscus } from '$lib/types/giscus';
import type { DD } from '$lib/types/dd';

import Avatar from '$assets/avatar.png';
import Avatar_128 from '$assets/avatar_rb.jpg?w=128&h=128&format=avif;webp&imagetools';
import Avatar_48_PNG from '$assets/avatar_rb.jpg?w=48&h=48&imagetools';
import Avatar_96_PNG from '$assets/avatar_rb.jpg?w=96&h=96&imagetools';
import Avatar_192_PNG from '$assets/avatar_rb.jpg?w=192&h=192&imagetools';
import Avatar_512_PNG from '$assets/avatar_rb.jpg?w=512&h=512&imagetools';

import SiteCover from '$assets/qwer.webp';

export const siteConfig: Site.Config = {
  url: 'https://svelte-qwer.vercel.app',
  title: 'RBlog',
  subtitle: '💻Tech 🎸MusicImagization 🚄Travel',
  description: '💻Tech 🎸MusicImagization 🚄Travel',
  lang: 'en',
  timeZone: 'Asia/Taipei',
  since: 2022,
  cover: SiteCover,
  author: {
    name: 'RB Lin',
    status: '🎞️',
    statusTip:
      '<a href="https://www.youtube.com/watch?v=KYuz4C9yDS8" target="_blank" rel="external noopener noreferrer" style="color:#4c8181" onMouseOver="this.style.color=\'#a6c0c0\'" onMouseOut="this.style.color=\'#4c8181\'" >2023 北海道Full ver.</a> 全力趕工中 !',
    avatar: Avatar,
    avatar_128: Avatar_128,
    avatar_48_png: Avatar_48_PNG,
    avatar_96_png: Avatar_96_PNG,
    avatar_192_png: Avatar_192_PNG,
    avatar_512_png: Avatar_512_PNG,
    website: 'https://github.com/kwchang0831/svelte-QWER',
    github: 'https://github.com/RBVoidLin',
    email: 'rblin@csie.io',
    bio: `Make Big Goals <br/> Practice makes perfect!`,
  },
};

export const headConfig: Site.Head = {
  // Used for IndieWeb
  me: ['https://github.com/RBVoidLin'],
  custom: ({ dev }) =>
    dev
      ? [
          // For Development Environment
        ]
      : [
          // For Production Environment

          // Replace the following with your own setting

          // Plausible
          // '<link rel="preconnect" href="https://plausible.kwchang0831.dev" />',
          // '<script defer type="text/partytown" data-domain="svelte-qwer.vercel.app" src="https://plausible.kwchang0831.dev/js/plausible.js"></script>',
          // Google tag (gtag.js)
          `<script type="text/partytown" src="https://www.googletagmanager.com/gtag/js?id=G-LQ73GWF6XT"></script>`,
          `<script type="text/partytown">
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-LQ73GWF6XT');
          </script>`,
        ],
};

export const dateConfig: Site.DateConfig = {
  toPublishedString: {
    locales: 'en-US',
    options: {
      year: 'numeric',
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      timeZone: `${siteConfig.timeZone}`,
    },
  },
  toUpdatedString: {
    locales: 'en-US',
    options: {
      year: 'numeric',
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      timeZone: `${siteConfig.timeZone}`,
    },
  },
};

// Replace with your own Giscus setting
// See https://giscus.app/
export const giscusConfig: Giscus.Config = {
  enable: true,
  id: 'giscus-comment',
  repo: 'RBVoidLin/rblog',                     //import.meta.env.QWER_GISCUS_REPO,
  repoId: 'R_kgDOJHAHOg',                      //import.meta.env.QWER_GISCUS_REPO_ID,
  category: 'all',                             //import.meta.env.QWER_GISCUS_CATEGORY,
  categoryId: 'all',                           //import.meta.env.QWER_GISCUS_CATEGORY_ID,
  mapping: 'pathname',
  reactionsEnabled: '1',
  emitMetadata: '0',
  inputPosition: 'bottom',
  loading: 'lazy',
  lang: 'en',
  'data-strict': '0',
};


export const navConfig: (DD.Nav | DD.Link)[] = [
  {
    name: '關於',
    url: '/',
  },
  {
    name: '科。💻',
    url: '/tech',
  },
  {
    name: '繪。音 🎸',
    url: '/music_coloring',
    
  },
  {
    name: '旅。食 🚄',
    url: '/trip',
  },
];

export const mobilenavConfig: DD.Nav = {
  orientation: 2,
  links: [
    {
      name: '關於',
      url: '/',
    },
    {
      name: '科。💻',
      url: '/tech',
    },
    {
      name: '繪。音 🎸',
      url: '/music_coloring',
      
    },
    {
      name: '旅。食 🚄',
      url: '/trip',
    },
  ],
};
