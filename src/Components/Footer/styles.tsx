import styled from 'styled-components'

export const Container = styled.div`
    margin-top: 40px;
    display: flex;
    width: 100%;
    height: 400px;
    align-items: center;
    justify-content: space-between;
    font-family: IBM Plex Mono;

    @media only screen and (max-width: 1124px) {
        margin-top: 100px;
    }

    @media only screen and (max-width: 594px) {
        margin-top: 40px;
        display: flex;
        width: 100%;
        height: 400px;
        align-items: center;
        justify-content: center;
        font-family: IBM Plex Mono;
        flex-direction: column;
        /* gap: 10px; */
    }
`; 

export const Logo = styled.div`
    padding-left: 60px;
    height: 100%;
    width: 100px;
    display: flex;
    align-items: center;
    flex: 1;
    text-align: left;
    margin-top: 75px;

    @media only screen and (max-width: 594px) {
        /* padding-left: 60px; */
    height: 100%;
    /* width: 161px; */
    display: flex;
    align-items: center;
    flex: 1;
    text-align: left;
    margin-top: 300px;
    height: fit-content;
    }
`;

export const Links = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    gap: 60px;
    padding-right: 20px;
    justify-content: center;
    flex: 1;
    text-align: center;
    text-align: left;
    p{
        cursor: pointer;
        position: relative;
    }
    p::after {
        content: "";
        position: absolute;
        width: 65%;
        height: 2px;
        bottom: -2px;
        left: 0;
        background-color: #333;
        visibility: hidden;
        transform: scaleX(0);
        transition: all 0.3s ease-in-out;
    }
   p:hover::after {
        visibility: visible;
        transform: scaleX(1);
    }

    @media only screen and (max-width: 594px) {
        /* padding-left: 60px; */
        margin-top: 30px;
	    height: 100%;
    display: flex;
    align-items: center;
    gap: 30px;
   
    /* justify-content: center; */
    /* flex: 1; */
    text-align: center;
    text-align: left;
    font-size: 13px;
    margin-left: 50px;
    }
`;

export const Infos = styled.div`
    height: 40px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    h1 , p {
        font-family: IBM Plex Mono;
    }
`;

export const Social = styled.div`
    display: flex;
    flex: 1;
    gap: 15px;
    margin-top: 75px;
    justify-content: center;
`;