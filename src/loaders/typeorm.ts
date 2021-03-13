import { Loader } from '@/loaders';
import config from "@/configs";

const loader: Loader = {
    load: async () => {
        const useForce = config.isDevelopment || config.isTest;
    }
};

export default loader;
