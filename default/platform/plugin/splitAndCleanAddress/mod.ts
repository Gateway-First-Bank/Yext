const USAddressAbbreviationMatches = [
  { Regex: /(\b)sq(\b)/gi, ReplaceWith: 'Square' },
  { Regex: /(\b)av(\b)/gi, ReplaceWith: 'Ave' },
  { Regex: /(\b)bl(v?)(\b)/gi, ReplaceWith: 'Blvd' },
  { Regex: /(\b)twp(\b)/gi, ReplaceWith: 'Township' },
  { Regex: /(\b)hts(\b)/gi, ReplaceWith: 'Heights' },
  { Regex: /(\b)est(\b)/gi, ReplaceWith: 'Estates' },
  { Regex: /(\b)lk(\b)/gi, ReplaceWith: 'Lake' },
  { Regex: /(\b)co spgs(\b)/gi, ReplaceWith: 'Colorado Springs' },
  { Regex: /(\b)spgs(\b)/gi, ReplaceWith: 'Springs' },
  { Regex: /(\b)hls(\b)/gi, ReplaceWith: 'Hills' },
  { Regex: /(\b)vlg(\b)/gi, ReplaceWith: 'Village' },
  { Regex: /(\b)bch(\b)/gi, ReplaceWith: 'Beach' },
  { Regex: /(\b)crk(\b)/gi, ReplaceWith: 'Creek' },
  { Regex: /(\b)pk(\b)/gi, ReplaceWith: 'Park' },
  { Regex: /(\b)jctn(\b)/gi, ReplaceWith: 'Junction' },
  { Regex: /(\b)vly(\b)/gi, ReplaceWith: 'Valley' },
  { Regex: /(\b)est(\b)/gi, ReplaceWith: 'Estates' },
  { Regex: /(\b)grv(\b)/gi, ReplaceWith: 'Grove' },
];

