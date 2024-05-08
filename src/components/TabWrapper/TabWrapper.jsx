export function TabWrapper({buttons, buttonsContainer, children}) {
    const ButtonsContainer = buttonsContainer;
    return (
        <>
            <ButtonsContainer>
                {buttons}
            </ButtonsContainer>
            {children}
        </>
    )
}