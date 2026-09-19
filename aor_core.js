// AOR Core - Ambient Occlusion Renderer
// Lightweight foundation for future AO systems

const AORCore = {
    settings: {
        liveAO: false,
        mobileMode: true,
        quality: 'mobile'
    },

    setLiveAO(enabled) {
        this.settings.liveAO = enabled;
    },

    setMobileMode(enabled) {
        this.settings.mobileMode = enabled;
        this.settings.quality = enabled ? 'mobile' : 'high';
    },

    getQuality() {
        return this.settings.quality;
    }
};

if (typeof module !== 'undefined') module.exports = AORCore;
