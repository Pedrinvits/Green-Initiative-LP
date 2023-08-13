import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    margin-top: 160px;
    height: 400px;
    align-items: center;
    justify-content: center;
    @media only screen and (max-width: 1124px) {
        margin-top: 100px;
    }
`; 

export const Box = styled.div`
    width: 1149px;
    height: 628px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border: 4px solid var(--black, #000);
    box-shadow: 12px 12px 4px 0px #000;
    gap: 20px;
    h1 {
        color: #000;
        text-align: center;
        font-family: IBM Plex Mono;
        font-size: 32px;
        font-style: normal;
        font-weight: 700;
        line-height: 122%; 
    }
    input {
        padding: 15px 40px;
        border: 2px solid var(--black, #000);
    }
    button {
        margin-top: 40px;
        padding: 10px;
        height: 50px;
        width: 150px;
        border: 2px solid var(--black, #000);
        background: var(--brands-purple, #9747FF);
        box-shadow: 2px 2px 0px 0px #000;
        color: var(--white, #FFF);
        text-align: center;
        font-family: Inter;
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        line-height: 122%;
        cursor: pointer;
    }
    button:hover {
        color: var(--black, #000);
        border: 2px solid var(--black, #000);
        background: var(--contrast-yellow, #FFFB47);
        box-shadow: 4px 4px 0px 0px #000;
    }
    @media only screen and (max-width: 423px) { 
        margin-top: 80px;
        width: 87vw;
    }
`;

export const Footer = styled.div`
    border: 2px solid var(--black, #000);
   padding: 10px 20px;
    margin-top: 40px;
    width: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;
    gap:20px;
   
    svg {
        cursor: pointer;
    }
`;