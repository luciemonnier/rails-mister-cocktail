import 'bootstrap';
import 'select2/dist/css/select2.css';

import { initSelect2 } from '../components/init_select2';

initSelect2();

import { loadDynamicBannerText } from '../components/banner';
loadDynamicBannerText();


import { ingredientsOnHover } from '../components/ingredients_on_hover';
ingredientsOnHover();
