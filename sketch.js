
let origin
let emo
let emo2
let art
let ton1
let ton2
let tex1
let tex2
let font

let pitches = [
  "high","medium","low"]
let tempos = [
  "fast","moderate","slow"]
let rhythms = [
  "steady","erratic","legato","staccato"]
let era = [
  "modern","medieval","19th Century",]
let accents = [
    "are a Cockney", "have a Transatlantic accent", "are a Northerner", "are a Southerner", "speak in RP", "are Scottish", 
    "are Welsh", "are Irish", "are Northern Irish", "are a Scouser", "are a Geordie", "are from Yorkshire", "are from the West Country", "are East Anglian", 
    "are Mancunian", "are Liverpudlian", "are a Brummie", "are Cornish", "are Cumbrian", "are Glaswegian", "are From Edinburgh", 
    "are a Highlander","are a Southern American", "are Texan", "are from New York", "are Bostonian", 
     "are Minnesotan", "are Hawaiian", "are Californian", "are Canadian", "A Newfoundlander", "are Australian", 
    "are a New Zealander", "are South African", "are French", "are Parisian French",
    "are German", "are Bavarian German", "are Austrian", "are Swiss", "are Italian", "are Sicilian Italian", "are Spanish Castilian", "are Andalusian Spanish", "are Catalan", 
    "are Portuguese", "are Dutch", "are Swedish", "are Danish", "are Finnish", 
   "are Icelandic", "are Polish", "are Czech", "are Hungarian","are Russian",
];
let emotions = [
    "happy", "sad", "fearful", "angry", "furious", "morose", "excitable", "volatile", 
    "calm", "neutral", "anxious", "optimistic", "pessimistic", "confident", "hopeful", 
    "disappointed", "relieved", "nervous", "content", "bored", "curious", "shocked", 
    "indifferent", "impressed", "jealous", "grateful", "overwhelmed", "nostalgic", 
    "embarrassed", "guilty", "elated", "joyful", "gloomy", "terrified", "apprehensive", 
    "enraged", "irritated", "exuberant", "ecstatic", "depressed", "melancholic", 
    "determined", "inspired", "lonely", "eager", "alarmed", "suspicious", "confused", 
    "amused", "ashamed", "honored", "humble", "sullen", "agitated", "upset", "restless", 
    "hopeless", "charmed", "delighted", "flustered", "stressed", "frustrated", "satisfied", 
    "fulfilled", "enchanted", "bewildered", "dismayed", "disgusted", "startled", "intimidated", 
    "proud", "lovestruck", "wistful", "serene", "blissful", "mischievous", "contemplative", 
    "regretful", "repentant", "smug", "rebellious", "bashful", "horrified", "defiant", "timid", 
    "sympathetic", "sincere", "affectionate", "compassionate", "thoughtful", "concerned", "generous", 
    "greedy", "yearning", "zestful", "tired", "energetic", "weary", "vibrant", "listless", "peaceful", 
    "revolted", "disenchanted", "invigorated", "strained", "empowered", "underwhelmed", "captivated", 
    "enchanted", "crushed", "fascinated", "preoccupied", "devastated", "enthralled", "soothed", "resigned", 
    "mirthful", "rueful", "lugubrious", "perplexed", "anticipatory", "chagrined"
];
let articulations = [
    "clear", "mumbled", "slurred", "neutral", "crisp", 
    "sharp", "soft", "forceful", "gentle", "staccato", 
    "legato", "nasal", "breathy", "guttural", "whispered", 
    "harsh", "smooth", "rounded", "flat", "monotone", 
    "animated", "precise", "blurred", "fluent", "stuttered", 
    "lisped", "rapid", "slow", "rhythmic", "melodic", 
    "tense", "relaxed", "sibilant", "husky", "steady"
];
let tone = [
    "formal", "informal", "authoritative", "playful", "serious", "ironic", "sarcastic", "sinister",
    "sombre", "calm", "flat", "cartoonish", "singsong", "enthusiastic", "bored", "optimistic",
    "pessimistic", "encouraging", "dismissive", "respectful", "disrespectful", "sympathetic", 
    "compassionate", "apathetic", "confident", "insecure", "inspiring", "demoralizing", 
    "excited", "uninterested", "curious", "indifferent", "passionate", "objective", "subjective",
    "doubtful", "hopeful", "anxious", "relieved", "eager", "lazy", "aggressive", "gentle", 
    "cheerful", "gloomy", "condescending", "humble", "proud", "ashamed", "guilty", "innocent",
    "manipulative", "straightforward", "mysterious", "clear", "vague", "detailed", "succinct",
    "rambling", "coherent", "incoherent", "logical", "illogical", "soothing", "irritating",
    "meditative", "provocative", "factual", "fictional", "poetic", "dry", "witty", "humorous",
    "morose", "lighthearted", "respectful", "condescending", "ambivalent", "fervent", "stoic",
    "dynamic", "monotonous", "melancholic", "jubilant", "sober", "whimsical", "cynical", "naive",
    "scholarly", "pedantic", "lyrical", "crisp", "muffled", "distinct", "indirect", "polite",
    "impolite", "friendly", "hostile", "inviting", "cold", "warm", "harsh", "tender", "rigid", 
    "flexible", "honest", "deceptive"
];
let textures = [
  "smooth", "glassy", "raspy", "breathy", "husky", "rich", "brittle", "shrill", "wet","deep","airy", "booming","bright","bubbly","sonorous","bouncy", "squeaky", "creaky", "crisp", "buttery","buzzing","caramel","smoky","chirpy","coarse","cool","croaky","dull","earthy","edgy","lilting","ethereal","otherworldly","demonic","fluid","liquid","foggy","gravelly","gruff","harsh","hollow","honeyed","hoarse","husky","light","mellow","melodic","muffled","nasal","congested","Oily","greasy","piercing","sharp","blunt","plummy","raspy","robotic","rounded","sandy","sharp","silky","smooth","soft","strident","strong","sultry","taut","tense","tender","thick","thin","throaty","tinny","tremulous","velvety","vibrant","vigorous","warm","whiny","whispery","wobbly"]

