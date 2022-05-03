import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;
export const List = styled.div`
    display: flex;
    width: 800px;
    border: 2px solid #CCC;
    max-height: 100vw;
    margin: 10px;
    text-align: center;
    flex-direction: column;
    border-radius: 10px;
p{
    margin: 2px;
}
button{
    width: 50%;
    margin: 0 auto;
    background-color: yellow;
}
`;