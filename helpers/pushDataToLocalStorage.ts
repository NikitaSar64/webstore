import { Product } from "@/store";

export function pushDataToLocalStorage(key: string, obj : Product){

    if (!!localStorage.getItem(key)){
        let oldData = JSON.parse(localStorage.getItem(key) as string);
        oldData.push(obj);
        localStorage.setItem(key, JSON.stringify(oldData))
    } else {
        localStorage.setItem(key, JSON.stringify([obj]))
    }

}