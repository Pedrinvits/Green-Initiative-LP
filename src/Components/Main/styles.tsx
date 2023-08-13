import styled from 'styled-components';

export const Container = styled.div`   
    display : flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 100px;
`;
export const Start = styled.div`    
    width: fit-content;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    h1{
        color: var(--contrast-yellow, #FFFB47);
        text-align: center;
        font-feature-settings: 'ss03' on, 'ss01' on;
        text-shadow: 4px 3px 0px #000;
        font-family: 'IBM Plex Mono', monospace;
        font-size: 76px;
        font-style: normal;
        font-weight: 700;
        line-height: 87%; 
        -webkit-text-stroke-width: 1px; 
        -webkit-text-stroke-color: #000; 
    }
    h2{
        color: var(--black, #000);
        text-align: center;
        font-feature-settings: 'ss03' on, 'ss01' on;
        font-family: 'IBM Plex Mono';
        font-size: 64px;
        font-style: normal;
        font-weight: 700;
        line-height: 87%;
        margin-bottom: 30px;
    }
    p{
        color: var(--black, #000);
        text-align: center;
        font-variant-numeric: stacked-fractions slashed-zero;
        font-family: 'Inter', sans-serif;
        font-size: 35px;
        font-style: normal;
        font-weight: 400;
        line-height: 122%; 
    }
    button {
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
        align-self: center;
        margin-top: 50px;
        cursor: pointer;
    }
    button:hover {
        color: var(--black, #000);
        border: 2px solid var(--black, #000);
        background: var(--contrast-yellow, #FFFB47);
        box-shadow: 4px 4px 0px 0px #000;
    }
    @media only screen and (max-width: 423px) { 
        h1 {
            font-size: 60px;
        } h2 {
            margin-top: 5px;
            font-size: 50px;
        } p {
            font-size: 20px;
        }
    }
`;
export const Only = styled.div`   
    margin-top: 100px;
    height:600px;
    width: 80vw;
    display: flex;
    align-items: center;
    gap: 50px;

    h1 {
        color: #FFF;
        background-color: #9747FF;
    }
    p {
        font-weight: 700;
        line-height: 100%;
        letter-spacing: -1.6px;
        color: var(--black, #000);
        font-family: Inter;
        font-size: 40px;
        font-style: normal;
        font-weight: 400;
        line-height: 100%;
        letter-spacing: -1.6px;
    }
    @media only screen and (max-width: 1124px) {
        flex-direction: column;
    }
    @media only screen and (max-width: 592px) {
        margin-bottom: 110px;
    }
`;

export const Cash = styled.div`
    border: 4px solid var(--black, #000);
    background: var(--brands-purple, #9747FF);
    box-shadow: 12px 12px 0px 0px #000;
    height: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px 40px;
    gap: 20px;

    @media only screen and (max-width: 592px) {
        flex-direction: column;
        width: 70vw;
    }
`;

export const Dolars = styled.div`    
    display: flex;
    align-items: center;
    gap: 30px;
    justify-content: center;
    background: var(--brands-purple, #9747FF);

    @media only screen and (max-width: 592px) {
        width: 65vw;
    }
`;
export const Info = styled.div`  
    h1 {
        color: var(--white, #FFF);
        text-align: center;
        font-feature-settings: 'ss03' on, 'ss01' on;
        font-family: IBM Plex Mono;
        font-size: 64px;
        font-style: normal;
        font-weight: 700;
        line-height: 87%;
        letter-spacing: -2.56px;
    }
    @media only screen and (max-width: 423px) { 
        h1 {
            font-size: 50px;
        }
    }
`;

export const Available = styled.div`    
    height: 500px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 60px;
    @media only screen and (max-width: 1142px) {
        gap: 0px;
    }
    @media only screen and (max-width: 1124px) {
        flex-direction: column;
        img {
            margin-top: 30px;
            width: inherit;    
        }
    }
    @media only screen and (max-width: 592px) {
        margin-bottom: 60px;
    }
    @media only screen and (max-width: 312px) {
        margin-top: 100px;
    }
`;
export const Text = styled.div`    
    display: flex;
    flex-direction: column;
    width: fit-content;
    align-items: center;
    justify-content: center;

    h1 {
        color: var(--black, #000);
        text-align: right;
        font-family: IBM Plex Mono;
        font-size: 64px;
        font-style: normal;
        font-weight: 700;
        line-height: 87%; 
        margin-bottom: 30px;
    }
    p {
        color: var(--black, #000);
        text-align: right;
        font-family: Inter;
        font-size: 24px;
        font-style: normal;
        font-weight: 400;
        line-height: 87%; 
        margin-bottom: 50px;
    }
    a {
        align-self: flex-end;
        color: var(--black, #000);
        text-align: right;
        font-family: Inter;
        font-size: 24px;
        font-style: normal;
        font-weight: 400;
        line-height: 87%; 
        text-decoration-line: underline;
        gap: 10px;
        display: flex;
        align-items: center;
    }
    @media only screen and (max-width: 1124px) {
       a svg {
        display: none;
       }
    }
    @media only screen and (max-width: 594px) {
        h1 {
            font-size: 40px;
        }
       a {
         margin-right: 30px;
       }
    }
    @media only screen and (max-width: 423px) { 
        h1 {
            font-size: 30px;
        }
        p {
            font-size: 18px;
        }
    }

`;

export const Money = styled.div`    
    height: 500px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 60px;

    @media only screen and (max-width: 1124px) {
        flex-direction: column;
        margin-top: 270px;
    }
    @media only screen and (max-width: 594px) {
        text-align: center;
        margin-bottom: 50px;
    }
`;

export const InfoTime = styled.div`
    h1 {
        color: var(--black, #000);
        text-align: right;
        font-family: IBM Plex Mono;
        font-size: 64px;
        font-style: normal;
        font-weight: 700;
        line-height: 87%; 
        margin-bottom: 50px;
    }
    span {
        color: var(--black, #37AB00);
        font-family: IBM Plex Mono;
        font-size: 64px;
        font-style: normal;
        font-weight: 700;
        line-height: 87%;
        background: #BAFFCD;
        text-align: center;
        padding: 5px;
        padding-left: 25px;
        padding-top: 2px;
    }
    p {
        color: var(--black, #000);
        font-family: Inter;
        font-size: 24px;
        font-style: normal;
        font-weight: 400;
        line-height: 87%; 
        margin-bottom: 50px;
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
    @media only screen and (max-width: 1124px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 50px;
        margin-bottom: 50px;
    }
    @media only screen and (max-width: 594px) {
        h1 {
            line-height: 132%;
            font-size: 34px;
        }
        p {
            line-height: 140%;
            font-size: 20px;
        }
    }
    @media only screen and (max-width: 423px) {
       span {
        color: var(--black, #37AB00);
        font-family: IBM Plex Mono;
        font-size: 65px;
        font-style: normal;
        font-weight: 700;
        line-height: 168%;
        background: #BAFFCD;
        text-align: center;
        padding: 5px;
        padding-left: 25px;
        padding-top: 2px;
       }
       h1 {
        margin-right: 25px;
       }
    }
`;