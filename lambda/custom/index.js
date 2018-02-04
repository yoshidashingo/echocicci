'use strict';

const Alexa = require('alexa-sdk');

// 定型メッセージの定義
var SKILL_NAME = "エコちっち";
var GET_FACT_MESSAGE = "了解です。";
var HELP_MESSAGE = "エコちっちの状態を尋ねたり、ごはんやダンス、トイレの世話をしてあげてください。寝てるときは起こしたり、夜更かししてるときは寝かせてあげてください";
var HELP_REPROMPT = "どうしますか？";
var STOP_MESSAGE = "また遊んでね。";

var speechOutput = '';

var cardTitle = '';
var cardContent = '';
var cardImage;

var status_of_meal = true;
var status_of_dance = true;
var status_of_toilet = true;
var status_of_lights = true;

var status_of_oyaji = false;


// Lambda関数のメイン処理
exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context); // Alexa SDKのインスタンス生成
    //alexa.appId = process.env.APP_ID;
    alexa.registerHandlers(handlers); // ハンドラの登録
    alexa.execute();                  // インスタンスの実行
};

const handlers = {
    // インテントにマッチしないリクエスト
    'LaunchRequest': function () {
        console.log('Invoke LaunchRequest');
        this.emit('AMAZON.HelpIntent'); // AMAZON.HelpIntentの呼び出し
    },
    // スキルの使い方を尋ねるインテント
    'AMAZON.HelpIntent': function () {
        console.log('Invoke HelpIntent');
        var speechOutput = HELP_MESSAGE;
        var reprompt = HELP_REPROMPT;
        this.emit(':ask', speechOutput, reprompt);
    },
    'CheckStatus': function () {
        console.log('Invoke CheckStatus');

        speechOutput = '今、エコちっちはお腹がすいてるみたいだよ';

        cardTitle = SKILL_NAME;
        cardContent = 'エコちっちの様子を確認したよ'
        cardImage = {
            smallImageUrl: 'https://s3-ap-northeast-1.amazonaws.com/extravaganzarr/echocicci.png',
            largeImageUrl: 'https://s3-ap-northeast-1.amazonaws.com/extravaganzarr/echocicci.png'
        };

        this.emit(':tellWithCard', speechOutput, cardTitle, cardContent, cardImage);

        // 次へ(他に聞くことがあるか)
      this.emit(':ask', "ほかに聞きたいことはありますか？", "ほかに聞きたいことはありますか？");
        // Create speech output
//        const speechOutput = this.t('GET_FACT_MESSAGE') + randomFact;
//        this.emit(':tellWithCard', speechOutput, this.t('SKILL_NAME'), randomFact);
    },
    'ResetToEgg': function () {
        console.log('Invoke ResetToEgg');

        speechOutput = "<audio src='https://s3-ap-northeast-1.amazonaws.com/extravaganzarr/ji_037_alexa.mp3' />";
        speechOutput += 'エコちっちは生まれ変わるためにまた卵の状態に戻ったよ';

        cardTitle = SKILL_NAME;
        cardContent = 'たまごにもどったよ'
        cardImage = {
            smallImageUrl: 'https://s3-ap-northeast-1.amazonaws.com/extravaganzarr/popuko_baby.png',
            largeImageUrl: 'https://s3-ap-northeast-1.amazonaws.com/extravaganzarr/popuko_baby.png'
        };

        this.emit(':tellWithCard', speechOutput, cardTitle, cardContent, cardImage);

      this.emit(':ask', "ほかに聞きたいことはありますか？", "ほかに聞きたいことはありますか？");
    },
    'Meal': function () {
        console.log('Invoke Meal');

        speechOutput = "<audio src='https://s3-ap-northeast-1.amazonaws.com/extravaganzarr/ji_037_alexa.mp3' />";
        speechOutput += 'エコちっちはごはんをいっぱい食べたよ';

        cardTitle = SKILL_NAME;
        cardContent = 'ごはんを食べたよ'
        cardImage = {
            smallImageUrl: 'https://s3-ap-northeast-1.amazonaws.com/extravaganzarr/popuko_lemon.png',
            largeImageUrl: 'https://s3-ap-northeast-1.amazonaws.com/extravaganzarr/popuko_lemon.png'
        };

        this.emit(':tellWithCard', speechOutput, cardTitle, cardContent, cardImage);

      this.emit(':ask', "ほかに聞きたいことはありますか？", "ほかに聞きたいことはありますか？");
    },
    'Dance': function () {
        console.log('Invoke Dance');

        speechOutput = "<audio src='https://s3-ap-northeast-1.amazonaws.com/extravaganzarr/ji_037_alexa.mp3' />";
        speechOutput += 'エコちっちはいっぱい踊ったよ';

        cardTitle = SKILL_NAME;
        cardContent = 'ダンスをしたよ'
        cardImage = {
            smallImageUrl: 'https://s3-ap-northeast-1.amazonaws.com/extravaganzarr/popuko_dance.jpg',
            largeImageUrl: 'https://s3-ap-northeast-1.amazonaws.com/extravaganzarr/popuko_dance.jpg'
        };

        this.emit(':tellWithCard', speechOutput, cardTitle, cardContent, cardImage);

        this.emit(':ask', "ほかに聞きたいことはありますか？", "ほかに聞きたいことはありますか？");
    },
    'Toilet': function () {
        console.log('Invoke Toilet');

        speechOutput = "<audio src='https://s3-ap-northeast-1.amazonaws.com/extravaganzarr/ji_037_alexa.mp3' />";
        speechOutput += 'エコちっちはトイレでうんちをしたよ';

        cardTitle = SKILL_NAME;
        cardContent = 'トイレでうんちをしたよ'
        cardImage = {
            smallImageUrl: 'https://s3-ap-northeast-1.amazonaws.com/extravaganzarr/echocicci.png',
            largeImageUrl: 'https://s3-ap-northeast-1.amazonaws.com/extravaganzarr/echocicci.png'
        };

        this.emit(':tellWithCard', speechOutput, cardTitle, cardContent, cardImage);

      this.emit(':ask', "ほかに聞きたいことはありますか？", "ほかに聞きたいことはありますか？");
    },
    'Study': function () {
        console.log('Invoke Toilet');

        speechOutput = "<audio src='https://s3-ap-northeast-1.amazonaws.com/extravaganzarr/ji_037_alexa.mp3' />";
        speechOutput += 'エコちっちはいっぱいお勉強をしたよ';

        cardTitle = SKILL_NAME;
        cardContent = 'お勉強をしたよ'
        cardImage = {
            smallImageUrl: 'https://s3-ap-northeast-1.amazonaws.com/extravaganzarr/popuko_study.png',
            largeImageUrl: 'https://s3-ap-northeast-1.amazonaws.com/extravaganzarr/popuko_study.png'
        };

        this.emit(':tellWithCard', speechOutput, cardTitle, cardContent, cardImage);

      this.emit(':ask', "ほかに聞きたいことはありますか？", "ほかに聞きたいことはありますか？");
    },
    'Lights': function () {
        console.log('Invoke Light');

        var light_status = this.event.request.intent.slots.Status.value; // カスタムスロットAttrOfLightを参照
        console.log('light_status: ' + light_status);
        var light_status_word = light_status == 'on' ? 'つけ' : 'けし' ;
        var light_status_speachout = light_status == 'on' ? 'まだ眠そうに起き上がったよ' : 'ベッドですやすや眠り始めたよ' ;

        speechOutput = "<audio src='https://s3-ap-northeast-1.amazonaws.com/extravaganzarr/ji_037_alexa.mp3' />";
        speechOutput += 'エコちっちはライトを' + light_status_word + 'て、' + light_status_speachout;

        cardTitle = SKILL_NAME;
        cardContent = 'ライトを' + light_status_word + 'たよ'
        var cardImage_on = {
            smallImageUrl: 'https://s3-ap-northeast-1.amazonaws.com/extravaganzarr/popuko_awake.jpg',
            largeImageUrl: 'https://s3-ap-northeast-1.amazonaws.com/extravaganzarr/popuko_awake.jpg'
        };
        var cardImage_off = {
            smallImageUrl: 'https://s3-ap-northeast-1.amazonaws.com/extravaganzarr/popuko_sleep.jpg',
            largeImageUrl: 'https://s3-ap-northeast-1.amazonaws.com/extravaganzarr/popuko_sleep.jpg'
        };
        cardImage = light_status == 'on' ? cardImage_on : cardImage_off;

        this.emit(':tellWithCard', speechOutput, cardTitle, cardContent, cardImage);

        this.emit(':ask', "ほかに聞きたいことはありますか？", "ほかに聞きたいことはありますか？");
    },

    'AMAZON.CancelIntent': function () {
        this.emit(':tell', STOP_MESSAGE);
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', STOP_MESSAGE);
    },
};

