import {InputWrapper, StyledInput, StyledLabel} from "./StyledComponents";

export const Input = ({label, name, onInputChange}) => {
    return (
        <InputWrapper>
            <StyledLabel>
                {label}
            </StyledLabel>
            <StyledInput name={name} onChange={onInputChange}/>
        </InputWrapper>
    )
}
