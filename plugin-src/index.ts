import { connectToUI, Api } from 'rpct';
import { UIMethods, PluginMethods } from '../plugin-src/iapi';

(async function() {
    figma.showUI(__html__);

    await new Promise(x => setTimeout(x, 1000));
    
    const api = connectToUI<PluginMethods, UIMethods>(figma, {
        createRectangle(width, height) {
            const rect = figma.createRectangle();
            rect.resize(width, height);
            figma.currentPage.appendChild(rect);
        }
    });
})();
