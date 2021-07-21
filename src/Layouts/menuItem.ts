import { MenuItemType } from '@paljs/ui/types';

import { storeMenu } from 'components/redux/storeMenu';
	
const items = () => {
	
	
	let menuData = {};
	
	console.log(storeMenu.getState().menu);	
    if(storeMenu.getState().menu ==="ganjil_genap"){
		 menuData = {
			title: 'Ganjil Genap',
			icon: { name: 'shuffle-2-outline' },
			children: [
			  {
				title: 'Cek Ganjil Genap',
				link: { href: '/ganjilGenap/cekGanjilGenap' },
			  },
			  {
				title: 'Deret Ganjil Genap',
				link: { href: '/ganjilGenap/deretGanjilGenap' },
			  }
			],
	  }
    }
	else if(storeMenu.getState().menu ==="komposit_prima"){
		 menuData = {
			title: 'Komposit Prima',
			icon: { name: 'shuffle-2-outline' },
			children: [
			  {
				title: 'Cek Komposit Prima',
				link: { href: '/kompositPrima/cekKompositPrima' },
			  },
			  {
				title: 'Deret Komposit Prima',
				link: { href: '/kompositPrima/deretKompositPrima' },
			  }
			],
	  }
    }
	
const itemsData: MenuItemType[] = [

  {
			title: 'Home Page',
			icon: { name: 'home' },
			link: { href: '/dashboard' },
  },
  {
    title: 'FEATURES',
    group: true,
  },
  
  {
    title: 'Extra Components',
    icon: { name: 'star-outline' },
    children: [
      {
        title: 'Accordion',
        link: { href: '/extra-components/accordion' },
      },
      {
        title: 'Actions',
        link: { href: '/extra-components/actions' },
      },
      {
        title: 'Alert',
        link: { href: '/extra-components/alert' },
      },
      {
        title: 'List',
        link: { href: '/extra-components/list' },
      },
      {
        title: 'Spinner',
        link: { href: '/extra-components/spinner' },
      },
      {
        title: 'Progress Bar',
        link: { href: '/extra-components/progress' },
      },
      {
        title: 'Tabs',
        link: { href: '/extra-components/tabs' },
      },
      {
        title: 'Chat',
        link: { href: '/extra-components/chat' },
      },
      {
        title: 'Cards',
        link: { href: '/extra-components/cards' },
      },
      {
        title: 'Flip Card',
        link: { href: '/extra-components/flip-card' },
      },
      {
        title: 'Reveal Card',
        link: { href: '/extra-components/reveal-card' },
      },
    ],
  },
  menuData
];

return itemsData;
}


export default items;
