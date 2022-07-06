import styled from "styled-components";

const Container = styled.div`
 width: 1350px;
 height: 400px;
 position: relative;

`

const SectionTasks = styled.div`
  width: 1300px;
  height: 680px;
  box-sizing: border-box;
  position: absolute;
  background: #FEFEFE;
  border: 1.8px solid #F0F0F0;
  left: 310px;
  top: -11px;
`

const Left = styled.div`
  flex: 1;
`

const Search = styled.div``

const Center = styled.div`
  flex: 1;
`

const Right = styled.div`
  display: flex;
  position: absolute;
  left: 1000px;
  

  flex: 1;
`

const P = styled.p`
`
const ImageContainer = styled.div``
const Image  = styled.img`
`



const Sections = styled.div``



const Tasks = () => {
  return (
   <Container>
      <Sections>

      </Sections>

      <SectionTasks>
        <Left>
            <Search></Search>

        </Left>
        <Center>


        </Center>
        <Right>
            <P>Hi Saundarya</P>
            <ImageContainer>
                <Image src="" alt="" />
            </ImageContainer>
            

        </Right>
        
      </SectionTasks>


   </Container>
  )
}

export default Tasks