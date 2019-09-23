import { connectToPlugin, proxyMapRemote, ProxyMapRemoteApi } from 'rpct';
import { UIMethods, PluginMethods } from '../plugin-src/iapi';

export let api: ProxyMapRemoteApi<PluginMethods>;
let apiLoadingPromise: Promise<void>;

export const initApi = () => {
    if (apiLoadingPromise) return apiLoadingPromise;

    if (!api) {
        apiLoadingPromise = new Promise(async loaded => {
            const rpctapi = await connectToPlugin<PluginMethods, UIMethods>({
                
            });
            api = proxyMapRemote(rpctapi);

            loaded();
        });

        return apiLoadingPromise;
    }
};