const USAddressCapitalizationMatches = [
  { Regex: /(\b)llp(\b)/gi, ReplaceWith: 'LLP' },
  { Regex: /(\b)mmp(\b)/gi, ReplaceWith: 'MMP' },
  { Regex: /(\b)n(\b)/gi, ReplaceWith: 'N' },
  { Regex: /(\b)e(\b)/gi, ReplaceWith: 'E' },
  { Regex: /(\b)(?<!\')s(\b)/gi, ReplaceWith: 'S' },
  { Regex: /(\b)w(\b)/gi, ReplaceWith: 'W' },
  { Regex: /(\b)n(\s?)w(\b)/gi, ReplaceWith: 'NW' },
  { Regex: /(\b)n(\s?)e(\b)/gi, ReplaceWith: 'NE' },
  { Regex: /(\b)s(\s?)w(\b)/gi, ReplaceWith: 'SW' },
  { Regex: /(\b)s(\s?)e(\b)/gi, ReplaceWith: 'SE' },
  { Regex: /(\b)us(\b)/gi, ReplaceWith: 'US' },
  { Regex: /(\b)fm(\b)/gi, ReplaceWith: 'FM' },
  { Regex: /1st/gi, ReplaceWith: '1st' },
  { Regex: /2nd/gi, ReplaceWith: '2nd' },
  { Regex: /3rd/gi, ReplaceWith: '3rd' },
  { Regex: /4th/gi, ReplaceWith: '4th' },
  { Regex: /5th/gi, ReplaceWith: '5th' },
  { Regex: /6th/gi, ReplaceWith: '6th' },
  { Regex: /7th/gi, ReplaceWith: '7th' },
  { Regex: /8th/gi, ReplaceWith: '8th' },
  { Regex: /9th/gi, ReplaceWith: '9th' },
  { Regex: /0th/gi, ReplaceWith: '0th' },
  { Regex: /1th/gi, ReplaceWith: '1th' },
  { Regex: /2th/gi, ReplaceWith: '2th' },
  { Regex: /3th/gi, ReplaceWith: '3th' },
];

// USAddressStateMatches uppercases state capitalizations (and DC)
// Excludes states that match other words or abbreviations
// AL (The), CO (Corporation), DE (Of), FL (Floor), IN, LA (The), MA, MT (Mountain), OR, CT (Court)
const USAddressStateMatches = [
  { Regex: /(\b)ak(\b)/gi, ReplaceWith: 'AK' },
  { Regex: /(\b)az(\b)/gi, ReplaceWith: 'AZ' },
  { Regex: /(\b)ar(\b)/gi, ReplaceWith: 'AR' },
  { Regex: /(\b)ca(\b)/gi, ReplaceWith: 'CA' },
  { Regex: /(\b)dc(\b)/gi, ReplaceWith: 'DC' },
  { Regex: /(\b)ga(\b)/gi, ReplaceWith: 'GA' },
  { Regex: /(\b)hi(\b)/gi, ReplaceWith: 'HI' },
  { Regex: /(\b)id(\b)/gi, ReplaceWith: 'ID' },
  { Regex: /(\b)il(\b)/gi, ReplaceWith: 'IL' },
  { Regex: /(\b)ia(\b)/gi, ReplaceWith: 'IA' },
  { Regex: /(\b)ks(\b)/gi, ReplaceWith: 'KS' },
  { Regex: /(\b)ky(\b)/gi, ReplaceWith: 'KY' },
  { Regex: /(\b)me(\b)/gi, ReplaceWith: 'ME' },
  { Regex: /(\b)md(\b)/gi, ReplaceWith: 'MD' },
  { Regex: /(\b)mi(\b)/gi, ReplaceWith: 'MI' },
  { Regex: /(\b)mn(\b)/gi, ReplaceWith: 'MN' },
  { Regex: /(\b)ms(\b)/gi, ReplaceWith: 'MS' },
  { Regex: /(\b)mo(\b)/gi, ReplaceWith: 'MO' },
  { Regex: /(\b)ne(\b)/gi, ReplaceWith: 'NE' },
  { Regex: /(\b)nv(\b)/gi, ReplaceWith: 'NV' },
  { Regex: /(\b)nh(\b)/gi, ReplaceWith: 'NH' },
  { Regex: /(\b)nj(\b)/gi, ReplaceWith: 'NJ' },
  { Regex: /(\b)nm(\b)/gi, ReplaceWith: 'NM' },
  { Regex: /(\b)ny(\b)/gi, ReplaceWith: 'NY' },
  { Regex: /(\b)nc(\b)/gi, ReplaceWith: 'NC' },
  { Regex: /(\b)nd(\b)/gi, ReplaceWith: 'ND' },
  { Regex: /(\b)oh(\b)/gi, ReplaceWith: 'OH' },
  { Regex: /(\b)ok(\b)/gi, ReplaceWith: 'OK' },
  { Regex: /(\b)pa(\b)/gi, ReplaceWith: 'PA' },
  { Regex: /(\b)ri(\b)/gi, ReplaceWith: 'RI' },
  { Regex: /(\b)sc(\b)/gi, ReplaceWith: 'SC' },
  { Regex: /(\b)sd(\b)/gi, ReplaceWith: 'SD' },
  { Regex: /(\b)tn(\b)/gi, ReplaceWith: 'TN' },
  { Regex: /(\b)tx(\b)/gi, ReplaceWith: 'TX' },
  { Regex: /(\b)ut(\b)/gi, ReplaceWith: 'UT' },
  { Regex: /(\b)vt(\b)/gi, ReplaceWith: 'VT' },
  { Regex: /(\b)va(\b)/gi, ReplaceWith: 'VA' },
  { Regex: /(\b)wa(\b)/gi, ReplaceWith: 'WA' },
  { Regex: /(\b)wv(\b)/gi, ReplaceWith: 'WV' },
  { Regex: /(\b)wi(\b)/gi, ReplaceWith: 'WI' },
  { Regex: /(\b)wy(\b)/gi, ReplaceWith: 'WY' },
];

const GenericCapitalizationMatches = [
  { Regex: /(\b)mcm/gi, ReplaceWith: 'McM' },
  { Regex: /(\b)mcs/gi, ReplaceWith: 'McS' },
  { Regex: /(\b)mcc/gi, ReplaceWith: 'McC' },
  { Regex: /(\b)mck/gi, ReplaceWith: 'McK' },
  { Regex: /(\b)mcg/gi, ReplaceWith: 'McG' },
  { Regex: /(\b)mca/gi, ReplaceWith: 'McA' },
  { Regex: /(\b)mcb/gi, ReplaceWith: 'McB' },
  { Regex: /(\b)mcl/gi, ReplaceWith: 'McL' },
  { Regex: /(\b)mcf/gi, ReplaceWith: 'McF' },
  { Regex: /(\b)mcv/gi, ReplaceWith: 'McV' },
  { Regex: /(\b)mch/gi, ReplaceWith: 'McH' },
  { Regex: /(\b)mcn/gi, ReplaceWith: 'McN' },
  { Regex: /(\b)mcd/gi, ReplaceWith: 'McD' },
  { Regex: /(\b)mcp/gi, ReplaceWith: 'McP' },
  { Regex: /(\b)macc/gi, ReplaceWith: 'MacC' },
  { Regex: /(\b)o's/gi, ReplaceWith: "O'S" },
  { Regex: /'S(\b)/g, ReplaceWith: "'s" },
];

const NameCapitalizationMatches = [
  { Regex: /(\b)ii(\b)/gi, ReplaceWith: 'II' },
  { Regex: /(\b)llc(\b)/gi, ReplaceWith: 'LLC' },
  { Regex: /(\b)iii(\b)/gi, ReplaceWith: 'III' },
  { Regex: /(\b)iv(\b)/gi, ReplaceWith: 'IV' },
  { Regex: /(\b)llm(\b)/gi, ReplaceWith: 'LLM' },
  { Regex: /(\b)od(\b)/gi, ReplaceWith: 'OD' },
  { Regex: /(\b)dds(\b)/gi, ReplaceWith: 'DDS' },
  { Regex: /(\b)md(\b)/gi, ReplaceWith: 'MD' },
];

const letterAfterNumberRegex = /(\b)[0-9]+[a-z](\b)/g;
const trailingPunctuationRegex = /[,|/:|;|-]$/g;

const USAddress1Flags = [
  'alley',
  'aly',
  'annex',
  'anx',
  'arcade',
  'arc',
  'avenue',
  'ave',
  'bayoo',
  'byu',
  'beach',
  'bch',
  'bend',
  'bnd',
  'bluff',
  'blf',
  'bluffs',
  'blfs',
  'bottom',
  'btm',
  'boulevard',
  'blvd',
  'branch',
  'br',
  'bridge',
  'brg',
  'brook',
  'brk',
  'brooks',
  'brks',
  'burg',
  'bg',
  'burgs',
  'bgs',
  'bypass',
  'byp',
  'camp',
  'cp',
  'canyon',
  'cyn',
  'cape',
  'cpe',
  'causeway',
  'cswy',
  'center',
  'ctr',
  'centers',
  'ctrs',
  'circle',
  'cir',
  'cliff',
  'clf',
  'club',
  'clb',
  'common',
  'cmn',
  'corner',
  'cor',
  'course',
  'crse',
  'court',
  'ct',
  'cove',
  'cv',
  'creek',
  'crk',
  'crescent',
  'cres',
  'crest',
  'crst',
  'crossing',
  'xing',
  'crossroad',
  'xrd',
  'curve',
  'curv',
  'dale',
  'dl',
  'dam',
  'dm',
  'divide',
  'dv',
  'drive',
  'dr',
  'estate',
  'est',
  'expressway',
  'expy',
  'extension',
  'ext',
  'fall',
  'falls',
  'fls',
  'ferry',
  'fry',
  'field',
  'fld',
  'flat',
  'flt',
  'flats',
  'flts',
  'fm',
  'ford',
  'frd',
  'forest',
  'frst',
  'forge',
  'frg',
  'fork',
  'frk',
  'fort',
  'ft',
  'freeway',
  'fwy',
  'garden',
  'gdn',
  'gateway',
  'gtwy',
  'glen',
  'gln',
  'green',
  'grn',
  'grove',
  'grv',
  'harbor',
  'hbr',
  'haven',
  'hvn',
  'heights',
  'hts',
  'highway',
  'hwy',
  'hill',
  'hl',
  'hills',
  'hls',
  'hollow',
  'holw',
  'inlet',
  'inlt',
  'interstate',
  'i',
  'island',
  'is',
  'islands',
  'iss',
  'isle',
  'junction',
  'jct',
  'key',
  'ky',
  'knoll',
  'knl',
  'lake',
  'lk',
  'lakes',
  'lks',
  'land',
  'land',
  'landing',
  'lndg',
  'lane',
  'ln',
  'light',
  'lgt',
  'lights',
  'lgts',
  'loaf',
  'lf',
  'lock',
  'lck',
  'lodge',
  'ldg',
  'loop',
  'mall',
  'manor',
  'mnr',
  'meadow',
  'mdw',
  'mews',
  'mill',
  'ml',
  'mission',
  'msn',
  'moorhead',
  'mhd',
  'motorway',
  'mtwy',
  'mount',
  'mt',
  'mountain',
  'mtn',
  'mountains',
  'mtns',
  'neck',
  'nck',
  'orchard',
  'orch',
  'oval',
  'overpass',
  'opas',
  'park',
  'parkway',
  'pkwy',
  'pass',
  'path',
  'pike',
  'pine',
  'pne',
  'place',
  'pl',
  'plain',
  'pln',
  'plaza',
  'plz',
  'point',
  'pt',
  'port',
  'prt',
  'prairie',
  'pr',
  'radial',
  'radl',
  'ramp',
  'ranch',
  'rnch',
  'rapid',
  'rpd',
  'rapids',
  'rpds',
  'rest',
  'rst',
  'ridge',
  'rdg',
  'river',
  'riv',
  'road',
  'rd',
  'roads',
  'rds',
  'route',
  'rte',
  'row',
  'rr',
  'rue',
  'run',
  'shoal',
  'shl',
  'shore',
  'shr',
  'skyway',
  'skwy',
  'spring',
  'spg',
  'spur',
  'square',
  'sq',
  'station',
  'sta',
  'stream',
  'strm',
  'street',
  'st',
  'summit',
  'smt',
  'terrace',
  'ter',
  'throughway',
  'trwy',
  'trace',
  'trce',
  'track',
  'trak',
  'trail',
  'trl',
  'tunnel',
  'tunl',
  'turnpike',
  'tpke',
  'underpass',
  'upas',
  'union',
  'un',
  'valley',
  'vly',
  'viaduct',
  'via',
  'view',
  'vw',
  'village',
  'vlg',
  'ville',
  'vl',
  'vista',
  'vis',
  'walk',
  'wall',
  'way',
  'well',
  'wl',
];

const USAddress2Flags = [
  'apartment',
  'apt',
  'building',
  'bldg',
  'department',
  'dept',
  'floor',
  'fl',
  'lot',
  'office',
  'ofc',
  'room',
  'rm',
  'space',
  'spc',
  'suite',
  'suites',
  'ste',
  'unit',
];

export function splitAndCleanUSAddress(row: { input: string }) {
  if (typeof row.input !== 'string') {
    return null;
  }
  let { address1, address2 } = splitUSAddress(row.input);
  address1 = cleanUSAddress(address1);
  address2 = cleanUSAddress(address2);

  return { address1: address1, address2: address2 };
}

export function splitUSAddress(input: string) {
  let addressTokens = input.split(' ');
  let lastAddress2Indx = -1;

  for (let i = addressTokens.length - 1; i >= 0; i--) {
    let token = addressTokens[i];
    if (isUSAddress2Flag(token, input)) {
      lastAddress2Indx = i;
    } else if (isUSAddress1Flag(token)) {
      if (lastAddress2Indx > -1) {
        return {
          address1: addressTokens.slice(0, lastAddress2Indx).join(' '),
          address2: addressTokens.slice(lastAddress2Indx).join(' '),
        };
      } else {
        //special checking to handle seeing an 'I' before an address1 flag was seen
        if (token.toLowerCase() == 'i') {
          continue;
        }
        return { address1: input, address2: '' };
      }
    }
  }

  if (lastAddress2Indx > -1) {
    return {
      address1: addressTokens.slice(0, lastAddress2Indx).join(' '),
      address2: addressTokens.slice(lastAddress2Indx).join(' '),
    };
  }
  return { address1: input, address2: '' };
}

export function cleanUSAddress(input: string) {
  for (let r in USAddressAbbreviationMatches) {
    input = input.replaceAll(
      USAddressAbbreviationMatches[r].Regex,
      USAddressAbbreviationMatches[r].ReplaceWith
    );
  }
  input = cleanEnglishText(input);
  for (let r in USAddressCapitalizationMatches) {
    input = input.replaceAll(
      USAddressCapitalizationMatches[r].Regex,
      USAddressCapitalizationMatches[r].ReplaceWith
    );
  }
  input = capitalizeLetterAfterNumber(input);
  for (let r in USAddressStateMatches) {
    input = input.replaceAll(
      USAddressStateMatches[r].Regex,
      USAddressStateMatches[r].ReplaceWith
    );
  }
  input = removeTrailingPunctuationAndSpaces(input);
  return input;
}

function upperCase(match: string) {
  return match.toUpperCase();
}

export function capitalizeLetterAfterNumber(input: string) {
  return input.replace(letterAfterNumberRegex, upperCase);
}

export function removeTrailingPunctuationAndSpaces(input: string) {
  input = input.trim();
  input = input.replaceAll(trailingPunctuationRegex, '');
  input = input.trim();
  return input;
}

function titleCase(input: string) {
  return input
    .toLowerCase()
    .split(' ')
    .reduce(
      (s, c) => s + '' + (c.charAt(0).toUpperCase() + c.slice(1) + ' '),
      ''
    );
}

export function cleanEnglishText(input: string) {
  input = titleCase(input);
  for (let r in GenericCapitalizationMatches) {
    input = input.replaceAll(
      GenericCapitalizationMatches[r].Regex,
      GenericCapitalizationMatches[r].ReplaceWith
    );
  }
  return input.trim();
}

export function cleanEnglishName(input: string) {
  input = cleanEnglishText(input);
  for (let r in NameCapitalizationMatches) {
    input = input.replaceAll(
      NameCapitalizationMatches[r].Regex,
      NameCapitalizationMatches[r].ReplaceWith
    );
  }
  return input.trim();
}

function isUSAddress1Flag(token: string) {
  token = token.toLowerCase();
  for (let i in USAddress1Flags) {
    if (USAddress1Flags[i] == token) {
      return true;
    }
  }
  return false;
}

const suiteAsNumberRegex = /^#(.)*$/;

function isUSAddress2Flag(token: string, address: string) {
  token = token.toLowerCase();
  if (token.match(suiteAsNumberRegex)) {
    return true;
  }

  token = token.replace(/\.$/, '');
  for (let i in USAddress2Flags) {
    if (USAddress2Flags[i] == token) {
      if (!isUSAddress2FlagException(token, address)) {
        return true;
      }
      return false;
    }
  }
  return false;
}

function isUSAddress2FlagException(token: string, address: string) {
  if (token == 'ste') {
    if (address.match(/^[0-9]+ Ste[.]* [\D]+/i)) {
      //Ste. can also abbreviate Sainte
      return true;
    }
  }
  return false;
}

const output = splitAndCleanUSAddress('1620 N Carpenter Rd Bldg D Ste 57B');
console.log(output);
