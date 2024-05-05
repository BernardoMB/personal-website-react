import { 
    TabButton, 
    TabButton2, 
    TabButton3, 
    TabButton4,
    TabButton5
} from "../TabButton/TabButton"
import { useState } from "react" // Import the useState hook
import testimonies from "./tertimonies.json"
import { TabWrapper } from "../TabWrapper/TabWrapper"

export function Tabs() {
    //const stateArray = useState('Select a tab')
    // Or use array destructuring
    const [ selectedTabIndex, setSelectedTabIndex ] = useState(0)
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
        setSelectedTabIndex(selectedTab)
        const tabContent = `${selectedTab + 5} selected`
        setSelectedTab(tabContent)
        setTestimony({
            testimonyText: testimonies[selectedTab].testimony,
            testimonyAuthor: testimonies[selectedTab].author
        })
    }
    return (
        <>
            <TabWrapper buttons={
                <>
                    <TabButton>Tab1</TabButton>
                    <TabButton2>Tab2</TabButton2>
                    <TabButton3>Tab3</TabButton3>
                    <TabButton4 onClick={handleSelect}>Tab4</TabButton4>
                    {/* <TabButton5 onSelect={() => handleWorkingTabSelected(0)} isSelected={ selectedTabIndex === 0 }>Tab5 (working)</TabButton5>
                    <TabButton5 onSelect={() => handleWorkingTabSelected(1)} isSelected={ selectedTabIndex === 1 }>Tab6 (working)</TabButton5>
                    <TabButton5 onSelect={() => handleWorkingTabSelected(2)} isSelected={ selectedTabIndex === 2 }>Tab7 (working)</TabButton5>
                    <TabButton5 onSelect={() => handleWorkingTabSelected(3)} isSelected={ selectedTabIndex === 3 }>Tab8 (working)</TabButton5>
                    <TabButton5 onSelect={() => handleWorkingTabSelected(4)} isSelected={ selectedTabIndex === 4 }>Tab9 (working)</TabButton5> */}
                    {[0,1,2,3,4].map(index => <TabButton5 key={index} onSelect={() => handleWorkingTabSelected(index)} isSelected={ selectedTabIndex === index }>Tab{index + 5} (working)</TabButton5>)}
                </>
            }>
                {selectedTab}
                <div className="testimony">
                    <div className="testimony-container">
                        <div className="testimony-text">{testimony.testimonyText}</div>
                        <div className="testimony-author">{testimony.testimonyAuthor}</div>
                    </div>
                </div>
            </TabWrapper>
        </>
    )
}