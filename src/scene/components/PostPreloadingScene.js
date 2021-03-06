import startScene from "./startScene";
import TransitionBehavior from "../../render/transition/TranstionBehavior";

export default function PostPreloadingScene(sceneManger, transition) {

    if (transition === undefined) transition = TransitionBehavior.NONE;

    sceneManger._scintillaLoading = false;
    sceneManger._transition = transition;

    if (sceneManger.currentScene === undefined || sceneManger.currentScene === null) return;

    startScene.call(sceneManger);

    // function start() {

    //     this._isTransitioning = false;

    //     if (this.onStartCallback) {
    //         this.onStartCallback.call(this.currentScene, this.game);
    //     }
    // }

    // if (transition <= TransitionBehavior.NONE) {
    //     start.call(sceneManger);
    // } else {

    //     TransitionBetweenScenes(sceneManger, start.bind(sceneManger));
    // }
}