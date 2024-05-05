export function TabWrapper({buttons, children}) {
    return (
        <>
            <menu>
                {buttons}
            </menu>
            {children}
        </>
    )
}