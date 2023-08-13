import styled from 'styled-components'

export const Container = styled.div`
    margin-top: 40px;
    display: flex;
    width: 100%;
    height: 100px;
    align-items: center;
    justify-content: space-between;
`; 

export const Logo = styled.div`
    padding-left: 60px;
    align-self: flex-start;
    height: 100%;
    width: 100px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex: 1;
    cursor: pointer;
`;

export const Links = styled.div`
    height: 100%;
    display: flex;
    display: flex;
    align-items: center;
    gap: 20px;
    padding-right: 20px;
    justify-content: center;

    a {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 143px;
        height: 40px;
        text-decoration: none;
        color: var(--black, #000);
        text-align: center;
        font-family: Inter;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 122%; 
        gap: 10px;
        position: relative;
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
        cursor: pointer;
     }
        button:hover {
            color: var(--black, #000);
            border: 2px solid var(--black, #000);
            background: var(--contrast-yellow, #FFFB47);
            box-shadow: 4px 4px 0px 0px #000;
        }
        .hover::after {
            content: "";
            position: absolute;
            width: 65%;
            height: 2px;
            bottom: -1px;
            background-color: #333;
            visibility: hidden;
            transform: scaleX(0);
            transition: all 0.3s ease-in-out;
        }
        .hover:hover::after {
            visibility: visible;
            transform: scaleX(1);
        }
       
        @media only screen and (max-width: 876px) { 
            display: none;
        }
`;
export const HamburgerMenu = styled.div`
    display: none;
    margin-right: 20px;

.hamburger-menu-container {
  position: relative;
  display: inline-block;
}

.hamburger-menu{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    width: 43px;
    height: 36px;
    cursor: pointer;
    padding: 5px;
    box-sizing: border-box;
    position: relative;
    z-index: 1;
    margin-bottom: 50px;
    margin-right: -5px;
}

.bar {
  width: 100%;
  height: 3px;
  background-color: #ff8947;
  border: 1px solid var(--black, #000);
  box-shadow: 2px 2px 0px -1px #000 #000;
}

.open .bar:nth-child(1) {
    transform: rotate(-45deg) translate(-2px, 13px);
    transition: all 1s;

}

.open .bar:nth-child(2) {
  opacity: 0;
}

.open .bar:nth-child(3) {
transform: rotate(45deg) translate(-1px, -11px);
    transition: all 1s;
}

.links {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f1f1f1;
  top: 40px;
  right: 0;
  padding: 10px;
  width: 150px;
  z-index: 0; 
  height: 200px;
  justify-content: center;
  position: fixed;
  padding: 20px;
  border: 4px solid var(--black, #000);
background: var(--brands-purple, #9747FF);
box-shadow: -10px 11px 0px 0px #000;
}

.links a {
  text-decoration: none;
  margin: 5px 0;
  color: white;
    text-align: center;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 122%;
}
    svg {
        margin-left: 5px;
    }
.links button {
    color: var(--black, #000);
    text-align: center;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 122%;
    border: 2px solid var(--black, #000);
    background: var(--contrast-yellow, #FFFB47);
    box-shadow: 3px 4px 1px 0px #000;
    padding: 5px;
}

    @media only screen and (max-width: 876px) { 
        display: block;
    }
`;