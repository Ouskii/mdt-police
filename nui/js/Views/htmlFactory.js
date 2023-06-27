import { _Layout } from './Pages/_Layout.js'
import { _Home } from './Pages/_Home.js';
import { _Civilian } from './Pages/_Civilian.js';
import { _CivilianInfo } from './Pages/_CivilianInfo.js';
import { _Cars } from './Pages/_Cars.js';
import { _Jail } from './Pages/_Jail.js';
import { _Dispatch } from './Pages/_Dispatch.js';
import { _Notes } from './Pages/_Notes.js';
import { _Accounts } from './Pages/_Accounts.js';
import { _TariffEdit } from './Pages/_TariffEdit.js';

export const htmlTemlplates = {
    _Layout: 1,
    _Home: 2,
    _Civilian : 3,
    _CivilianInfo: 4,
    _Cars: 5,
    _Jail: 6,
    _Dispatch: 7,
    _TariffEdit: 8,
    _Notes: 9, 
    _Accounts: 10,
    
}

export const builderFunctions = {
    [htmlTemlplates._Layout]: _Layout,
    [htmlTemlplates._Home] : _Home,
    [htmlTemlplates._Civilian] : _Civilian,
    [htmlTemlplates._CivilianInfo] : _CivilianInfo,
    [htmlTemlplates._Cars] : _Cars,
    [htmlTemlplates._Jail]: _Jail,
    [htmlTemlplates._Dispatch]: _Dispatch,
    [htmlTemlplates._TariffEdit]: _TariffEdit,
    [htmlTemlplates._Notes]: _Notes,
    [htmlTemlplates._Accounts]: _Accounts

    
 }


export function htmlFactory(template) {
    if (builderFunctions.hasOwnProperty(template)) {
        return builderFunctions[template];
    }

    console.error("Undefined template: " + template);

    return () => {
        return "";
    };
}
