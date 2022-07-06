import styled from "styled-components";
import SearchIcon from '@material-ui/icons/Search';
import AddIcon from '@material-ui/icons/Add';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import HomeIcon from '@material-ui/icons/Home';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import TodayIcon from '@material-ui/icons/Today';
import SmsOutlinedIcon from '@material-ui/icons/SmsOutlined';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';


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
  margin-right: 160px;
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
  height: 550px;
`
const TitleHeader = styled.div` 
  display: flex;
 
`

const CreateTodo = styled.div`
  width: 260px;
  height: 30px;
  position: absolute;
  top: 60px;
  left: 20px;
  background-color:  #ECF3F3;
`
const Todos = styled.div`
  position: absolute;
  width: 260px;
  height: 160px;
  border-radius: 10px;
  top: 110px;
  left: 20px;
  background-color: #FEFEFE;;
`
const Todo = styled.div``
const TodoTitle = styled.div`
   position: absolute;
   top: 10px;
   left: 12px;
   font-weight: 500;
   font-size: 14px;

`
const TodoDescription = styled.div`
  position: absolute;
  font-size: 15px;
  top: 38px;
  left: 12px;
  width: 240px;
`
const TodoInfo = styled.div`
  display: flex;
`
const TodoImage = styled.div``
const TodoImg = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  position: absolute;
  top: 120px;
  left: 13px;
`

const TodoMsg = styled.div`
  display: flex;
  position: absolute;
  top: 125px;
  left: 210px;
`
const TodoMsgIcon = styled.div``
const MsgNo = styled.div``

const CreateIcon = styled.div`
  position: absolute;
  left: 115px;
  top: 2px;

`

const Title = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  
`
const TodoNo = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  left: 40px;
  justify-content: center;
  border-radius: 50%;
  margin-left: 220px;
  margin-top: 20px;
  width: 20px;
  height: 20px;
  background-color: aqua;


`
const InProgressSection = styled.div`
  position: absolute;
  background: #F5F9F9;
  border-radius: 15px;
  top: 200px;
  left: 395px;
  width: 300px;
  height: 500px;
 
`
const CompletedSection = styled.div`
  position: absolute;
  background: #F5F9F9;
  border-radius: 15px;
  top: 200px;
  left: 750px;
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
            <Div><HomeIcon /> Oveview</Div>
            <Div> <EqualizerIcon /> Stats</Div>
            <Div> <DescriptionOutlinedIcon /> Projects</Div>
            <Div> <SmsOutlinedIcon /> Chat</Div>
            <Div> <TodayIcon /> Calendar</Div>
          </Divs> 
        </Section1>

        <Section2>
          <LowDivs>
            <LowDiv> <SettingsOutlinedIcon /> Settings</LowDiv>
            <LowDiv> <i class="fa fa-sign-out" aria-hidden="true"></i>Log Out</LowDiv>
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
          <CreateTodo>
            <CreateIcon>
              <AddIcon />
            </CreateIcon>
          </CreateTodo>

          <Todos>
            <Todo>
              <TodoTitle>Design- App </TodoTitle>
              <TodoDescription>
                Modifying Career,  Scholarship and entrance exam Acc to new design pattern
              </TodoDescription>
              <TodoInfo>
                <TodoImage>
                 <TodoImg  src="./Group.png"/>
                </TodoImage>
                <TodoMsg>
                  <MsgNo>1</MsgNo>
                  <TodoMsgIcon>< ChatBubbleOutlineIcon /></TodoMsgIcon>
                </TodoMsg>
              </TodoInfo>
             

            </Todo>
            

          </Todos>

        </TodoSection>


        <InProgressSection>
         <TitleHeader>
            <Title>In Progress</Title>
            <TodoNo>1</TodoNo>
          </TitleHeader>
          <CreateTodo>
            <CreateIcon>
              <AddIcon />
            </CreateIcon>
          </CreateTodo>

        </InProgressSection>

        <CompletedSection>
          <TitleHeader>
            <Title>Completed</Title>
            <TodoNo>0</TodoNo>
          </TitleHeader>
          <CreateTodo>
            <CreateIcon>
              <AddIcon />
            </CreateIcon>
          </CreateTodo>
        </CompletedSection>
        
      </SectionTasks>


   </Container>
  )
}

export default Tasks