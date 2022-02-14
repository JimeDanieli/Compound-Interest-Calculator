import { useState } from 'react';
import {Formik, Form} from 'formik';
import * as Yup from 'yup';
import Input from './Components/Input';
import Button from './Components/Button'
import Section from './Components/Section';
import Container from './Components/Container';
import Balance from './Components/Balance'

const compoundInterest=(deposit, contribution, years, rate)=>{
  let total= deposit
  for(let i =0; i < years; i ++){
    total=(total + contribution) * (rate + 1)//es mas uno porque queremos que sea el total mas el rate. uno representa mi total
  }
  return Math.round(total)
}
const formatter =new Intl.NumberFormat('en-US',{
  style:'currency',
  currency:'USD',
  minimumFractionDigits:2,
  maximumFractionDigits:2,
})
//para poder mostrar el valor que nos devuelve el interes compuesto, vamos a necesitar useState
function App() {
  const [balance, setBalance]=useState('')
  const handleSubmit=({deposit, contribution, years, rate})=>{
    const val=compoundInterest(Number(deposit),Number(contribution),Number(years),Number(rate))
    setBalance(formatter.format(val))
  }
  return (
    <Container>
      <Section>
        <Formik
          initialValues={{
            deposit:'',
            contribution:'',
            years:'',
            rate:'',
          }}
          onSubmit={handleSubmit}
          validationSchema={Yup.object({
            deposit: Yup.number().required('Required').typeError('Must insert a number'),
            contribution: Yup.number().required('Required').typeError('Must insert a number'),
            years: Yup.number().required('Required').typeError('Must insert a number'),
            rate: Yup.number().required('Required').typeError('Must insert a number').min(0,'Miminum value must be greater than 0').max(1, 'Maximum value must be lower than 1'),
          })}
          >
            <Form>
              <Input name='deposit' label='Initial Deposit'/>
              <Input name='contribution' label='Anual Contribution'/>
              <Input name='years' label='Years'/>
              <Input name='rate' label='Estimated Interest Rate'/>
              <Button type='submit'>Calculate</Button>
            </Form>
        </Formik>
        {balance !== '' ?<Balance>Final balance: {balance}</Balance>  : null}
      </Section>
    </Container>
  );
}

export default App;
