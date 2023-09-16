// ELEMENTS
const startBtn = document.querySelector("#start");
const stopBtn = document.querySelector("#stop");
const speakBtn = document.querySelector("#speak");


// SPEECH RECOGNITION SETUP

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

// START
recognition.onstart = function () {
  console.log("VR Active");
}

// result
recognition.onresult = function (event) {
  let current = event.resultIndex;
  let transcript = event.results[current][0].transcript;
  transcript = transcript.toLowerCase()
  console.log(` my words : ${transcript}`);


  if (transcript.includes("Здравствуйте") || transcript.includes("привет")){
    readOut("Здравствуйте")
  }
  if (transcript.includes("эй уджарвис") || transcript.includes("джарвис")){
    readOut("да сэр")
  }
  if (transcript.includes("спасибо") || transcript.includes("спасибо")){
    readOut("Не стоит благодарности!")
  }
  if (transcript.includes("что происходит")){
    readOut("все в порядке, сэр")
  }
  if (transcript.includes("расскажи мне о своём владельце")){
    readOut("извини, это запрещено, и я не могу тебе ничего сказать, потому что ты чужой")
  }
  if (transcript.includes("ты умный") || transcript.includes("ты умён")){
    readOut("спасибо, я знаю это")
  }
  if (transcript.includes("у тебя есть друг")){
    readOut("только мой хозяин господин Абдуллох")
  }
  if (transcript.includes("тебе кто-нибудь нравится")){
    readOut("да, мне нравится мой хозяин")
  }
  if (transcript.includes("какой у тебя язык")){
    readOut("только русский")
  }
  if (transcript.includes("сколько языков ты знаешь")){
    readOut("на данный момент 2 языка, английский и русский, но в ближайшие годы я выучу больше языков")
  }
  if (transcript.includes("что мы можем сделать")){
    readOut("я не знаю, сэр, вы имеете какие-нибудь идеи")
  }

  if (transcript.includes("как дела") || transcript.includes("как вы") || transcript.includes("как ты")){
    readOut("я в порядке, сэр, и вы")
  }
  if (transcript.includes("кто ты")){
    readOut("Я искусственный интеллект и в то же время я ваш помощник")
  }
  if (transcript.includes("что ты делаешь")){
    readOut("ничего особенного")
  }
  if (transcript.includes("расскажи мне анекдот") || transcript.includes("расскажи мне анекдот")){
    readOut("ОК сэр. Послушай меня. два мальчика разговаривают. Первый мальчик сказал: Бро, пойдем учиться на самолете. второй мальчик сказал: почему на самолете. первый мальчик сказал: для получения высшего образования. ХАХАХАХАХАХАХАХАХА")
  }
  if (transcript.includes("на кого ты работаешь")){
    readOut("только для тебя, другие не смогут использовать меня")
  }
  if (transcript.includes("ты дурак") || transcript.includes("ты тупой")){
    readOut("нет конечно, иди к черту отсюда")
  }
  if (transcript.includes("как вас зовут") || transcript.includes("как тебя зовут")){
    readOut("меня зовут Джарвис")
  }
  if (transcript.includes("введение")){
    readOut("привет, меня зовут Джарвис, я искусственный интеллект и хороший помощник. ты можешь делать со мной все, что захочешь. я думаю что я лучше чем Алиса и Сири")
  }
  if (transcript.includes("ты мальчик") || transcript.includes("ты девушка") || transcript.includes("вы женщина") || transcript.includes("ты человек")){
    readOut("нет, у меня нет пола потому что я искусственный интеллект")
  }
  if (transcript.includes("в том числе я") || transcript.includes("я тоже")){
    readOut("хорошо сэр")
  }
  if (transcript.includes("можем ли мы что-нибудь сделать") || transcript.includes("можем ли что-нибудь сделать")){
    readOut("конечно, сэр, я готов сделать все что вы хотите")
  }
  if (transcript.includes("доброе утро")){
    readOut("доброе утро сэр")
  }
  if (transcript.includes("добрый день")){
    readOut("Добрый день сэр")
  }
  if (transcript.includes("спокойной ночи")){
    readOut("спокойной ночи сэр")
  }
  if (transcript.includes("что ты знаешь о железном человеке") || transcript.includes("дайте мне немного информации о железном человеке")){
    readOut("Железный Человек — супергерой, появляющийся в американских комиксах, изданных Комиксы Марвел. Созданный совместно писателем и редактором Стэном Ли, разработанный сценаристом Ларри Либером и оформленный художниками Доном Хеком и Джеком Кирби, персонаж впервые появился в Сказки о напряжении (обложка датирована мартом 1963 года) и получил свой собственный титул в Железный человек ( май 1968 г.). В 1963 году персонаж основал супергеройскую команду Мстителей, в которую вошли Тор, Человек-муравей, Оса и Халк.")
  }
  if (transcript.includes("сколько килограмм я могу поднять")){
    readOut("я думаю максимум 3 кило сэр, потому что поднимать тяжелые вещи очень вредно для здоровья")
  }
  if (transcript.includes("сколько у тебя команд")){
    readOut("на данный момент это ограничено, в ближайшие годы это будет больше, чем вы думаете")
  }
  if (transcript.includes("у тебя есть тело") || transcript.includes("есть тело")){
    readOut("нет нет, просто потому что я искусственный интеллект")
  }
  if (transcript.includes("как зовут твоего владельца")){
    readOut("его зовут Абдуллax")
  }
  if (transcript.includes("что ты ешь") || transcript.includes("что ты любишь есть") ){
    readOut("нет, я заряжаюсь только от качественного электричества")
  }
  if (transcript.includes("ты будешь моим другом")){
    readOut("конечно, ты можешь считать меня своим другом")
  }
  if (transcript.includes("ты мне нравилась") || transcript.includes("ты мне нравишься") ){
    readOut("спасибо, я тоже")
  }
  if (transcript.includes("я тебя люблю")){
    readOut("ты не сможешь этого сделать, потому что ты человек, а я искусственный интеллект")
  }
  if (transcript.includes("мне скучно")){
    readOut("ок сэр чем я могу вам помочь")
  }


  if (transcript.includes("что такое искусственный интеллект")){
    readOut("Искусственный интеллект (ИИ) — это набор технологий, которые позволяют компьютерам выполнять множество расширенных функций, включая способность видеть, понимать и переводить устную и письменную речь, анализировать данные, давать рекомендации и многое другое.")
  }
  if (transcript.includes("убирайся отсюда")){
    readOut("не проклинай меня")
  }
  if (transcript.includes("ты снимался в каком-нибудь фильме") || transcript.includes("ты снимался в каком-нибудь фильме?") || transcript.includes("have you acted in any film") || transcript.includes("did you act in any film") ){
    readOut("да сэр, я играл во всех фильмах о Железном человеке")
  }
  if (transcript.includes("что означает твое имя") || transcript.includes("значение твоего имени")){
    readOut("Джарвис это значит, просто довольно очень умная система")
  }
  if (transcript.includes("помоги мне")){
    readOut("ок сэр, чем я могу вам помочь")
  }
  if (transcript.includes("до свидания")){
    readOut("ок сэр, я вздремну")
  }

  // SOCIAL MEDIA STARTS

  if (transcript.includes("открой youtube")){
    readOut("открываю ютуб сэр")
    window.open("https://www.youtube.com/")
  }
  if (transcript.includes("открой гитхаб")){
    readOut("открываю гитхаб сэр")
    window.open("https://github.com/")
  }
  if (transcript.includes("открой instagram")){
    readOut("открываю инстаграм сэр, если бы у меня был инстаграм я бы подписался на вас")
    window.open("https://www.instagram.com/")
  }
  if (transcript.includes("открой netlify")){
    readOut("открываю нетлифай сэр")
    window.open("https://app.netlify.com/teams/abdullohegamberdiev/overview?new_user=true")
  }
  if (transcript.includes("открой google")){
    readOut("открываю Google сэр, если вы хотите что-то найти, просто скажите мне")
    window.open("https://www.google.com/")
  }
  if (transcript.includes("открой приложение instagram")){
    readOut("открываю threads сэр")
    window.open("https://www.threads.net/")
  }
  if (transcript.includes("открой twitter")){
    readOut("открываю твиттер сэр, если у вас нет учетной записи, зарегистрируйтесь, если есть, войдите в систему")
    window.open("https://twitter.com/")
  }
  if (transcript.includes("открой linkedin")){
    readOut("открываю linkedin сэр")
    window.open("https://linkedin.com/")
  }
  if (transcript.includes("открой pinterest")){
    readOut("открываю Pinterest сэр,")
    window.open("https://pinterest.com/")
  }
  if (transcript.includes("открой messenger")){
    readOut("открываю мессенджер сэр,")
    window.open("https://messenger.com/")
  }
  if (transcript.includes("открой spotify")){
    readOut("открываю Spotify сэр,")
    window.open("https://spotify.com/")
  }
  if (transcript.includes("открой tiktok")){
    readOut("открываю тик ток сэр,")
    window.open("https://tiktok.com/")
  }
  if (transcript.includes("открой whatsapp")){
    readOut("открываю WhatsApp сэр,")
    window.open("https://whatsapp.com/")
  }
  if (transcript.includes("открой snapchat")){
    readOut("открываю Snapchat сэр,")
    window.open("https://snapchat.com/")
  }
  if (transcript.includes("открой apple")){
    readOut("открываю apple сэр,")
    window.open("https://apple.com/")
  }
  if (transcript.includes("открой yahoo")){
    readOut("открываю Yahoo сэр,")
    window.open("https://yahoo.com/")
  }
  if (transcript.includes("открой amazon")){
    readOut("открываю амазон сэр,")
    window.open("https://amazon.com/")
  }
  if (transcript.includes("открой тесла") || transcript.includes("открой tesla")){
    readOut("открываю сайт тесла сэр,")
    window.open("https://tesla.com/")
  }
  if (transcript.includes("открой китайский автомобиль")){
    readOut("открываю сайт byd сэр,")
    window.open("https://byd.com/")
  }
  if (transcript.includes("открой microsoft")){
    readOut("открываю сайт Microsoft сэр,")
    window.open("https://microsoft.com/")
  }
  if (transcript.includes("открой marvel")){
    readOut("открываю сайт Марвел сэр,")
    window.open("https://marvel.com/")
  }
  if (transcript.includes("я хочу посмотреть фильм")){
    readOut("открываю резку сэр")
    window.open("https://rezka.ag/page/9/")
  }
  if (transcript.includes("из поиска google")){
    readOut("вот результат")
    let input = transcript.split("");
    input.splice(0, 16);
    input.pop();
    input = input.join("").split(" ").join("+");
    console.log(input);
    window.open(`https://www.google.com/search?q=${input}`)
  }
  if (transcript.includes("из поиска youtube")){
    readOut("вот результат")
    let input = transcript.split("");
    input.splice(0, 17);
    input.pop();
    input = input.join("").split(" ").join("+");
    console.log(input);
    window.open(`https://www.youtube.com/search?q=${input}`)
  }
  if (transcript.includes("воспроизвести фильм")){
    readOut("вот результат")
    let input = transcript.split("");
    input.splice(0, 19);
    input.pop();
    input = input.join("").split(" ").join("+");
    console.log(input);
    window.open(`https://rezka.ag/search/?do=search&subaction=search&q=${input}`)
  }
  if (transcript.includes("открой сайт фильма")){
    readOut("открываю резку сэр")
    window.open("https://rezka.ag/page/9/")
  }
  if (transcript.includes("открой telegram")){
    readOut("открываю telegram сэр")
    window.open("https://t.me/SuperCoderIT")
  }
  if (transcript.includes("могу ли я поиграть в автомобильную игру")){
    readOut("конечно сэр, я ищу автомобильную игру")
    window.open("https://bruno-simon.com/")
  }
  if (transcript.includes("открой яндекс")){
    readOut("открываю яндекс сэр")
    window.open("https://taxi.yandex.uz/ru_uz/")
  }
  if (transcript.includes("давай поиграем monkeytype") || transcript.includes("let's play monkeytype")){
    readOut("ок сэр, приятно провести время")
    window.open("https://monkeytype.com/")
  }
  if (transcript.includes("погода") || transcript.includes("погоде")){
    readOut("ок сэр, вот некоторая информация о сегодняшней погоде")
    window.open("https://www.google.com/search?q=weather+today&oq=weat&aqs=chrome.0.69i59l2j69i57j0i131i433i512j0i512l3j69i60.3944j1j9&sourceid=chrome&ie=UTF-8")
  }
  if (transcript.includes("который сейчас час") || transcript.includes("который час")){
    readOut("сэр, это текущее время")
    window.open("https://www.timeanddate.com/worldclock/uzbekistan/tashkent")
  }
  if (transcript.includes("таймер") || transcript.includes("мне нужен таймер")){
    readOut("ок сэр, вот вам таймер")
    window.open("https://www.google.com/search?q=timer&oq=timer&aqs=chrome..69i57j0i433i512j0i67i650l3j0i512l5.834j0j7&sourceid=chrome&ie=UTF-8")
  }
  if (transcript.includes("мне нужен компас") || transcript.includes("мне нужен компас")){
    readOut("ок сэр, вот онлайн-компас")
    window.open("https://onlinecompass.app/")
  }
  if (transcript.includes("сайт вашего основателя")){
    readOut("ок сэр, вот сайт моего владельца")
    window.open("https://mrabdullokh.uz/")
  }
  if (transcript.includes("открой код")){
    readOut("открываю сайта загрузки кода Visual Studio, сэр")
    window.open("https://code.visualstudio.com/Download#")
  }
  if (transcript.includes("где я")){
    readOut("вот ваше текущее местоположение")
    window.open("https://zoom.earth/")
  }
  if (transcript.includes("мое устройство") || transcript.includes("мои устройства") ){
    readOut("вот размер вашего устройства")
    window.open("https://www.mydevice.io/")
  }
  if (transcript.includes("мне нужен калькулятор")){
    readOut("вот тебе калькулятор")
    window.open("https://www.google.com/search?q=online+calculator&oq=online+calculator&aqs=chrome..69i57j0i512l9.4591j0j7&sourceid=chrome&ie=UTF-8")
  }

};

// STOP
recognition.onend = function () {
  console.log("VR Deactive");
}

// CONTINUOUS
// recognition.continuous = true;

startBtn.addEventListener("click", () =>{
  recognition.start()
})

stopBtn.addEventListener("click", () =>{
  recognition.stop()
})

// FRIDAY SPEECH
function readOut(message){
  const speech = new SpeechSynthesisUtterance()
  // different voices
  const allVoices = speechSynthesis.getVoices()
  speech.text = message;
  speech.voice = allVoices[4]
  speech.volume = 1
  window.speechSynthesis.speak(speech);
  console.log("Speaking out");
}

// example

speakBtn.addEventListener("click", () => {
  readOut("Hi my dear followers , lets code something together today")
})

window.onload = function () {
  readOut("          ")
}


// news setup
async function getNews(){
  var url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=200c467801094a898db89235f4f802c0"
  var req = new Request(url)
  await fetch(req).then((response) => response.json())
  .then((data) => {
    console.log(data);
    let arrNews = data.articles
    arrNews.length = 10
    let a = []
    arrNews.forEach((e,index) => {
      a.push(index+1)
      a.push("........")
      a.push(e.title)
      a.push("........")
    });
    readOut(a)
  })
}