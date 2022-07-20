import { API} from '../constant/api';


const serviceService = {
    getService() {
        return fetch(API).then(res => res.json());
    }
};

export default serviceService;