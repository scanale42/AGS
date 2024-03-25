/*   STEP 1   */
export const leagueID = "1050477028249657344"; // your league ID
export const leagueName = "Any Given Sunday"; // your league name
export const dues = 50; // (optional) used in template constitution page
export const dynasty = true; // true for dynasty leagues, false for redraft and keeper
export const enableBlog = true; // requires VITE_CONTENTFUL_ACCESS_TOKEN and VITE_CONTENTFUL_SPACE environment variables


/*   STEP 2   */
export const homepageText = `
  <p>A fantasy football league created by degenerates for degenerates.</p>

`;

/*   STEP 3   */
/*
3 managers as an example. Uncomment (remove the //) before each line to make it live code
If you're having trouble, reference the Training Wheels' Manager Section
https://github.com/nmelhado/league-page/blob/master/TRAINING_WHEELS.md#ii-adding-managers-and-changing-the-homepage-text
*/

// To omit an optional field, set it's value to null

export const managers = [
    {
      // Roster 0
      "managerID": "466003413092528128",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
      "name": "Scott Canale",
      "location": "Hudsonville, Michgigan", // (optional)
      "bio": "Scott's been playing Fantasy Football since 2004 and according to what he tells his wife after shelling out all the buy-ins, he's never had a losing season. ",
      "photo": "/managers/Scott_headshot.jpg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2004, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "gb", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Ralph Canale", // Can be anything (usually your rival's name)
        link: 1, // manager array number within this array, or null to link back to all managers page
        image: "/managers/no_picture.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 4663, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "TE", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "If you're not first, you're last", // (optional)
      "tradingScale": 10, // 1 - 10 (optional)
      "preferredContact": "Sleeper",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      // Roster 1
      "managerID": "824061142556053504",
      "name": "Ralph Canale",
      "location": "Golf Course, USA", // (optional)
      "bio": "Ralph recently took up dyanasty leagues and after winning his first two seaons in in his first start-up league, he's caught the bug and looking for some more notches to add to his belt. He's a life-long Chicago White Sox, Bulls, and... Green Bay Packer fan? ",
      "photo": "/managers/no_picture.jpg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2010, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "gb", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Everyone", // Can be anything (usually your rival's name)
        link: null, // manager array number within this array, or null to link back to all managers page
        image: "/managers/everyone.png", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 261, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "QB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "Just Win Baby",
      "tradingScale": 8, // 1 - 10
      "preferredContact": "Carrier Pigeon", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      // Roster 2
      "managerID": "334781459497766912",
      "name": "OFFlyCOLD",
      "location": "Location: ???", // (optional)
      "bio": "Biography Incoming ",
      "photo": "/managers/no_picture.jpg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2024, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "dal", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Everyone", // Can be anything (usually your rival's name)
        link: null, // manager array number within this array, or null to link back to all managers page
        image: "/managers/offycold.png", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 6786, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "It's a riddle wrapped in a mystery inside an Enigma",
      "tradingScale": 5, // 1 - 10
      "preferredContact": "Phone", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      // Roster 3
      "managerID": "471077147637706752",
      "name": "dwr02000",
      "location": "Location: ???", // (optional)
      "bio": "Biography Incoming ",
      "photo": "/managers/no_picture.jpg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 9229, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "sf", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Everyone", // Can be anything (usually your rival's name)
        link: null, // manager array number within this array, or null to link back to all managers page
        image: "/managers/everyone.png", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 6786, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Rookie", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "It's a riddle wrapped in a mystery inside an Enigma",
      "tradingScale": 5, // 1 - 10
      "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      // Roster 4
      "managerID": "607014567947599872",
      "name": "Jamesobs51",
      "location": "Location: ???", // (optional)
      "bio": "Biography Incoming ",
      "photo": "/managers/no_picture.jpg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2024, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "chi", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Everyone", // Can be anything (usually your rival's name)
        link: null, // manager array number within this array, or null to link back to all managers page
        image: "/managers/everyone.png", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 6794, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Mix", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "It's a riddle wrapped in a mystery inside an Enigma",
      "tradingScale": 5, // 1 - 10
      "preferredContact": "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      // Roster 5
      "managerID": "638408282150641664",
      "name": "Mademan",
      "location": "Location: ???", // (optional)
      "bio": "Biography Incoming ",
      "photo": "/managers/no_picture.jpg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2024, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "kc", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Everyone", // Can be anything (usually your rival's name)
        link: null, // manager array number within this array, or null to link back to all managers page
        image: "/managers/everyone.png", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 4046, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "QB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "It's a riddle wrapped in a mystery inside an Enigma",
      "tradingScale": 5, // 1 - 10
      "preferredContact": "Discord", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      // Roster 6
      "managerID": "669235916149178368",
      "name": "Thomas",
      "location": "Atlanta", // (optional)
      "bio": "Mr. Deeds - no, not Adam Sandler (or so he'd have you believe) has been playing Fantasy Football for nearly 15 years. Father of 2 and VP of a construction company, you better tread carefully lest you find yourself the proud owner of some cement shoes. In his spare time he'd rather be watching baseball instead of football and listening to some complex, heavey music.",
      "photo": "/managers/no_picture.jpg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2010, // (optional) when did the manager start playing fantasy football
      // "favoriteTeam": "atl", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Dynasty", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "OFFlyCOLD", // Can be anything (usually your rival's name)
        link: 2, // manager array number within this array, or null to link back to all managers page
        image: "/managers/offycold.png", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      // "favoritePlayer": 7547, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "RB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Mix", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "Let it ride.",
      "tradingScale": 7, // 1 - 10
      "preferredContact": "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      // Roster 7
      "managerID": "703393205185507328",
      "name": "molson2111",
      "location": "Location: ???", // (optional)
      "bio": "Biography Incoming ",
      "photo": "/managers/no_picture.jpg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2024, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "sf", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Everyone", // Can be anything (usually your rival's name)
        link: null, // manager array number within this array, or null to link back to all managers page
        image: "/managers/everyone.png", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 7642, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Mix", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "It's a riddle wrapped in a mystery inside an Enigma",
      "tradingScale": 5, // 1 - 10
      "preferredContact": "WhatsApp", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      // Roster 8
      "managerID": "726683858744991744",
      "name": "PAKattack92",
      "location": "Location: ???", // (optional)
      "bio": "Biography Incoming ",
      "photo": "/managers/no_picture.jpg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2024, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "pit", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Everyone", // Can be anything (usually your rival's name)
        link: null, // manager array number within this array, or null to link back to all managers page
        image: "/managers/everyone.png", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 5237, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Rookie", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "It's a riddle wrapped in a mystery inside an Enigma",
      "tradingScale": 5, // 1 - 10
      "preferredContact": "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      // Roster 9
      "managerID": "728737690907996160",
      "name": "BoyzIIBen",
      "location": "Location: ???", // (optional)
      "bio": "Biography Incoming ",
      "photo": "/managers/no_picture.jpg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2024, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "lac", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Everyone", // Can be anything (usually your rival's name)
        link: null, // manager array number within this array, or null to link back to all managers page
        image: "/managers/everyone.png", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 6797, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "It's a riddle wrapped in a mystery inside an Enigma",
      "tradingScale": 5, // 1 - 10
      "preferredContact": "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      // Roster 10
      "managerID": "729778687251185664",
      "name": "bdpr2000",
      "location": "Location: ???", // (optional)
      "bio": "Biography Incoming ",
      "photo": "/managers/no_picture.jpg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2024, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "bal", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Everyone", // Can be anything (usually your rival's name)
        link: null, // manager array number within this array, or null to link back to all managers page
        image: "/managers/everyone.png", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 6994, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "It's a riddle wrapped in a mystery inside an Enigma",
      "tradingScale": 5, // 1 - 10
      "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      // Roster 11
      "managerID": "1051257514970509312",
      "name": "thor906",
      "location": "Location: ???", // (optional)
      "bio": "Biography Incoming ",
      "photo": "/managers/no_picture.jpg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 8519, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "cin", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Everyone", // Can be anything (usually your rival's name)
        link: null, // manager array number within this array, or null to link back to all managers page
        image: "/managers/everyone.png", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 6786, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "It's a riddle wrapped in a mystery inside an Enigma",
      "tradingScale": 5, // 1 - 10
      "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },

  ]
  
  
  /*   !!  !!  IMPORTANT  !!  !! */
  /*
  Below is the most up to-date version of a manager. Please leave this commented out
  and don't delete it. This will be updated if any fields are added, removed or changed
  and will allow updates without causing merge conflicts
  */
  
    // {
    //   "roster": 3,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
    //   "managerID": "12345678",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
    //   "name": "Your Name",
    //   "tookOver": 2020, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise
    //   "location": "Brooklyn", // (optional)
    //   "bio": "Lorem ipsum...",
    //   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
    //   "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
    //   "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    //   "rival": {
    //     name: "Rival", // Can be anything (usually your rival's name)
    //     link: 6, // manager array number within this array, or null to link back to all managers page
    //     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    //   },
    //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    //   "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    //   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    //   "philosophy": "Your fantasy team's philosophy", // (optional)
    //   "tradingScale": 10, // 1 - 10 (optional)
    //   "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    // },
    
