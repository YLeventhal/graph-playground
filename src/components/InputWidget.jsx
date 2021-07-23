import {InputWidgetWrapper, HeaderWrapper, ContentWrapper, FooterWrapper, Title, StyledBubble} from "./StyledComponents";
import {Input} from "./Input";
import {SubmitButton} from "./SubmitButton";
import {BUBBLE_SIZES} from "../constants";

const Bubble = ({size, top, right, bottom, left, zIndex}) => {
    return (
        <StyledBubble size={size} top={top} right={right} bottom={bottom} left={left} zIndex={zIndex}/>
    )
}

export const InputWidget = ({onInputChange, onSubmitClick}) => {
    return (
        <InputWidgetWrapper>
            <HeaderWrapper>
                <Title>
                    input
                </Title>
            </HeaderWrapper>
            <ContentWrapper>
                <Input onInputChange={onInputChange} name={"xAxisValues"} label={"X Axis Values"}/>
                <Input onInputChange={onInputChange} name={"yAxisValues"} label={"Y Axis Values"}/>
            </ContentWrapper>
            <FooterWrapper>
                <SubmitButton buttonText={"Submit"} onSubmitClick={onSubmitClick}/>
            </FooterWrapper>
            <Bubble size={BUBBLE_SIZES.medium} top={-20} right={25} zIndex={2}/>
            <Bubble size={BUBBLE_SIZES.large} top={-20} right={-30} zIndex={1}/>
            <Bubble size={BUBBLE_SIZES.medium} top={35} right={-20}/>

            <Bubble size={BUBBLE_SIZES.medium} bottom={35} left={-30} zIndex={2}/>
            <Bubble size={BUBBLE_SIZES.large} bottom={-20} left={-30} zIndex={1}/>
            <Bubble size={BUBBLE_SIZES.medium} bottom={-20} left={25}/>
        </InputWidgetWrapper>
    )
}
