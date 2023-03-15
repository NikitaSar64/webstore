import { useQuery } from 'react-query';
import styles from './DetailPageContainer.module.scss';
import { fetchProductDataById } from '@/api';
import { ProductModel } from '@/interface';
import { usePathname } from 'next/navigation';
import { Rate, Divider, Button } from 'antd';
import Image from 'next/image';
import { productStore } from '@/store';

export const DetailPageContainer = () : JSX.Element => {
    const id = usePathname().split('/')[2];
    const { isSuccess, data } = useQuery('productId', () => fetchProductDataById<ProductModel>(id));
    const addProductToBasket = productStore(state => state.addProductToBasket);

    return (
        <section className={styles.detailPageContainer}>
            <div className={styles.container}>
                {
                    isSuccess && 
                    <div>
                        <div className={styles.category}>{data.category}</div>
                        <div className={styles.title}>{data.title}</div>
                        <Rate count={5} defaultValue={data.rating.rate} disabled className={styles.rate}/>
                        <Divider />
                        <div className={styles.flex}>
                            <Image
                                src={data.image}
                                width={300}
                                height={400}
                                alt='productImage'
                                className={styles.image}
                            />
                            <div className={styles.basket}>
                                <div className={styles.price}>
                                    $ {data.price}
                                </div>
                                <Divider/>
                                <Button 
                                    className={styles.basketBtn}
                                    onClick={() => addProductToBasket(
                                        { 
                                            id: data.id, 
                                            category: data.category, 
                                            description: data.description, 
                                            image: data.image, 
                                            title: data.title, 
                                            rating: data.rating.rate, 
                                            price: data.price
                                        }
                                    )}
                                >
                                    Добавить в корзину
                                </Button>
                            </div>
                        </div>
                    </div> 
                }
            </div>
        </section>
    )
}