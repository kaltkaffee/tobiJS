import TranstionStyle from "./TransitionStyle";
import TransitionState from "./TransitionState";


export default function DrawTransition(transition, canvas, context) {

    if (transition._state === TransitionState.NONE)
        return;

    context.globalCompositeOperation = 'source-over';

    let settings = transition.settings;

    switch(settings.style) {
        case TranstionStyle.NONE: return;
        case TranstionStyle.FILL: {

            context.fillStyle = transition._tColor.rgba;  
            context.fillRect(0, 0, canvas.width, canvas.height);

            break;
        }
    }

}