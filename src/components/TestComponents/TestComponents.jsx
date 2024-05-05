import { ChildCopmponent, ChildCopmponent2, ChildCopmponent3, ChildCopmponent4 } from "./ChildCopmponent"

const arrayOfObjects = [
    {
        prop1: 'string prop',
        prop2: 2,
        prop3: true
    },
    {
        prop1: 'string prop 2',
        prop2: 0,
        prop3: false
    },
    {
        prop1: 'string prop 3',
        prop2: 12,
        prop3: true
    }
]

export function TestComponents() {
    return (
        <>
            <p>Testing components</p>

            { 
                //#region 1 
            }
            <ChildCopmponent 
                prop1={arrayOfObjects[0].prop1}
                prop2={arrayOfObjects[0].prop2}
                prop3={arrayOfObjects[0].prop3}
            />
            <ChildCopmponent 
                {...arrayOfObjects[0]}
            />
            {
                //#endregion 
            }

            {
                //#region 2
            }
            <ChildCopmponent2
                prop1={arrayOfObjects[0].prop1}
                prop2={arrayOfObjects[0].prop2}
                prop3={arrayOfObjects[0].prop3}
            />
            <ChildCopmponent2 
                {...arrayOfObjects[0]}
            />
            {
                //#endregion
            }
            
            {
                //#region 3
            }
            <ChildCopmponent3 
                obj={arrayOfObjects[0]}
            />
            {
                //#endregion
            }
            
            {
                //#region 4
            }
            <ChildCopmponent4
                prop1={arrayOfObjects[0].prop1}
                prop2={arrayOfObjects[0].prop2}
                prop3={arrayOfObjects[0].prop3}
            />
            <ChildCopmponent4
                {...arrayOfObjects[0]}
            />
            {
                //#endregion
            }
        </>
    )
}