const config = {
    // 车主手机号
    phone: '15016661007',

    serverChan: {
        sendKey: "sctp30440tee7sel7m2vnmideyynjb95",
        apiUrl: "https://30440.push.ft07.com/send/"
    },

    notification: {
        cooldown: 180000,
        defaultMessage: '需要挪车，请及时处理。'
    }
};
window.config = config;
