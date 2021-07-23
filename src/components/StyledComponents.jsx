import styled, { createGlobalStyle, css } from "styled-components";

const GlobalStyles = createGlobalStyle`
  html {
    // colors
    --color-text-primary: #3c4f76;
    --color-text-subtitle: black;
    --color-background-page: #9fb8ad;
    --color-background-modal: #e6e8e6;
    --color-background-decorative: #a288e3;
    --color-box-shadow: rgba(56, 63, 81, .44);
    // text properties
    --font-size-title: 32px;
    --font-size-label: 20px;
    --font-size-button: 24px;
    --font-weight-title: 700;
    --font-weight-label: 300;
    --font-weight-button: 500;
  }
`;

const PageWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: var(--color-background-page);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px;
  box-sizing: border-box;
`;

const BaseWidgetWrapper = styled.div`
  width: 70%;
  background: var(--color-background-modal);
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  box-shadow: 4px 4px 6px 0 var(--color-box-shadow);
`;

const InputWidgetWrapper = styled(BaseWidgetWrapper)`
  height: 300px;
  margin-bottom: 40px;
  position: relative;
  z-index: 23;
`;

const GraphWidgetWrapper = styled(BaseWidgetWrapper)`
  height: 70%;
  width: 85%;
  padding: 24px;
`;

const HeaderWrapper = styled.div`
  align-self: center;
  padding: 16px 0 0;
`;

const FooterWrapper = styled.div`
  width: 100%;
  padding: 16px;
  display: flex;
  justify-content: flex-end;
`;

const Title = styled.div`
  color: var(--color-text-primary);
  font-size: var(--font-size-title);
  font-weight: var(--font-weight-title);
`;

const ContentWrapper = styled.div`
  width: 100%;
  padding: 16px;
  display: flex;
`;

const StyledLabel = styled.label`
  color: var(--color-text-primary);
  font-size: var(--font-size-label);;
  font-weight: var(--font-weight-label);
`;

const StyledInput = styled.input`
  
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 4px 24px 24px 0;
`;

const StyledButton = styled.button`
  color: var(--color-text-primary);
  font-size: var(--font-size-button);
  font-weight: var(--font-weight-button);
  border: 1px transparent;
  border-radius: 32px;
  background: var(--color-background-page);
  padding: 16px 24px;
  cursor: pointer;
`;

const StyledBubble = styled.div`
  position: absolute;
  width: ${({size}) => `${size}px`};
  height: ${({size}) => `${size}px`};
  ${({top}) => top && css`top: ${top}px;`}
  ${({right}) => right && css`right: ${right}px;`}
  ${({bottom}) => bottom && css`bottom: ${bottom}px;`}
  ${({left}) => left && css`left: ${left}px;`}
  ${({zIndex}) => zIndex && css`z-index: ${zIndex};`}
  border-radius: 50%;
  background: var(--color-background-decorative);
  box-shadow: 4px 4px 6px 0 var(--color-box-shadow);
`;

export {
    GlobalStyles,
    PageWrapper,
    InputWidgetWrapper,
    GraphWidgetWrapper,
    HeaderWrapper,
    FooterWrapper,
    Title,
    ContentWrapper,
    InputWrapper,
    StyledLabel,
    StyledInput,
    StyledButton,
    StyledBubble
}
