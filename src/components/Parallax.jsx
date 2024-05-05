export function Parallax({firstName, alias, lastName, arrowDownSvg}) {
    return (
        <div>
        <div className="background">
            <div className="content">
            <div className="artist-name">{alias} {lastName}</div>
            <div className="instructions">
                <div className="actual-instructions">
                scroll to browse site
                </div>
                <div className="arrow">
                {/* Don't include images like this because they may not work when the site is deployed*/}
                {/* <img src='src/assets/arrow-down.svg'/> */}
                {/* Import the image using a relative file path */}
                <img src={arrowDownSvg} />
                {/* A third option is to use just the svg code directly in the template */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M41.5,158c0-4.45,1.11-8.9,4.45-12.23a16.12,16.12,0,0,1,23.35,0L257.22,333.7,445.14,145.78a16.51,16.51,0,1,1,23.35,23.35l-199,199a16.12,16.12,0,0,1-23.35,0l-200.15-199A14.28,14.28,0,0,1,41.5,158Z"></path></svg>
                </div>
            </div>
            </div>
        </div>
        </div>
    )
}