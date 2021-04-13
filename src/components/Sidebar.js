import React from 'react'
import styled from 'styled-components'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { sidebarItemsData } from '../data/SidebarData'
import { sidechannelData } from '../data/SidechannelData'
import AddIcon from '@material-ui/icons/Add'
import db from '../firebase'
import { useHistory } from 'react-router-dom'

function Sidebar(props) {

    const history = useHistory();

    const goToChannel = (id) => {
        if (id) {
            console.log(id);
           history.push('/room/' + (id))
            // history.push('/room/${id}')
        }
    }
    console.log(props);

    const addChannel = () => {
        const promptName = prompt("Enter Channel Name...");
        // console.log(promptName);
        if (promptName) {
            db.collection('rooms').add({
                name: promptName
            })
        }
    }
    return (
        <Container>
            <WorkspaceContainer>
                <Name>
                    SlimGuyTraining
                </Name>
                <NewMessage>
                    <AddCircleOutlineIcon />
                </NewMessage>
            </WorkspaceContainer>
            <MainChannels>
                {
                    sidebarItemsData.map(item => (
                        <MainChannelItem>
                            {item.icon}
                            {item.text}
                        </MainChannelItem>
                    ))
                }
            </MainChannels>
            <ChannelsContainer>
                <NewChannelContainer>
                    Channels
                    <AddIcon onClick={addChannel} />
                </NewChannelContainer>
                <ChannelsList >
                    {/* {
                        sidechannelData.map(item => (
                            <Channel>
                                {item.text}
                            </Channel>
                        ))
                    } */}
                    {
                        props.rooms.map(item => (
                            <Channel onClick={() => goToChannel(item.id)}>
                                # {item.name}
                            </Channel>
                        ))
                    }
                </ChannelsList>
            </ChannelsContainer>
        </Container>
    )
}
export default Sidebar

const Container = styled.div`
background: #3F0E40;
`

const WorkspaceContainer = styled.div`
    color: white;
    height: 64px;
    display: flex;
    padding-left: 19px;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #532753;
`
const Name = styled.div`

`
const NewMessage = styled.div`
    width:36px;
    height:36px;
    background:white;
    color: #3F0E40;
    fill: #3F0E40;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
    border-radius: 50%;
    cursor: pointer;

`
const MainChannels = styled.div`
    padding-top:20px;

`
const MainChannelItem = styled.div`
    color: rgb(188 171 188);
    align-items: center;
    display: grid;
    grid-template-columns: 15% auto;
    height: 28px;
    padding-left: 19px;
    cursor: pointer;
    : hover {
        background: #350D36;
    }

`
const ChannelsContainer = styled.div`
    color: rgb(188 171 188);
    margin-top:10px;
    

`
const NewChannelContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding-left:19px;
    padding-right: 12px;
    align-items:center;
    height: 28px;
`
const ChannelsList = styled.div`

`
const Channel = styled.div`
    height: 28px;
    align-items:center;
    padding-left: 19px;
    cursor: pointer;
    : hover {
        background: #350D36;
    }

`