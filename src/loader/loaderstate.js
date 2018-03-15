
import ListInjector from './listinjector'

export var AssetTypeHandler = new ListInjector();

export const LOADER_STATE = {
    NONE : 0,
    IDLE : 1,
    PENDING : 2,
    LOADING : 3,
    PROCESSING : 4,
    ERROR : 5,
    FINISHED : 6,
    DONE : 7, 
}

//export var AssetTypeHandler;
//export var LOADER_STATE;