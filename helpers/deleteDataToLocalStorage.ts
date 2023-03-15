import { Product } from "@/store";

export function deleteDataToLocalStorage(index: number){

    if (!!localStorage.getItem('basket')){
        let oldData: Product[] = JSON.parse(localStorage.getItem('basket') as string);
        let newData = oldData.filter((product, i) => i != index)
        console.log(newData)
        localStorage.setItem('basket', JSON.stringify(newData))
    } 
}