import React, { Component } from "react";

import styles from "./index.css";
import { View } from "@/components/flexView";
import InfoRow from "@/components/public/info/infoRow";
import moment from 'moment'

export default class OrderDetailBasicInfo extends Component{
    render() {
        const { sn, create_time, state,trade_no,payment_code } = this.props
        return (
            <View className={styles.infoWarp}>
                <p className={styles.infoTitle}>基本信息</p>
                <InfoRow
                    infoList={[
                        {
                            title: '订单号',
                            info: sn,
                        }
                        , {
                            title: '下单时间',
                            info: moment(create_time, 'X').format('YYYY-MM-DD HH:mm:ss'),
                        }, {
                            title: '订单状态',
                            info: this.returnOrderState(state),
                        },
                        {
                            title: '支付平台交易号',
                            info: trade_no,
                        },
                        {
                            title: '支付方式',
                            info: this.getPayName(payment_code),
                        }
                    ]}
                />
            </View>
        );
    }
    getPayName(payment_code){
        switch (payment_code) {
            case 'wechat_mini':
                return '微信小程序支付'
            case 'alipay':
                return '支付宝'
            default:
                return '-'
        }
    }
    returnOrderState(state) {
        switch (state) {
            case 0:
                return '已取消'
            case 10:
                return '待支付'
            case 20:
                return '待发货'
            case 30:
                return '待收货'
            case 40:
                return '已完成'
            default:
                return ''
        }
    }
}
