import Image from 'next/image';
import styles from './AdvantagesContainer.module.scss';
import { Advantage } from '@/components';
import deliveryIcon from '@assets/icons/advantages/delivery.svg';
import giftIcon from '@assets/icons/advantages/gift.svg';
import supportIcon from '@assets/icons/advantages/support.svg';
import walletIcon from '@assets/icons/advantages/wallet.svg';
import cn from 'classnames';


export const AdvantagesContainer = () => {
    return (
        <section>
            <div className={cn(styles.container, styles.flex)}>
                <Advantage
                    title="Free Shipping"
                    description="Orders over $100">
                    <Image
                        src={deliveryIcon}
                        alt="delivery"
                        width={58}
                        height={58}
                    />    
                </Advantage>
                <Advantage
                    title="Smart Gift Card"
                    description="Buy $1000 to get card">
                    <Image
                        src={giftIcon}
                        alt="gift"
                        width={58}
                        height={58}
                    />    
                </Advantage>
                <Advantage
                    title="Quick Payment"
                    description="100% secure payment">
                    <Image
                        src={walletIcon}
                        alt="wallet"
                        width={58}
                        height={58}
                    />    
                </Advantage>
                <Advantage
                    title="24/7 Support"
                    description="Quick support">
                    <Image
                        src={supportIcon}
                        alt="support"
                        width={58}
                        height={58}
                    />    
                </Advantage>
            </div>
        </section>
    )
}