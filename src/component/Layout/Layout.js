import CheckIcon from '@mui/icons-material/Check';
import { useState } from 'react';
import styles from './Layout.module.css';

const Layout=()=>{
const [check,setCheck]=useState(true)
const handleCheck=()=>{
    setCheck(!check)
}
    return(
        <div className={styles.page}>
            <div className={styles.contain}>
                <div className={styles.product}>
                    <div className={styles.basic}>
                        <div className={styles.basic_name}>
                            <div className={styles.basic_price}>
                                <div className={styles.basic_p1}>$99</div>
                                <div className={styles.basic_p2}>/person</div>
                            </div>
                                <div className={styles.basic_name_1}>BASIC</div>
                                <div className={styles.basic_name_2}>PRICE LAN</div>
                        </div>
                        <div className={styles.border}>
                            <div className={styles.basic_title}>
                                <div className={styles.basic_title_1}>Subtitle goes here</div>
                                <div className={styles.basic_title_2}>Subtitle second line goes here lorem iprum</div>
                            </div>
                            <div className={styles.basic_list}>
                                <div className={styles.basic_l1}>
                                    <input className={styles.basic_checkbox} type="checkbox"></input>
                                    <div className={styles.basic_l1_1}>Lorem ipsum dolor sit amet</div>
                                </div>
                                <div className={styles.basic_l2}>
                                    <input className={styles.basic_checkbox} type="checkbox"></input>
                                    <div className={styles.basic_l2_1}>Consectetur sdipisicing elit sed do</div>
                                </div>
                                <div className={styles.basic_l3}>
                                    <input className={styles.basic_checkbox} type="checkbox"></input>
                                    <div className={styles.basic_l3_1}>Eiusmod tempor incididunt ut</div>
                                </div>
                                <div className={styles.basic_l4}>
                                    <input className={styles.basic_checkbox} type="checkbox"></input>
                                    <div className={styles.basic_l4_1}>Labore et dolore magna</div>
                                </div>
                                <div className={styles.basic_l5}>
                                    <input className={styles.basic_checkbox} type="checkbox"></input>
                                    <div className={styles.basic_l5_1}>Enim ad minim ven am quis nostrud</div>
                                </div>
                            </div>
                            <button className={styles.basic_btn}>ORDER</button>
                        </div>
                    </div>
                    <div className={styles.advanced}>
                        <div className={styles.advanced_name}>
                            <div className={styles.advanced_price}>
                                <div className={styles.advanced_p1}>$199</div>
                                <div className={styles.advanced_p2}>/person</div>
                            </div>
                            <div className={styles.advanced_name_0}>This is the very best price/quantity advanced plan *</div>
                            <div className={styles.advanced_name_1}>ADVANCED</div>
                            <div className={styles.advanced_name_2}>PRICE LAN</div>
                        </div>
                        <div className={styles.new}>
                                NEW
                        </div>
                        <div className={styles.border}>
                            <div className={styles.advanced_title}>
                                <div className={styles.advanced_title_1}>Subtitle goes here</div>
                                <div className={styles.advanced_title_2}>Subtitle second line goes here lorem iprum</div>
                            </div>
                            <div className={styles.advanced_list}>
                                <div className={styles.advanced_l1}>
                                    <input className={styles.basic_checkbox} type="checkbox"></input>
                                    <div className={styles.advanced_l1_1}>Lorem ipsum dolor sit amet</div>
                                </div>
                                <div className={styles.advanced_l2}>
                                    <input className={styles.basic_checkbox} type="checkbox"></input>
                                    <div className={styles.advanced_l2_1}>Consectetur sdipisicing elit sed do</div>
                                </div>
                                <div className={styles.advanced_l3}>
                                    <input className={styles.basic_checkbox} type="checkbox"></input>
                                    <div className={styles.advanced_l3_1}>Eiusmod tempor incididunt ut</div>
                                </div>
                                <div className={styles.advanced_l4}>
                                    <input className={styles.basic_checkbox} type="checkbox"></input>
                                    <div className={styles.advanced_l4_1}>Labore et dolore magna</div>
                                </div>
                                <div className={styles.advanced_l5}>
                                    <input className={styles.basic_checkbox} type="checkbox"></input>
                                    <div className={styles.advanced_l5_1}>Enim ad minim ven am quis nostrud</div>
                                </div>
                            </div>
                            <button className={styles.advanced_btn}>ORDER</button>
                        </div>
                    </div>
                    <div className={styles.life}>
                        <div className={styles.life_name}>
                            <div className={styles.life_price}>
                                <div className={styles.life_p1}>$1999</div>
                                <div className={styles.life_p2}>/person</div>
                            </div>
                            <div className={styles.life_name_1}>LIFE</div>
                            <div className={styles.life_name_2}>TARIFF</div>
                        </div>
                        <div className={styles.border}>
                            <div className={styles.life_title}>
                                <div className={styles.life_title_1}>Subtitle goes here</div>
                                <div className={styles.life_title_2}>Subtitle second line goes here lorem iprum</div>
                            </div>
                            <div className={styles.life_list}>
                                <div className={styles.life_l1}>
                                    <input className={styles.basic_checkbox} type="checkbox"></input>
                                    <div className={styles.life_l1_1}>Lorem ipsum dolor sit amet</div>
                                </div>
                                <div className={styles.life_l2}>
                                    <input className={styles.basic_checkbox} type="checkbox"></input>
                                    <div className={styles.life_l2_1}>Consectetur sdipisicing elit sed do</div>
                                </div>
                                <div className={styles.life_l3}>
                                    <input className={styles.basic_checkbox} type="checkbox"></input>
                                    <div className={styles.life_l3_1}>Eiusmod tempor incididunt ut</div>
                                </div>
                                <div className={styles.life_l4}>
                                    <input className={styles.basic_checkbox} type="checkbox"></input>
                                    <div className={styles.life_l4_1}>Labore et dolore magna</div>
                                </div>
                                <div className={styles.life_l5}>
                                    <input className={styles.basic_checkbox} type="checkbox"></input>
                                    <div className={styles.life_l5_1}>Enim ad minim ven am quis nostrud</div>
                                </div>
                            </div>
                            <button className={styles.life_btn}>ORDER</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Layout;