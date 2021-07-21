import Select from '@paljs/ui/Select';
import { Radio } from '@paljs/ui/Radio';
import { Card, CardBody } from '@paljs/ui/Card';
import { Checkbox } from '@paljs/ui/Checkbox';
import { InputGroup } from '@paljs/ui/Input';
import Col from '@paljs/ui/Col';
import Row from '@paljs/ui/Row';
import React, { useState,useRef } from 'react';
import styled from 'styled-components';
import Layout from 'Layouts';
import { Button, ButtonLink } from '@paljs/ui/Button';
import Tooltip from '@paljs/ui/Tooltip';
import { Toastr, ToastrRef, ToastrProps } from '@paljs/ui/Toastr';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

const Input = styled(InputGroup)`
  margin-bottom: 10px;
`;

const InputPage = () => {
	const toastrRef = useRef<ToastrRef>(null);
   const [data, setData] = useState<ToastrProps>({
    position: 'topEnd',
    status: 'Primary',
    duration: 2000,
    hasIcon: true,
    destroyByClick: true,
    preventDuplicates: false,
  });
   const [result, setResult] = useState("");	
   const SubmitForm = async(e) => {
	  let Dataresult = "";
	  e.preventDefault();	
	  if(e.target.bilangan.value){
		  if(((parseInt(e.target.bilangan.value) % 2 === 0 || parseInt(e.target.bilangan.value) % 4 === 0 || parseInt(e.target.bilangan.value) % 5 === 0 || parseInt(e.target.bilangan.value) % 7 === 0) && parseInt(e.target.bilangan.value) > 7 ) || parseInt(e.target.bilangan.value) === 4){
			  
			  Dataresult = "Komposit";
		  }
		  else{
			  Dataresult = "Prima";
		  } 
		 theResult(Dataresult,e.target.bilangan.value);
		  
	  }
	 
	 
	 
   }
   const theResult = async(data,bilanganData) => {
	  setResult("Hasil => "+bilanganData+" : "+data);
	   showToastr()
   }
   const showToastr = () => {
    toastrRef.current?.add("See the result below", "Information", { ...data });
  };
  return (
    <Layout title="Cek Prima & Komposit">
	<form onSubmit={(e) => {
                      SubmitForm(e);
				}}>
      <Row>
        <Col breakPoint={{ xs: 12, md: 6 }}>
		<Toastr ref={toastrRef} />
          <Card>
            <header>Form Check Bilangan Prima Komposit</header>
            <CardBody>
			<header style={{marginBottom: "10px"}}>Bilangan</header>
              <Tooltip className="with-margin inline-block" trigger="hover" placement="right"  status="Success" content="Please Enter A Number">
              <Input fullWidth status="Success">
                <input type="number" name="bilangan" placeholder="Masukkan Bilangan" required />
              </Input>
			  </Tooltip>
              <Row>
			  <Col breakPoint={{ xs: 3 }}>
               <Tooltip className="with-margin inline-block" trigger="hover" placement="left"  status="Info" content="Click to submit">
               <Button type="submit "fullWidth appearance="hero">
                      Submit
                    </Button>
              </Tooltip>
				</Col>	
              </Row>
			  <header style={{marginTop: "10px"}}>{result}</header>
            </CardBody>
          </Card>
        </Col>
      </Row>
	  </form>
    </Layout>
  );
};
export default InputPage;
