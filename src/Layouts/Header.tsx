import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled, { DefaultTheme } from 'styled-components';
import Select from '@paljs/ui/Select';
import { LayoutHeader } from '@paljs/ui/Layout';
import { EvaIcon } from '@paljs/ui/Icon';
import { Button } from '@paljs/ui/Button';
import { Actions } from '@paljs/ui/Actions';
import ContextMenu from '@paljs/ui/ContextMenu';
import User from '@paljs/ui/User';
import { breakpointDown } from '@paljs/ui/breakpoints';
import { storeMenu } from 'components/redux/storeMenu';
import {storeLogin} from 'components/redux/storeLogin';
import {genFunctions} from 'genFunctions/genFunctions';
const HeaderStyle = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  ${breakpointDown('sm')`
    .right{
      display: none;
    }
  `}
  .right > div {
    height: auto;
    display: flex;
    align-content: center;
  }
  .logo {
    font-size: 1.25rem;
    white-space: nowrap;
    text-decoration: none;
  }
  .left {
    display: flex;
    align-items: center;
    .github {
      font-size: 18px;
      margin-right: 5px;
    }
  }
`;

const Label = styled.span`
  display: flex;
  align-items: center;
`;

const SelectStyled = styled(Select)`
  min-width: 150px;
`;

const SelectStyleBil = styled(Select)`
  min-width: 250px;
`;

interface HeaderProps {
  toggleSidebar: () => void;
  theme: {
    set: (value: DefaultTheme['name']) => void;
    value: DefaultTheme['name'];
  };
  changeDir: () => void;
  dir: 'rtl' | 'ltr';
}

const Header: React.FC<HeaderProps> = (props) => {
	
  let username = 	""
  
  if(storeLogin.getState().authUserName){
			username = capitalizeFirstLetter(storeLogin.getState().authUserName)
		}
  const router = useRouter();
  const ChangebilMenu = (e) => {
	  //console.log(e.value)
	  storeMenu.dispatch({ type: 'CHANGE_STATE', payload: { addmenu:e.value } })
	  router.push('/');
	  
  };
  
  function capitalizeFirstLetter(string){
	  return string.charAt(0).toUpperCase() + string.slice(1);
  }
  const bilMenu = () => [
    {
      value: 'ganjil_genap',
      label: (
        <Label>
          <EvaIcon name="droplet" options={{ fill: '#a6c1ff' }} />
          Bilangan Ganjil Genap
        </Label>
      ),
    },
    {
      value: 'komposit_prima',
      label: (
        <Label>
          <EvaIcon name="droplet" options={{ fill: '#192038' }} />
          Bilangan Komposit Prima
        </Label>
      ),
    },
  ];
  const themeOptions = () => [
    {
      value: 'default',
      label: (
        <Label>
          <EvaIcon name="droplet" options={{ fill: '#a6c1ff' }} />
          Default
        </Label>
      ),
    },
    {
      value: 'dark',
      label: (
        <Label>
          <EvaIcon name="droplet" options={{ fill: '#192038' }} />
          Dark
        </Label>
      ),
    },
    {
      value: 'cosmic',
      label: (
        <Label>
          <EvaIcon name="droplet" options={{ fill: '#5a37b8' }} />
          Cosmic
        </Label>
      ),
    },
    {
      value: 'corporate',
      label: (
        <Label>
          <EvaIcon name="droplet" options={{ fill: '#3366ff' }} />
          Corporate
        </Label>
      ),
      selected: true,
    },
  ];
  return (
    <LayoutHeader fixed>
      <HeaderStyle>
        <Actions
          size="Medium"
          actions={[
            {
              icon: { name: 'menu-2-outline' },
              url: {
                onClick: props.toggleSidebar,
              },
            },
            {
              content: (
                <Link href="/">
                  <a className="logo">User & Contact</a>
                </Link>
              ),
            },
            {
              content: (
                <SelectStyled
                  instanceId="react-select-input"
                  isSearchable={false}
                  shape="SemiRound"
                  placeholder="Themes"
                  value={themeOptions().find((item) => item.value === props.theme.value)}
                  options={themeOptions()}
                  onChange={({ value }: { value: DefaultTheme['name'] }) => props.theme.set(value)}
                />
              ),
            },
			{
              content: (
                <SelectStyleBil
                  instanceId="react-select-input"
                  isSearchable={false}
                  shape="SemiRound"
                  placeholder="Pilih Bilangan"
                  value={bilMenu().find((item) => item.value === props.theme.value)}
                  options={bilMenu()}
				  onChange={(e) => {
                      ChangebilMenu(e);
				  }}
                />
              ),
            },
            {
              content: (
                <Button size="Small" onClick={() => props.changeDir()}>
                  {props.dir}
                </Button>
              ),
            },
          ]}
        />
        <Actions
          size="Small"
          className="right"
          actions={[
            {
              content: (
                <ContextMenu
                  nextJs
                  style={{ cursor: 'pointer' }}
                  placement="bottom"
                  currentPath={router.pathname}
                  items={[
                    { title: 'Profile', link: { href: '/modal-overlays/tooltip' } },
                    { title: 'Log out', link: { href: '/logout' } },
                  ]}
                  Link={Link}
                >
                  <User image="url('/icons/icon-72x72.png')" name={username} title="IT Developer" size="Medium" />
                </ContextMenu>
              ),
            },
          ]}
        />
      </HeaderStyle>
    </LayoutHeader>
  );
};
export default Header;