function preload(){

font = loadFont('complex.ttf')
}

function setup() {
  textFont(font)
  createCanvas(windowWidth*0.66,windowHeight);
 let where =  createButton("")
 
 let emoButton = createButton("")
 emoButton.position(width*0.45, height*0.255)
 emoButton.mousePressed(emoOne)
  
   let emoButton2 = createButton("")
 emoButton2.position(width*0.65, height*0.255)
 emoButton2.mousePressed(emoOne2)
  
  let emoButton3 = createButton("")
 emoButton3.position(width*0.675, height*0.305)
 emoButton3.mousePressed(emoOne3)
  
    let toneButton = createButton("")
 toneButton.position(width*0.5, height*0.405)
 toneButton.mousePressed(toneOne)
  
    
    let toneButton2 = createButton("")
 toneButton2.position(width*0.6, height*0.405)
 toneButton2.mousePressed(toneTwo)
  
      let artButton = createButton("")
artButton.position(width*0.5, height*0.355)
 artButton.mousePressed(artOne)
        let artButton2 = createButton("")
 artButton2.position(width*0.6, height*0.355)
 artButton2.mousePressed(artTwo)
  
  
        let texButton = createButton("")
 texButton.position(width*0.51, height*0.455)

 texButton.mousePressed(texOne)
  
        let texButton2 = createButton("")
 texButton2.position(width*0.6, height*0.455)
 texButton2.mousePressed(texTwo)

 
 where.position(width*0.525,height*0.13)
 where.mousePressed(whereFrom)  
  textAlign(CENTER)  
  populator()
  
}

function draw() {
  background(255);
  
  textSize(20)
  
  text("What's my motivation?",width/2,height*0.05)
  
  textSize(12)
  
  text("You "+origin,width/2, height*0.125)
  
  text("You are a generally "+emo+" and sometimes "+emo2+" person.",width/2, height*0.25)
  text("but you are currently feeling particularly "+emo3,width/2,height*0.3)
  text("Your speech is "+art+" and "+art2,width/2,height*0.35)
  text("Your tone is "+ton1+" and "+ton2,width/2,height*0.4)
  text("And your voice is "+tex1+" and "+tex2,width/2,height*0.45)
  
}





function whereFrom(){
  origin = accents[floor(random(accents.length))];
}

function emoOne(){
 emo = emotions[floor(random(emotions.length))];
}

function emoOne2(){
 emo2 = emotions[floor(random(emotions.length))];
}

function emoOne3(){
 emo3 = emotions[floor(random(emotions.length))];
}

function artOne(){
  art = articulations[floor(random(articulations.length))];
}

function artTwo(){
  art2 = articulations[floor(random(articulations.length))];
}

function toneOne(){
  ton1 = tone[floor(random(tone.length))];  
}

function toneTwo(){
   ton2 = tone[floor(random(tone.length))];  
}

function texOne(){
  tex1 = textures[floor(random(textures.length))];
}

function texTwo(){
  
  
  
  tex2 = textures[floor(random(textures.length))];
}

function populator(){

  origin = accents[floor(random(accents.length))];
  emo = emotions[floor(random(emotions.length))];
  emo2 = emotions[floor(random(emotions.length))];
  emo3 = emotions[floor(random(emotions.length))];
  art = articulations[floor(random(articulations.length))];
  art2 = articulations[floor(random(articulations.length))];
  ton1 = tone[floor(random(tone.length))];  
  ton2 = tone[floor(random(tone.length))];  
  tex1 = textures[floor(random(textures.length))];  
  tex2 = textures[floor(random(textures.length))];
}
