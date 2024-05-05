export function Header(personalInfo) {
    return (
        <div className="header">
        <div className="header-container">
            <div className="left">
            <div className="artist-name">
                {personalInfo.alias + ' ' + personalInfo.lastName}
            </div>
            </div>
            <div className="spacer"></div>
            <div className="right">
            <div className="links">
                <div className="link">Link 1</div>
                <div className="link">Link 2</div>
            </div>
            </div>
        </div>
        </div>
    )
}