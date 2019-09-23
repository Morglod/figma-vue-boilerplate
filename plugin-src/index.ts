import { connectToUI, DefaultConfig, watchProperty } from 'rpct';
import { UIMethods, PluginMethods } from '../plugin-src/iapi';
import { isEqualNodeArray } from './utils';

(async function() {
    figma.showUI(__html__, {
        width: 350,
        height: 300
    });

    // log all RPC activity in console
    // DefaultConfig.debug = true;

    // wait for UI
    await new Promise(x => setTimeout(x, 1000));

    const selectionWatcher = watchProperty(() => figma.currentPage.selection, {
        isEqual: isEqualNodeArray,
    });

    const api = await connectToUI<PluginMethods, UIMethods>(figma, {
        createRectangle(width, height) {
            const rect = figma.createRectangle();
            rect.resize(width, height);
            figma.currentPage.appendChild(rect);
            return rect.id;
        },
        listenSelectionChange(onSelectionChange) {
            // should return unresolving promise, so rpct will not free onSelectionChange remote callback

            return new Promise(disposeCallback => {
                selectionWatcher.on('change', selection => {
                    onSelectionChange(selection.map(x => x.id))
                });
            });
        }
    });
})();
