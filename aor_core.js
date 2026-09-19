// AOR Core - Ambient Occlusion Renderer
// Lightweight foundation for future AO systems

const AORCore = {
    settings: {
        liveAO: false,
        mobileMode: true,
        quality: 'mobile',
        updateInterval: 250
    },

    voxelAO: {
        enabled: false,
        strength: 1.0
    },

    setLiveAO(enabled) {
        this.settings.liveAO = enabled;
    },

    setMobileMode(enabled) {
        this.settings.mobileMode = enabled;
        this.settings.quality = enabled ? 'mobile' : 'high';
        this.settings.updateInterval = enabled ? 500 : 100;
    },

    setAOQuality(level) {
        this.settings.quality = level;
    },

    calculateAO(voxelData) {
        if (!this.settings.liveAO) return 0;

        // Placeholder for voxel-aware AO calculation.
        // Intentionally lightweight until the full renderer is added.
        let occlusion = 0;

        if (voxelData && voxelData.neighbors) {
            occlusion = Math.min(voxelData.neighbors.length / 6, 1);
        }

        return occlusion * this.voxelAO.strength;
    },

    getQuality() {
        return this.settings.quality;
    }
};

if (typeof module !== 'undefined') module.exports = AORCore;
