import { Select, Input, Button, Divider } from 'antd';
import { SearchOutlined } from '@ant-design/icons'
import styles from './Search.module.scss';

export const Search = () : JSX.Element => {
    return (
        <div className={styles.searchWrapper}>
            <Input
                placeholder='Search here'
                bordered={false}
            />
            <div className={styles.divider}>
                <Select
                    bordered={false}
                    placeholder='Categories'
                />
            </div>
            <div className={styles.btnWrapper}>
                <Button
                    type='text'
                    icon={<SearchOutlined/>}    
                />
            </div>
        </div>
    )
}