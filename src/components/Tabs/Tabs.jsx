import { 
    TabButton, 
    TabButton2, 
    TabButton3, 
    TabButton4,
    TabButton5
} from "../TabButton/TabButton"

export function Tabs() {
    let tabContent = 'Select a tab'
    function handleSelect() {
        console.log('Handle select')
    }
    function handleWorkingTabSelected(selectedTab) {
        console.log('Handle working tab selected', selectedTab)
        tabContent = `${selectedTab} selected`
    }
    return (
        <>
            <menu>
                <TabButton>Tab1</TabButton>
                <TabButton2>Tab2</TabButton2>
                <TabButton3>Tab3</TabButton3>
                <TabButton4 onClick={handleSelect}>Tab4</TabButton4>
                <TabButton5 onSelect={() => handleWorkingTabSelected('Tab5')}>Tab5 (working)</TabButton5>
                <TabButton5 onSelect={() => handleWorkingTabSelected('Tab6')}>Tab6 (working)</TabButton5>
                <TabButton5 onSelect={() => handleWorkingTabSelected('Tab7')}>Tab7 (working)</TabButton5>
                <TabButton5 onSelect={() => handleWorkingTabSelected('Tab8')}>Tab8 (working)</TabButton5>
            </menu>
            {tabContent}
        </>
    )
}