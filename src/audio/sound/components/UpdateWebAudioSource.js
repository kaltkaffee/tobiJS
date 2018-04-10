import RemoveAudioBuffer from "./RemoveAudioBuffer";

export default function UpdateWebAudioSource(source) {

    if (source._ended) {

        if (!source.loop) {
            source.stop();

        } else {
            this.playTime = this.startTime = 0;
        }
    }

}