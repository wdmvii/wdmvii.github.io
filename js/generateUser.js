function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/; domain=.wdmvii.com";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function generateReadableId() {
    var adjectives = [
        'adorable', 'brave', 'calm', 'delightful', 'eager', 'fancy', 'gentle', 'happy', 'jolly', 'kind',
        'lively', 'merry', 'nice', 'obedient', 'proud', 'silly', 'thankful', 'victorious', 'witty', 'zealous',
        'bright', 'charming', 'elegant', 'fierce', 'glamorous', 'handsome', 'magnificent', 'splendid', 'graceful', 'fantastic',
        'joyful', 'keen', 'lucky', 'majestic', 'neat', 'polite', 'quaint', 'sincere', 'thoughtful', 'upbeat',
        'vibrant', 'wonderful', 'xenial', 'youthful', 'zesty', 'amazing', 'bold', 'clever', 'daring', 'enthusiastic',
        'fearless', 'glorious', 'heroic', 'innovative', 'jovial', 'knowledgeable', 'legendary', 'mighty', 'notable', 'outstanding',
        'passionate', 'quick-witted', 'resourceful', 'spirited', 'tenacious', 'unwavering', 'valiant', 'wise', 'xenodochial', 'yearning', 'zealous'
    ];
    var nouns = [
        'gamer', 'wizard', 'explorer', 'hero', 'star', 'champion', 'adventurer', 'warrior', 'guardian', 'legend',
        'pioneer', 'seeker', 'conqueror', 'savant', 'guru', 'sage', 'trailblazer', 'visionary', 'strategist', 'commander',
        'maverick', 'scholar', 'craftsman', 'artisan', 'virtuoso', 'prodigy', 'genius', 'maestro', 'ace', 'phenomenon',
        'whiz', 'luminary', 'thinker', 'creator', 'innovator', 'maker', 'inventor', 'engineer', 'architect', 'designer',
        'leader', 'captain', 'director', 'chief', 'executive', 'manager', 'officer', 'operator', 'agent', 'analyst',
        'consultant', 'advisor', 'mentor', 'guide', 'teacher', 'educator', 'coach', 'trainer', 'instructor', 'professor',
        'scientist', 'researcher', 'doctor', 'physician', 'surgeon', 'specialist', 'expert', 'master', 'professional', 'artist',
        'painter', 'sculptor', 'musician', 'composer', 'singer', 'dancer', 'actor', 'performer', 'writer', 'author',
        'poet', 'journalist', 'reporter', 'editor', 'blogger', 'vlogger', 'broadcaster', 'presenter', 'speaker', 'orator',
        'storyteller', 'narrator', 'communicator', 'debater', 'negotiator', 'mediator', 'peacemaker', 'diplomat', 'ambassador', 'envoy'
    ];
    var suffixes = [
        '001', '002', '003', '004', '005', '006', '007', '008', '009', '010', '011', '012', '013', '014', '015',
        '016', '017', '018', '019', '020', '021', '022', '023', '024', '025', '026', '027', '028', '029', '030',
        '031', '032', '033', '034', '035', '036', '037', '038', '039', '040', '041', '042', '043', '044', '045',
        '046', '047', '048', '049', '050', '051', '052', '053', '054', '055', '056', '057', '058', '059', '060',
        '061', '062', '063', '064', '065', '066', '067', '068', '069', '070', '071', '072', '073', '074', '075',
        '076', '077', '078', '079', '080', '081', '082', '083', '084', '085', '086', '087', '088', '089', '090',
        '091', '092', '093', '094', '095', '096', '097', '098', '099', '100'
    ];

    var adjective1 = getRandomElement(adjectives);
    var adjective2 = getRandomElement(adjectives);
    var noun = getRandomElement(nouns);
    var suffix = getRandomElement(suffixes);

    return adjective1 + '-' + adjective2 + '-' + noun + '-' + suffix;
}

  // Retrieve or generate a unique visitor ID
var visitorId = getCookie('visitor_id');
if (!visitorId) {
    visitorId = generateReadableId();
    setCookie('visitor_id', visitorId, 365);
}

console.log("Visitor ID: " + visitorId);