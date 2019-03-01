import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('.banner-typed-text', {
    strings: ["Drink water", "Change your life, learn to drink"],
    typeSpeed: 100,
    loop: false
  });
};

export { loadDynamicBannerText };
