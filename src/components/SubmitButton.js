import {StyledButton} from "./StyledComponents";

export const SubmitButton = ({buttonText, onSubmitClick}) => {
    return (

            <StyledButton onClick={onSubmitClick}>{buttonText}</StyledButton>

    )
}
