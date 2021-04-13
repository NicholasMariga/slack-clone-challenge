import React from 'react'
import styled from 'styled-components'

function ChatMessage({text, name, image, timestamp}) {
    return (
        <Container>
            <UseAvatar>
                {/* <img src="https://randomuser.me/api/portraits/men/51.jpg" /> */}
                <img src={image}/>
            </UseAvatar>
            <MessageContent>
                <Name>
                    {name}
                    <span>
                         {new Date(timestamp.toDate()).toUTCString()}    
                    </span>
                </Name>
                <Text>
                    {text}
                </Text>
            </MessageContent>
        </Container>
    )
}

export default ChatMessage

const Container = styled.div`
    padding: 8px 20px;
    display: flex;
    align-items: center;
    
`
const UseAvatar = styled.div`
    width: 36px;
    height: 36px;
    border-radius: 2px;
    overflow: hidden;
    margin-right: 8px;

    img {
        width: 100%;
    }

`
const MessageContent = styled.div`
    display: flex;
    flex-direction: column;

`
const Name = styled.span`
    font-weight: 900;
    font-size: 15px;
    line-height: 1.4;
    span {
        color: rgb(97, 96, 97);
        font-weight: 400;
        margin-left: 8px;
        font-size: 13px;
    }

`
const Text = styled.span`

`
