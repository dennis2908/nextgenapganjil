import { Button } from '@paljs/ui/Button';
import { InputGroup } from '@paljs/ui/Input';
import React from 'react';
import Link from 'next/link';
import { useHistory } from 'react-router-dom'

import {storeLogin} from 'components/redux/storeLogin';

import Auth, { Group } from 'components/Auth';
import Socials from 'components/Auth/Socials';
import Layout from 'Layouts';

import { useRouter } from 'next/router';

export default function Signin() {
  const onCheckbox = () => {
    // v will be true or false
  };

  const router = useRouter();
  
  const history = useHistory()
	  

  const SubmitForm = async(e) => {
	  e.preventDefault();	
	  let formData = {}
		formData.username = e.target.username.value
		formData.password = e.target.password.value
		await fetch("http://localhost:9333/login", {
		  method: "post",
			body: JSON.stringify(formData)
				}).then(res => res.json())
			  .then(
				(result) => {
					if(result.Token){
						//setShowHideAl('d-block')
						storeLogin.dispatch({ type: 'CHANGE_STATE', payload: { authLogin:result.Token,authUserName:e.target.username.value } })
					 	//localStorage.setItem('username', username);
						
					}	
					
				
			});
			router.push("../")			
	
	   e.preventDefault();	
	 
  }
  
  return (
    <Layout title="Signin">
      <Auth title="Signin" subTitle="Hello! Signin with your credential">
        <form  
		onSubmit={(e) => {
                      SubmitForm(e);
				}}>
          <InputGroup fullWidth>
            <input type="text" placeholder="Enter Username" name="username" required/>
          </InputGroup>
          <InputGroup fullWidth>
            <input type="password" placeholder="Enter Password" name="password" required/>
          </InputGroup>
          <Group>
          </Group>
          <Button status="Success" type="submit" shape="SemiRound" fullWidth>
            Login
          </Button>
        </form>
      </Auth>
    </Layout>
  );
}
