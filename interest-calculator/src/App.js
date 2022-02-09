import styled from 'styled-components';
import {Formik, Form} from 'formik';
import Input from './Components/Input';
import Button from './Components/Button'

const compoundInterest=(deposit,contribution,years, rate)=>{
  let total= deposit
  for(let i =0; i < years; i ++){
    total=(total + contribution) * (rate + 1)
  }
  return Math.round(total)
}

function App() {
  const handleSubmit=({deposit, contribution, years, rate})=>{
    const val=compoundInterest(Number(deposit),Number(contribution),Number(years),Number(rate))
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
      </Section>
    </Container>
  );
}

export default App;
