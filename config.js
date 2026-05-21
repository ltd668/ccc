// 配置文件
const config = {
    // 车主电话号码
    phone: '15016661007',
    
    // 微信推送配置
    wxPusher: {
        appToken: 'AT_ExcwJ6SRUAUbpA2toDa6BvDZc1hdqbqo',
        uids: ['UID_XZTWRWheonzTxdAq0vHn9VNVMUAt'],
        apiUrl: 'https://wxpusher.zjiecode.com/api/send/message'
    },
    
    // 通知相关配置
    notification: {
        cooldown: 180000, // 通知冷却时间（毫秒）
        defaultMessage: '需要挪车，请及时处理。' // 默认通知消息
    }
};

// 导出配置
window.config = config;