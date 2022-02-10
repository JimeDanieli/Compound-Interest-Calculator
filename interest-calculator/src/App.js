import { useState } from 'react';
import {Formik, Form} from 'formik';
import Input from './Components/Input';
import Button from './Components/Button'
import Section from './Components/Section';
import Container from './Components/Container';
import Balance from './Components/Balance'

const compoundInterest=(deposit,contribution,years, rate)=>{
  let total= deposit
  for(let i =0; i < years; i ++){
    total=(total + contribution) * (rate + 1)
  }
  return Math.round(total)
}
//para poder mostrar el valor que nos devuelve el interes compuesto, vamos a necesitar useState
function App() {
  const [balance, setBalance]=useState('')
  const handleSubmit=({deposit, contribution, years, rate})=>{
    const val=compoundInterest(Number(deposit),Number(contribution),Number(years),Number(rate))
    setBalance(val)
  }
  return (
    <Container>
      <Section>
        <Formik
          initialValues={{
            deposit:'',
            contributions:'',
            years:'',
            rate:'',
          }}
          onSubmit={handleSubmit}
          >
            <Form>
              <Input name='deposit' label='Initial Deposit'/>
              <Input name='contibution' label='Anual Contribution'/>
              <Input name='years' label='Years'/>
              <Input name='rate' label='Estimated Interest Rate'/>
              <Button>Calculate</Button>
            </Form>
        </Formik>
        {balance !== '' ?<Balance>Final balance : {balance}</Balance>  : null}
      </Section>
    </Container>
  );
}

export default App;
