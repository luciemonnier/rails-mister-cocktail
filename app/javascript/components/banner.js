import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('.banner-typed-text', {
    strings: ["Change your life, learn to drink", "Drink water"],
    typeSpeed: 100,
    loop: true
  });
};

export { loadDynamicBannerText };
