import styled from 'styled-components';

export const Container = styled.div`   
    width: 452px;
    height: 452px;
    flex-shrink: 0;
    border-radius: 452px;
    border: 4px solid var(--black, #000);
    background: var(--contrast-yellow, #FFFB47);
    box-shadow: 12px 12px 0px 0px #000;
    justify-content: space-evenly;
    display: flex;
    align-items: center;
    flex-direction: column;

    span {
        font-weight: bold;
        font-size: 32px;
    }
    @media only screen and (max-width: 594px) {
       margin-top: 100px;
    }
    @media only screen and (max-width: 423px) { 
        width: 350px;
        height: 350px;
        flex-shrink: 0;
        border-radius: 452px;
        border: 4px solid var(--black, #000);
        background: var(--contrast-yellow, #FFFB47);
        box-shadow: 12px 12px 0px 0px #000;
        justify-content: space-evenly;
        display: flex;
        align-items: center;
        flex-direction: column;
    }

`;

export const Center = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Dollar = styled.div`
    margin-right: -160px;
    z-index: 0;
    margin-top: 80px;  
`;

export const Items = styled.div`
    display: flex;
    align-items: center;
    gap: 105px;
    span {
        font-weight: bold;
        font-size: 32px;
        margin-bottom: 8px;
    }
    @media only screen and (max-width: 423px) { 
        gap: 70px;
    }
`;