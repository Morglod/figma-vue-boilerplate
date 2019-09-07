import { connectToUI, DefaultConfig } from 'rpct/lib/figma';
import { UIMethods, PluginMethods } from '../plugin-src/iapi';

(async function() {
    figma.showUI(__html__, {
        width: 200,
        height: 300
    });

    // log all RPC activity in console
    // DefaultConfig.debug = true;

    // wait for UI
    await new Promise(x => setTimeout(x, 1000));

    const api = connectToUI<PluginMethods, UIMethods>(figma, {
        createRectangle(width, height) {
            const rect = figma.createRectangle();
            rect.resize(width, height);
            figma.currentPage.appendChild(rect);
            return rect.id;
        }
    });
})();
