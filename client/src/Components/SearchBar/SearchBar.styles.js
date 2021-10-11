import styled from 'styled-components';

export const Wrapper = styled.div`
display: flex;
padding: 10px;
box-shadow: 6px 6px 10px -1px rgba(0,0,0,0.15),
            -6px -6px 10px -1px rgba(255,255,255,0.6);
margin-top: 20px;
border-radius: 50px;


input{
    border-radius: 5px;
    outline: none;
    border: 0;
    width: 80%;
    padding-left: 10px;
    margin-right: 200px;
}
i{
    padding-top: 5px;
    margin-left: 100px;
}
@media screen and (max-width:540px){
    i{
        margin-left: 10px;
    }
}
`;
