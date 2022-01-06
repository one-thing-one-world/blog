// import {AppData} from "./appData"
import {WizardMobx} from './wizard-mobx'
import {wizardMobxInterface} from "./types/index"


// let appData = new AppData()
let wizardMobx:wizardMobxInterface = new WizardMobx()

export const stores = {
    // appData,
    wizardMobx
}

// export * from './wizard-mobx'