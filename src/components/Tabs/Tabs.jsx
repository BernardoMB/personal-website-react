import { 
    TabButton, 
    TabButton2, 
    TabButton3, 
    TabButton4,
    TabButton5
} from "../TabButton/TabButton"
import { useState } from "react" // Import the useState hook
import testimonies from "./tertimonies.json"

export function Tabs() {
    //const stateArray = useState('Select a tab')
    // Or use array destructuring
    const [ selectedTab, setSelectedTab ] = useState('Select a tab')
    const [ testimony, setTestimony ] = useState({
        testimonyText: testimonies[0].testimony,
        testimonyAuthor: testimonies[0].author
    })
    function handleSelect() {
        console.log('Handle select')
    }
    function handleWorkingTabSelected(selectedTab) {
        console.log('Handle working tab selected', selectedTab)
        const tabContent = `${selectedTab + 5} selected`
        setSelectedTab(tabContent)
        setTestimony({
            testimonyText: testimonies[selectedTab].testimony,
            testimonyAuthor: testimonies[selectedTab].author
        })
    }
    return (
        <>
            <menu>
                <TabButton>Tab1</TabButton>
                <TabButton2>Tab2</TabButton2>
                <TabButton3>Tab3</TabButton3>
                <TabButton4 onClick={handleSelect}>Tab4</TabButton4>
                <TabButton5 onSelect={() => handleWorkingTabSelected(0)}>Tab5 (working)</TabButton5>
                <TabButton5 onSelect={() => handleWorkingTabSelected(1)}>Tab6 (working)</TabButton5>
                <TabButton5 onSelect={() => handleWorkingTabSelected(2)}>Tab7 (working)</TabButton5>
                <TabButton5 onSelect={() => handleWorkingTabSelected(3)}>Tab8 (working)</TabButton5>
                <TabButton5 onSelect={() => handleWorkingTabSelected(4)}>Tab9 (working)</TabButton5>
            </menu>
            {selectedTab}
            <div className="testimony">
                <div className="testimony-container">
                    <div className="testimony-text">{testimony.testimonyText}</div>
                    <div className="testimony-author">{testimony.testimonyAuthor}</div>
                </div>
            </div>
        </>
    )
}