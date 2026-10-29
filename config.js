// 配置文件
const config = {
    // 车主电话号码
    phone: '15016661007',
    
    // Server酱 微信推送（不用APP，直接微信收消息）
    serverChan: {
        sendKey: "sctp30440tqnlmshjbtw1hfkgbqwp4jn",
        apiUrl: "https://30440.push.ft07.com/"
    },
    
    // 通知相关配置
    notification: {
        cooldown: 180000, // 通知冷却时间（毫秒）
        defaultMessage: '需要挪车，请及时处理。' // 默认通知消息
    }
};
// 导出配置
window.config = config;
