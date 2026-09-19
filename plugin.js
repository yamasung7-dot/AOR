// AOR - Ambient Occlusion Renderer
// Blockbench plugin foundation

(function() {
    const AOR_VERSION = '0.1.0';
    let liveAOEnabled = false;
    let mobileOptimizationEnabled = true;

    Plugin.register('aor', {
        title: 'Ambient Occlusion Renderer',
        author: 'yamasung7-dot',
        description: 'Voxel-aware ambient occlusion and mobile-friendly rendering tools for Blockbench.',
        icon: 'blur_on',
        version: AOR_VERSION,
        variant: 'both',
        onload() {
            Blockbench.showQuickMessage(`AOR v${AOR_VERSION} loaded`);

            new Action('aor_live_ao', {
                name: 'Toggle Live AO',
                description: 'Enable or disable live ambient occlusion preview.',
                icon: 'visibility',
                click() {
                    liveAOEnabled = !liveAOEnabled;
                    Blockbench.showQuickMessage(`Live AO: ${liveAOEnabled ? 'ON' : 'OFF'}`);
                }
            }).addToMenu(MenuBar.menu.tools);

            new Action('aor_mobile_opt', {
                name: 'Toggle Mobile Optimization',
                description: 'Adaptive pixel optimization for lower-power devices.',
                icon: 'phone_android',
                click() {
                    mobileOptimizationEnabled = !mobileOptimizationEnabled;
                    Blockbench.showQuickMessage(`Mobile Optimization: ${mobileOptimizationEnabled ? 'ON' : 'OFF'}`);
                }
            }).addToMenu(MenuBar.menu.tools);

            new Action('aor_status', {
                name: 'AOR Version Info',
                icon: 'info',
                click() {
                    Blockbench.showMessageBox({
                        title: 'Ambient Occlusion Renderer',
                        message: `AOR v${AOR_VERSION}\n\nRoadmap:\n• Voxel-aware AO\n• Billboard-controlled light\n• Rim highlights\n• AO baking\n• Mobile adaptive pixel optimization`
                    });
                }
            }).addToMenu(MenuBar.menu.tools);
        },
        onunload() {
            Blockbench.showQuickMessage('AOR unloaded');
        }
    });
})();
