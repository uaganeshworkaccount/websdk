(function(KoreSDK){

    var KoreSDK=KoreSDK||{};

    var botOptionsWiz = {};
    botOptionsWiz.logLevel = 'debug';
    botOptionsWiz.koreAPIUrl = "https://bots.kore.ai";

    botOptionsWiz.JWTUrl = "PLEASE_ENTER_JWTURL_HERE";
    botOptionsWiz.userIdentity = 'PLEASE_ENTER_USER_EMAIL_ID';// Provide users email id here
    botOptionsWiz.botInfo = { name: "Srivatssan_Assignment_bot", "_id": "st-5d99e9e3-77a4-5505-a841-9cce9cb44519" }; // bot name is case sensitive
    botOptionsWiz.clientId = "cs-7e0ea58c-c4c5-5687-b94a-eee0399677d9";
    botOptionsWiz.clientSecret = "PLEASE_ENTER_CLIENT_SECRET";

    var widgetsConfig = {
        botOptions: botOptionsWiz
    };
    
    KoreSDK.widgetsConfig=widgetsConfig
})(window.KoreSDK);