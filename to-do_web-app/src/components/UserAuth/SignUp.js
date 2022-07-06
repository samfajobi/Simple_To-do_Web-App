import styled from "styled-components";


const Container = styled.div`
   position: relative;
   display: flex;
   width: 1440px;
   height: 600px;
`

const Wrapper = styled.div`
 
 
`

const ImageSection = styled.div`
  flex: 1;
  position: absolute;
  left: 8.96%;
  top: 20%;
  bottom: 30.33%;
`
const Image = styled.img`
  
`

const AuthSection = styled.div`
  flex: 1;
  position: absolute;
  left: 750px;
  top: 70px;
  border: 2px solid rgba(26, 59, 88, 0.24);
  border-radius: 65px;
  background-color: #FFFFFF;
  width: 490px;
  height: 544px;
`

const Ul = styled.ul`
  display: flex;
`

const A = styled.a`
`

const Li = styled.div`
  position: absolute;
  top: 45px;
  font-size: 26px;
  font-weight: 500;
  left: ${props => props.type === 'left' && '55px'};
  left: ${props => props.type === 'right' && '150px'};;
 
`

const H2 = styled.h2`
  position: absolute;
  top: 100px;
  left: 110px;
`
const P = styled.p`
  position: absolute;
  top: 130px;
  left: 110px;
`

const Form = styled.form`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 150px;
  left: 110px;
`

const Input = styled.input`
  width: 270px;
  height: 40px;
  margin-bottom: 30px;
  border-radius: 10px;
`

const Button = styled.button`
  position: absolute;
  top: 380px;
  left: 110px;
  width: 270px;
  height: 40px;
  border-radius: 10px;
  background-color: #329C89;
`





const SignUp = () => {
  return (
   <Container>
        <ImageSection>
          <Image src="./Group.png" alt=""/>
        </ImageSection>
        <AuthSection>
            <Ul>
                <A href="/login" ><Li type="left" >Log In</Li></A>
                <A href="/signup" ><Li type="right" >Sign Up</Li></A>
            </Ul>
            
            <Form>
              <Input onChange ={ (event) => setUsername(event.target.value)} placeholder='Full Name' />
              <Input onChange ={ (event) => setUsername(event.target.value)} placeholder='Email' />
              <Input onChange = { (event) => setPassword(event.target.value) } type="password" placeholder='Password' />
            </Form>
            <Button >Sign up</Button>

        </AuthSection>
   </Container>
  )
  
}

export default SignUp