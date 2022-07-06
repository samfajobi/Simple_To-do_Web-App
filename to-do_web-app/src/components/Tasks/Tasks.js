import styled from "styled-components";
import SearchIcon from '@material-ui/icons/Search';


const Container = styled.div`
 width: 1350px;
 height: 600px;
 position: relative;

`

const SectionTasks = styled.div`
  width: 1300px;
  height: 750px;
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
const SearchContainer = styled.div`
  display: flex;
  position: absolute;
  top: 60px;
  left: 40px;
  align-items: center;
`

const Input = styled.input`
  border: none;
  width: 300px;
`


const Center = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;

`
const ImgContainer = styled.div`
  margin-right: 50px;
  margin-top: 50px;
`

const Img = styled.img`
  width: 30px;
  height: 30px;
 
  
 
`

const Right = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 1;
  margin-right: 300px;
`

const ShowSection = styled.div`
`

const ShowDivs = styled.div`
  display: flex;
`

const ShowDiv = styled.div`
  position: absolute;
  top: 150px;
  left: ${props => props.type === 'filter' && '1010px'};
  left: ${props => props.type === 'proj' && '48px'};
  
`

const P = styled.p`
  position: absolute;
  margin-right: 5px;
  top: 35px;
`
const ImageContainer = styled.div``
const Image  = styled.img`
  width: 40px;
  height: 40px;
  border-radius:  50%;
  position: absolute;
  top: 39px;
  padding-left: 10px;
`



const Sections = styled.div`
  
`
const H2 = styled.h2`
  position: absolute;
  left: 40px;
  top: 25px;
  height: 20px;
  
`

const Section1 = styled.div``

const Divs = styled.div`
  position: absolute;
  top: 150px;
  left: 60px;
`
const Div = styled.div`
  margin-bottom: 20px;
`

const Section2 = styled.div`
  position: absolute;
  top: 520px;
  left: 60px;

`

const LowDivs = styled.div``

const LowDiv = styled.div`
  margin-top: 20px;
`
const TodoSection = styled.div`
  position: absolute;
  background: #F5F9F9;
  border-radius: 15px;
  top: 200px;
  left: 45px;
  width: 300px;
  height: 500px;
`
const TitleHeader = styled.div` 
  display: flex;
 
`
const Title = styled.div``
const TodoNo = styled.div`
  margin-left: 50px;

`
const InProgressSection = styled.div`
  position: absolute;
  background: #F5F9F9;
  border-radius: 15px;
  top: 200px;
  left: 95px;
  width: 300px;
  height: 500px;
`
const CompletedSection = styled.div`
  position: absolute;
  background: #F5F9F9;
  border-radius: 15px;
  top: 200px;
  left: 45px;
  width: 300px;
  height: 500px;
`


const Tasks = () => {
  return (
   <Container>
      <Sections>
        <H2>.taskez</H2>

        <Section1>
          <Divs>
            <Div>Oveview</Div>
            <Div>Stats</Div>
            <Div>Projects</Div>
            <Div>Chat</Div>
            <Div>Calendar</Div>
          </Divs>
        </Section1>

        <Section2>
          <LowDivs>
            <LowDiv>Settings</LowDiv>
            <LowDiv>Log Out</LowDiv>
          </LowDivs>
        </Section2>


      </Sections>


      <SectionTasks>
        <Left>
            <SearchContainer>
                <SearchIcon />
                <Input placeholder="Search"/>
            </SearchContainer>
            

        </Left>
        <Center>
            <ImgContainer>
                <Img  src="./Group.png" alt=""/>
                <Img  src="./Group.png" alt=""/>
                <Img  src="./Group.png" alt=""/>
                <Img  src="./Group.png" alt=""/>
            </ImgContainer>
        </Center>
        <Right>
            <P>Hi Ankit Kumar</P>
            <ImageContainer>
                <Image src="./Group.png" alt="" />
            </ImageContainer>
            

        </Right>

        <ShowSection>
          <ShowDivs>
            <ShowDiv type="proj" >Projects</ShowDiv>
            <ShowDiv type="filter" >Filter</ShowDiv>
          </ShowDivs>
        </ShowSection>

        <TodoSection>
          <TitleHeader>
            <Title>To do</Title>
            <TodoNo>2</TodoNo>
          </TitleHeader>
        </TodoSection>


        <InProgressSection>

        </InProgressSection>

        <CompletedSection>

        </CompletedSection>
        
      </SectionTasks>


   </Container>
  )
}

export default Tasks