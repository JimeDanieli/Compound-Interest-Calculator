import styled from 'styled-components';
import {Formik, Form} from '.formik';
import Input from './Components/Input'

const Container= styled.div`
display:flex;
justify-content:center;
height:100%;
align-items:center
`
const Section=styled.div`
  background-color:#eee;
  border-top:solid 7px palevioletred ;
  padding: 20px 25px;
  width: 500px;
  box-shadow: 0px 2px 3 px rgb(0,0,0,0.3)
`
function App() {
  const handleSubmit=()=>{
    
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
            </Form>
        </Formik>
      </Section>
    </Container>
  );
}

export default App;
