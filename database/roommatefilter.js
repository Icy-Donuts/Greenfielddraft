var WordPOS = require('wordpos');
var stopwords = require('./stopwords.js').words
// console.log('array',Array.isArray(stopwords))
wordpos = new WordPOS();
var Promise = require('bluebird')
var s="Accessible\nActive\nAdaptable\nAdmirable\nAdventurous\nAgreeable\nAlert\nAllocentric\nAmiable\nAnticipative\nAppreciative\nArticulate\nAspiring\nAthletic\nAttractive\nBalanced\nBenevolent\nBrilliant\nCalm\nCapable\nCaptivating\nCaring\nChallenging\nCharismatic\nCharming\nCheerful\nClean\nClear-headed\nClever\nColorful\nCompanionly\nCompassionate\nConciliatory\nConfident\nConscientious\nConsiderate\nConstant\nContemplative\nCooperative\nCourageous\nCourteous\nCreative\nCultured\nCurious\nDaring\nDebonair\nDecent\nDecisive\nDedicated\nDeep\nDignified\nDirected\nDisciplined\nDiscreet\nDramatic\nDutiful\nDynamic\nEarnest\nEbullient\nEducated\nEfficient\nElegant\nEloquent\nEmpathetic\nEnergetic\nEnthusiastic\nEsthetic\nExciting\nExtraordinary\nFair\nFaithful\nFarsighted\nFelicific\nFirm\nFlexible\nFocused\nForecful\nForgiving\nForthright\nFreethinking\nFriendly\nFun-loving\nGallant\nGenerous\nGentle\nGenuine\nGood-natured\nGracious\nHardworking\nHealthy\nHearty\nHelpful\nHerioc\nHigh-minded\nHonest\nHonorable\nHumble\nHumorous\nIdealistic\nImaginative\nImpressive\nIncisive\nIncorruptible\nIndependent\nIndividualistic\nInnovative\nInoffensive\nInsightful\nInsouciant\nIntelligent\nIntuitive\nInvulnerable\nKind\nKnowledge\nLeaderly\nLeisurely\nLiberal\nLogical\nLovable\nLoyal\nLyrical\nMagnanimous\nMany-sided\nMasculine (Manly)\nMature\nMethodical\nMaticulous\nModerate\nModest\nMulti-leveled\nNeat\nNonauthoritarian\nObjective\nObservant\nOpen\nOptimistic\nOrderly\nOrganized\nOriginal\nPainstaking\nPassionate\nPatient\nPatriotic\nPeaceful\nPerceptive\nPerfectionist\nPersonable\nPersuasive\nPlanful\nPlayful\nPolished\nPopular\nPractical\nPrecise\nPrincipled\nProfound\nProtean\nProtective\nProvidential\nPrudent\nPunctual\nPruposeful\nRational\nRealistic\nReflective\nRelaxed\nReliable\nResourceful\nRespectful\nResponsible\nResponsive\nReverential\nRomantic\nRustic\nSage\nSane\nScholarly\nScrupulous\nSecure\nSelfless\nSelf-critical\nSelf-defacing\nSelf-denying\nSelf-reliant\nSelf-sufficent\nSensitive\nSentimental\nSeraphic\nSerious\nSexy\nSharing\nShrewd\nSimple\nSkillful\nSober\nSociable\nSolid\nSophisticated\nSpontaneous\nSporting\nStable\nSteadfast\nSteady\nStoic\nStrong\nStudious\nSuave\nSubtle\nSweet\nSympathetic\nSystematic\nTasteful\nTeacherly\nThorough\nTidy\nTolerant\nTractable\nTrusting\nUncomplaining\nUnderstanding\nUndogmatic\nUnfoolable\nUpright\nUrbane\nVenturesome\nVivacious\nWarm\nWell-bred\nWell-read\nWell-rounded\nWinning\nWise\nWitty\nYouthful\nNeutral Traits (292 = 18%)\nAbsentminded\nAggressive\nAmbitious\nAmusing\nArtful\nAscetic\nAuthoritarian\nBig-thinking\nBoyish\nBreezy\nBusinesslike\nBusy\nCasual\nCrebral\nChummy\nCircumspect\nCompetitive\nComplex\nConfidential\nConservative\nContradictory\nCrisp\nCute\nDeceptive\nDetermined\nDominating\nDreamy\nDriving\nDroll\nDry\nEarthy\nEffeminate\nEmotional\nEnigmatic\nExperimental\nFamilial\nFolksy\nFormal\nFreewheeling\nFrugal\nGlamorous\nGuileless\nHigh-spirited\nHuried\nHypnotic\nIconoclastic\nIdiosyncratic\nImpassive\nImpersonal\nImpressionable\nIntense\nInvisible\nIrreligious\nIrreverent\nMaternal\nMellow\nModern\nMoralistic\nMystical\nNeutral\nNoncommittal\nNoncompetitive\nObedient\nOld-fashined\nOrdinary\nOutspoken\nPaternalistic\nPhysical\nPlacid\nPolitical\nPredictable\nPreoccupied\nPrivate\nProgressive\nProud\nPure\nQuestioning\nQuiet\nReligious\nReserved\nRestrained\nRetiring\nSarcastic\nSelf-conscious\nSensual\nSkeptical\nSmooth\nSoft\nSolemn\nSolitary\nStern\nStoiid\nStrict\nStubborn\nStylish\nSubjective\nSurprising\nSoft\nTough\nUnaggressive\nUnambitious\nUnceremonious\nUnchanging\nUndemanding\nUnfathomable\nUnhurried\nUninhibited\nUnpatriotic\nUnpredicatable\nUnreligious\nUnsentimental\nWhimsical\nNegative Traits (292 = 46%)\nAbrasive\nAbrupt\nAgonizing\nAimless\nAiry\nAloof\nAmoral\nAngry\nAnxious\nApathetic\nArbitrary\nArgumentative\nArrogantt\nArtificial\nAsocial\nAssertive\nAstigmatic\nBarbaric\nBewildered\nBizarre\nBland\nBlunt\nBiosterous\nBrittle\nBrutal\nCalculating\nCallous\nCantakerous\nCareless\nCautious\nCharmless\nChildish\nClumsy\nCoarse\nCold\nColorless\nComplacent\nComplaintive\nCompulsive\nConceited\nCondemnatory\nConformist\nConfused\nContemptible\nConventional\nCowardly\nCrafty\nCrass\nCrazy\nCriminal\nCritical\nCrude\nCruel\nCynical\nDecadent\nDeceitful\nDelicate\nDemanding\nDependent\nDesperate\nDestructive\nDevious\nDifficult\nDirty\nDisconcerting\nDiscontented\nDiscouraging\nDiscourteous\nDishonest\nDisloyal\nDisobedient\nDisorderly\nDisorganized\nDisputatious\nDisrespectful\nDisruptive\nDissolute\nDissonant\nDistractible\nDisturbing\nDogmatic\nDomineering\nDull\nEasily Discouraged\nEgocentric\nEnervated\nEnvious\nErratic\nEscapist\nExcitable\nExpedient\nExtravagant\nExtreme\nFaithless\nFalse\nFanatical\nFanciful\nFatalistic\nFawning\nFearful\nFickle\nFiery\nFixed\nFlamboyant\nFoolish\nForgetful\nFraudulent\nFrightening\nFrivolous\nGloomy\nGraceless\nGrand\nGreedy\nGrim\nGullible\nHateful\nHaughty\nHedonistic\nHesitant\nHidebound\nHigh-handed\nHostile\nIgnorant\nImitative\nImpatient\nImpractical\nImprudent\nImpulsive\nInconsiderate\nIncurious\nIndecisive\nIndulgent\nInert\nInhibited\nInsecure\nInsensitive\nInsincere\nInsulting\nIntolerant\nIrascible\nIrrational\nIrresponsible\nIrritable\nLazy\nLibidinous\nLoquacious\nMalicious\nMannered\nMannerless\nMawkish\nMealymouthed\nMechanical\nMeddlesome\nMelancholic\nMeretricious\nMessy\nMiserable\nMiserly\nMisguided\nMistaken\nMoney-minded\nMonstrous\nMoody\nMorbid\nMuddle-headed\nNaive\nNarcissistic\nNarrow\nNarrow-minded\nNatty\nNegativistic\nNeglectful\nNeurotic\nNihilistic\nObnoxious\nObsessive\nObvious\nOdd\nOffhand\nOne-dimensional\nOne-sided\nOpinionated\nOpportunistic\nOppressed\nOutrageous\nOverimaginative\nParanoid\nPassive\nPedantic\nPerverse\nPetty\nPharissical\nPhlegmatic\nPlodding\nPompous\nPossessive\nPower-hungry\nPredatory\nPrejudiced\nPresumptuous\nPretentious\nPrim\nProcrastinating\nProfligate\nProvocative\nPugnacious\nPuritanical\nQuirky\nReactionary\nReactive\nRegimental\nRegretful\nRepentant\nRepressed\nResentful\nRidiculous\nRigid\nRitualistic\nRowdy\nRuined\nSadistic\nSanctimonious\nScheming\nScornful\nSecretive\nSedentary\nSelfish\nSelf-indulgent\nShallow\nShortsighted\nShy\nSilly\nSingle-minded\nSloppy\nSlow\nSly\nSmall-thinking\nSoftheaded\nSordid\nSteely\nStiff\nStrong-willed\nStupid\nSubmissive\nSuperficial\nSuperstitious\nSuspicious\nTactless\nTasteless\nTense\nThievish\nThoughtless\nTimid\nTransparent\nTreacherous\nTrendy\nTroublesome\nUnappreciative\nUncaring\nUncharitable\nUnconvincing\nUncooperative\nUncreative\nUncritical\nUnctuous\nUndisciplined\nUnfriendly\nUngrateful\nUnhealthy\nUnimaginative\nUnimpressive\nUnlovable\nUnpolished\nUnprincipled\nUnrealistic\nUnreflective\nUnreliable\nUnrestrained\nUnself-critical\nUnstable\nVacuous\nVague\nVenal\nVenomous\nVindictive\nVulnerable\nWeak\nWeak-willed\nWell-meaning\nWillful\nWishful\nZany\nGay\nSocial\n30\nFemale\nMale\nQueer\nLGBT\nStudent\nProfessional";
list = s.split('\n').map(function(word){return word.toLowerCase();});
var stopwords="a\n\nabout\n\nabove\n\nacross\n\nafter\n\nagain\n\nagainst\n\nall\n\nalmost\n\nalone\n\nalong\n\nalready\n\nalso\n\nalthough\n\nalways\n\namong\n\nan\n\nand\n\nanother\n\nany\n\nanybody\n\nanyone\n\nanything\n\nanywhere\n\nare\n\narea\n\nareas\n\naround\n\nas\n\nask\n\nasked\n\nasking\n\nasks\n\nat\n\naway\n\nb\n\nback\n\nbacked\n\nbacking\n\nbacks\n\nbe\n\nbecame\n\nbecause\n\nbecome\n\nbecomes\n\nbeen\n\nbefore\n\nbegan\n\nbehind\n\nbeing\n\nbeings\n\nbest\n\nbetter\n\nbetween\n\nbig\n\nboth\n\nbut\n\nby\n\nc\n\ncame\n\ncan\n\ncannot\n\ncase\n\ncases\n\ncertain\n\ncertainly\n\nclear\n\nclearly\n\ncome\n\ncould\n\nd\n\ndid\n\ndiffer\n\ndifferent\n\ndifferently\n\ndo\n\ndoes\n\ndone\n\ndown\n\ndown\n\ndowned\n\ndowning\n\ndowns\n\nduring\n\ne\n\neach\n\nearly\n\neither\n\nend\n\nended\n\nending\n\nends\n\nenough\n\neven\n\nevenly\n\never\n\nevery\n\neverybody\n\neveryone\n\neverything\n\neverywhere\n\nf\n\nface\n\nfaces\n\nfact\n\nfacts\n\nfar\n\nfelt\n\nfew\n\nfind\n\nfinds\n\nfirst\n\nfor\n\nfour\n\nfrom\n\nfull\n\nfully\n\nfurther\n\nfurthered\n\nfurthering\n\nfurthers\n\ng\n\ngave\n\ngeneral\n\ngenerally\n\nget\n\ngets\n\ngive\n\ngiven\n\ngives\n\ngo\n\ngoing\n\ngood\n\ngoods\n\ngot\n\ngreat\n\ngreater\n\ngreatest\n\ngroup\n\ngrouped\n\ngrouping\n\ngroups\n\nh\n\nhad\n\nhas\n\nhave\n\nhaving\n\nhe\n\nher\n\nhere\n\nherself\n\nhigh\n\nhigh\n\nhigh\n\nhigher\n\nhighest\n\nhim\n\nhimself\n\nhis\n\nhow\n\nhowever\n\ni\n\nif\n\nimportant\n\nin\n\ninterest\n\ninterested\n\ninteresting\n\ninterests\n\ninto\n\nis\n\nit\n\nits\n\nitself\n\nj\n\njust\n\nk\n\nkeep\n\nkeeps\n\nkind\n\nknew\n\nknow\n\nknown\n\nknows\n\nl\n\nlarge\n\nlargely\n\nlast\n\nlater\n\nlatest\n\nleast\n\nless\n\nlet\n\nlets\n\nlike\n\nlikely\n\nlong\n\nlonger\n\nlongest\n\nm\n\nmade\n\nmake\n\nmaking\n\nman\n\nmany\n\nmay\n\nme\n\nmember\n\nmembers\n\nmen\n\nmight\n\nmore\n\nmost\n\nmostly\n\nmr\n\nmrs\n\nmuch\n\nmust\n\nmy\n\nmyself\n\nn\n\nnecessary\n\nneed\n\nneeded\n\nneeding\n\nneeds\n\nnever\n\nnew\n\nnew\n\nnewer\n\nnewest\n\nnext\n\nno\n\nnobody\n\nnon\n\nnoone\n\nnot\n\nnothing\n\nnow\n\nnowhere\n\nnumber\n\nnumbers\n\no\n\nof\n\noff\n\noften\n\nold\n\nolder\n\noldest\n\non\n\nonce\n\none\n\nonly\n\nopen\n\nopened\n\nopening\n\nopens\n\nor\n\norder\n\nordered\n\nordering\n\norders\n\nother\n\nothers\n\nour\n\nout\n\nover\n\np\n\npart\n\nparted\n\nparting\n\nparts\n\nper\n\nperhaps\n\nplace\n\nplaces\n\npoint\n\npointed\n\npointing\n\npoints\n\npossible\n\npresent\n\npresented\n\npresenting\n\npresents\n\nproblem\n\nproblems\n\nput\n\nputs\n\nq\n\nquite\n\nr\n\nrather\n\nreally\n\nright\n\nright\n\nroom\n\nrooms\n\ns\n\nsaid\n\nsame\n\nsaw\n\nsay\n\nsays\n\nsecond\n\nseconds\n\nsee\n\nseem\n\nseemed\n\nseeming\n\nseems\n\nsees\n\nseveral\n\nshall\n\nshe\n\nshould\n\nshow\n\nshowed\n\nshowing\n\nshows\n\nside\n\nsides\n\nsince\n\nsmall\n\nsmaller\n\nsmallest\n\nso\n\nsome\n\nsomebody\n\nsomeone\n\nsomething\n\nsomewhere\n\nstate\n\nstates\n\nstill\n\nstill\n\nsuch\n\nsure\n\nt\n\ntake\n\ntaken\n\nthan\n\nthat\n\nthe\n\ntheir\n\nthem\n\nthen\n\nthere\n\ntherefore\n\nthese\n\nthey\n\nthing\n\nthings\n\nthink\n\nthinks\n\nthis\n\nthose\n\nthough\n\nthought\n\nthoughts\n\nthree\n\nthrough\n\nthus\n\nto\n\ntoday\n\ntogether\n\ntoo\n\ntook\n\ntoward\n\nturn\n\nturned\n\nturning\n\nturns\n\ntwo\n\nu\n\nunder\n\nuntil\n\nup\n\nupon\n\nus\n\nuse\n\nused\n\nuses\n\nv\n\nvery\n\nw\n\nwant\n\nwanted\n\nwanting\n\nwants\n\nwas\n\nway\n\nways\n\nwe\n\nwell\n\nwells\n\nwent\n\nwere\n\nwhat\n\nwhen\n\nwhere\n\nwhether\n\nwhich\n\nwhile\n\nwho\n\nwhole\n\nwhose\n\nwhy\n\nwill\n\nwith\n\nwithin\n\nwithout\n\nwork\n\nworked\n\nworking\n\nworks\n\nwould\n\nx\n\ny\n\nyear\n\nyears\n\nyet\n\nyou\n\nyoung\n\nyounger\n\nyoungest\n\nyour\n\nyours\n\nz";
stopwords = stopwords.split('\n').map(function(word){return word.toLowerCase();});

// wordpos.getAdjectives('scary angry dog').then(function(obj){console.log(obj)}).catch(function(err){console.log(err)});

String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.split(search).join(replacement);
};

var text = "avalable september 30th rent now and secure your housing plans!: furnished massive bedroom overlooking golden gate park in a beautiful and peaceful upscale apartment for one awesome person with no pets available now term: month to month lease location : this building is located in front of the golden gate park green belt close proximity to park presidio blvd and clement street corridor very close to the deyoung science museum outdoor roller rink and much more! so many great things to explore! love to go to the park and get exercise? now you can go every day if you want to! you will fall in love with this place! if you like the pictures then you will love it in person located just above the trees is this majestic bedroom it has a lot of sunshine and a large mirrored closet you get your own personal heater so you can set it to your desired temperature this room will not compare to anything else! it's twice the size of most san francisco bedrooms and has two large bay windows room is furnished with a $15000 furniture set: a beautiful high end oriental wool rug a queen sized bed from neiman marcus that was hand painted in a beautiful gold finish mattress included you provide the sheets and blanket the room will also have a french marble top nightstand and some art work large custom oversized french chair this large corner unit has been freshly painted throughout hardwood floors and period moldings really make this unit shine you are greeted by a formal entrance with large coat closet living room: nice sized room with full on view of golden gate park kitchen: large simple kitchen with lots of cabinet space and a four burner gas stove has a door to close when in use shared bath: easy to share as we don't have a typical schedule beautiful real tile full bathroom with large window accessed in the hallway laundry: located in the building sharing with: a gay couple in our 30's we are very laid back friendly and work to make the place very nice you will find us to be fairly quiet and very easy to get along with our hobbies include the parks hiking day trips international travel art being vegan antiques and more we are vice free and love a peaceful quiet home the details: rent: $1595 of the $3500 rent for the larger bedroom utilities: water garbage gas electric and wifi for phone/tablet/computer: $50 muni: easy access a block away about 30 min to downtown safeway 5 min walk parking: there is no garage parking available but street parking is available with a permit for san francisco it's fairly easy deposit: $1600 refundable security deposit + first months rent = move in tell us about you when you want to move and what your your desired length of stay is include your phone number and social media links thanks!! see you soon! "
var text2 = "open home: thursday september 8 from 6:00 pm to 6:30 pm rooms are available in a remodeled detached three-story single family residence with hardwood pergo floors throughout in one of the city's most delightful neighborhoods ingleside terrace prices range from $1199 to $1799 it is a short walk to many to coffeehouses restaurants bars and grocery stores such as whole foods market trader joe's stonestown galleria farmers market and west portal village this is a very walkable neighborhood with convenient public transportation - muni's k-line streetcar runs right along ocean avenue and straight to west portal and downtown destinations or down to the glen park or balboa park stations where it connects with bart commuters dream; financial district and soma are approximately twenty minutes away it is a five-minute drive to 280 or 101 freeways for a quick commute to the silicon valley many private tech bus routes pickup nearby this comfy three-story home offers 8-bedrooms with custom built-in closets and 5-remodeled baths two baths in master suites in addition to convenient in-unit washer and dryer! the kitchen is tastefully remodeled with granite countertops and all modern stainless steel appliances this san francisco gem offers a cozy and sunny san francisco front yard and oversized back yard for you and your pet! one pet will be considered providing it is housebroken and friendly there are no pets in the house now! there are currently five occupants two females and three males in our mid-twenties move-in day is anytime in september or october first the lease is for one year clean credit is required if you are a pet owner i would prefer for you to choose the larger room there will be eight people in the house when full if interested please send some info about yourself thanks and look forward to hearing from you! "
var text3 = "hello! we are looking to fill a room in a 5 bedroom/3 bathroom house in the marina just one block off chestnut street. we would prefer a female tenant between the age of 23-28 and the room is available starting october 1st. please email me with a quick blurb about yourself if you are interested also if you could provide a link to your facebook or linkedin along with your phone number that would be greatly appreciated features: 3 full bathrooms laundry facilities large living spaces wet bar outdoor rooftop deck renovated kitchen move in costs: $1640 per month for the room $2125 security deposit "
var text4 = "hello! this posting is for s large studio room in a house in potrero hill the room has private bathroom and access from the front of the house as well as private access to the basement/washer drier and backyard communal spaces bathroom is a full and closet space is very large as well the kitchen is in the house upstairs the backyard is very big and includes two patio areas kitchen is recently remodeled area is very nice great weather and quiet ample street parking great street views of downtown sf upstairs is my room other roommate room available- see ad at http://sfbaycraigslistorg/sfc/roo/ show contact info html kitchen bathroom small office/computer room and living room about me- straight white male i like to cook my own meals mostly am a student and an artist and a gardener i'm pretty chill laid back 420 friendly but the house is owner mandated no smoking so i vape and i have a cool cat who isn't usually here she explores the neighborhood a lot but is very sweet when she's around i eat almost exclusively organically and keep fairly regular hours don't party much may have occasional friends over about you - 20-30s professional/student considerate organized stable can pay bills on time minimal drama non smoker non hc partier ambitious and looking to make he most of your time while living in your next space chill and social as well male/female ok just no couples as par lease rules 3 occupants to the home if interested respond with description of self and links to social media sites plus any questions you have available immediately"
var text5 = "Nice room available to sublet in a top floor 3BD/15 bath apartment near the corner of 16th and Guerrero in the Mission district Room is available to move in OCTOBER 1ST 2016 This is a month to month rental agreement so short term rentals are ok I would like to rent to someone who plans to stay 3 to 6 months maximum Not looking for a long-term subletter or open-ended situation Please tell me how many months you want to rent and your end date If you are not in the city yet we can correspond until you get here but you will have to interview in person ultimately in order to rent the room Room is approx 12 x 12 ft is FURNISHED carpeted and has built in shelving Room is quiet in back end of the apartment so you won't hear as much street/neighborhood noise though this is a noisy neighborhood in general There is not much extra storage space in the rest of the apartment so please be someone who does not have a lot of stuff There would be a total of three people in the apartment including you I am female professional work in healthcare and there is one male who is a student intern in engineering Apartment is very convenient for public transportation near Muni lines 16th Street BART tech bus stops Very walk-able and lively neighborhood with grocery cafe Dolores Park Valencia Street corridor restaurants and bars all a few minutes walk from the apartment This is a very CLEAN and QUIET no-nonsense household so please be someone who is naturally and easily a clean and quiet low-key low-impact person You will not have to do any house chores I take care of that but you will clean up after yourself in the kitchen and bathroom no dishes left in the sink etc This would be an ideal environment for someone who is a short-term intern student or someone who works a lot and values coming home to a house where they know they can have peace and rest with no surprises Preferably you are someone who does not keep late hours on the weeknights as noise carries in this apartment Per the lease agreement I have with the landlord: NO parties NO smokers drugs or heavy alcohol NO pets NO frequent overnight guests (this is not a crash pad for your friends or a second home for your gf/bf) NO loud or amplified music or tv volume Other considerations: No on-site laundry but there is a laundromat 1/2 block away and many others in neighborhood There is no street hook up for cable/satellite tv for our apartment and this has traditionally been a non-tv-watching household so there is no plan to change this No garage or designated parking difficult neighborhood to park in so if you have a car this might not be the place for you unless you're used to the Mission district street parking situation There is no bike storage here eithersorry! Not suitable for work-at-home arrangements Rent is $1250 per month plus utilities which run on average $65 per person and include wireless internet PG E garbage and water First and last month's rent + $1000 deposit to move in Must sign month-to-month rental agreement and provide proof of income credit report and a landlord reference"
var text6 = "We live in a quiet and spacious home in the Mission with 4 bedrooms and 15 baths and we are looking for new roommates to share our home! The house is a lovely 2-story home with several common areas including large living room with fireplace kitchen equipped with a dishwasher sunny studio + piano a second story deck with seating overlooking the lemon tree in the backyard a mud room with a washer/dryer and a garage with tons of storage and parking for one car (additional fee). The backyard is a great area for dogs if you have one! The house feels bright clean and welcoming We have 2 furnished bedrooms available for short-term rentals between October 1 -- November 1 2016 with possible extension to December 1 2016 1st bedroom ($1700 per month): A sunny garden-facing bedroom with a walk-in closet 2nd bedroom ($1900 per month): This bedroom actually has 2 rooms -- one large bedroom with an attached office and walk-in closet Both rooms have ample natural light Additional amenities: - Garage $75 per month - Dog fee $30 per month Housemates: E is a 30 year old medical resident from the South who loves hiking running with my 4 year old labrabull Yazoo and climbing at Mission Cliffs with D D is a 30 year old music composer and recent LA transplant who is working on making a documentary about Nicaragua and has grown addicted to playing chess with F F is a mid 20s entrepreneur from Montreal who plays a mean game of chess and loves cooking drinking fine wine and most importantly entertaining friends at the dinner table. Please respond with a little bit about yourself and times that you could visit the house! "
var text7 = "Fantastic Location! Only one block from JSQ PATH train station (PATH station on Summit entrance)Detached private house at dead-end Street in a very quiet, safe, and nice neighborhood. Brand new hard wood floor. Huge room (walkup third floor) is available immediately. Very sunny, very private furnished A/C room (15x16, there is a full size bed) Only one roommate share bathroom with you. He is a well educated working professional. Convenient to all, laundry, supermarkets, restaurants; One and half month security deposit. Background check and proof of income are required. No smoking. No pets. All utilities are included. Light cooking prefer. If you are interested in, please me with your full name, number, and brief introduction of yourself, I will get back to you asap."
var text8 = "Hey guys, i am looking for a long term tenant for my second bedroom. This is not a sublease you will be renting from my husband and I, this is our home. I am a medical student he's a computer science student. We live in this amazing 2 bedroom and looking for a mature responsible young adult to share the view. here's all the info you need below. feel free to call me anytime."
var text9 = "I am in my 30s looking for a gay rooommate who also loves to cook and play board games";

var test = [text,text2,text3,text4,text5,text6,text7,text8,text9];
test = test.map(function(obj){
	return {text:obj}
})

function addKeyWords(test){

	var totals = {};

	test.forEach(function(obj){
		appendwordCountandaddtoCounter(obj,totals);
	});

	test.forEach(function(obj){
		turnCountintoITDF(obj,totals);
	})


	function appendwordCountandaddtoCounter(resultobj,totalcorpus){
		var newtext = resultobj.text.replace(/\n/g,' ').replaceAll("&amp;"," ").replaceAll('<br>'," ").replaceAll('&apos;',"'").replaceAll('.',"").replaceAll(',',"")
		resultobj.text = newtext;
		//for each one get text, get istatements
		var personalDescriptions = Istatements(resultobj.text);
		resultobj.wordCount = countWords(personalDescriptions);



		for(var key in resultobj.wordCount){
			if(key in totalcorpus){
				totalcorpus[key] = totalcorpus[key] + resultobj.wordCount[key];
			} else {
				totalcorpus[key] = resultobj.wordCount[key];
			}
		}

		function Istatements(string){

		var sentences = string.replace('!','.').replace('\n','.').split('.')
		sentences = sentences.filter(function(word){return stopwords.indexOf(word) === -1});
		sentences = sentences.filter(function(word){return wordpos.isAdjective(word)})
		//console.log(sentences);
		sentences = sentences.filter(function(sentence){return sentence.indexOf('I ') !== -1 || sentence.indexOf('We ') !== -1 || sentence.indexOf('roommate') !== -1 || sentence.indexOf('looking')!== -1 ||sentence.indexOf('You') !== -1 || sentence.indexOf('No ') !== -1 || sentence.indexOf('us ') !== -1 || sentence.indexOf("I'm")!== -1})
		return sentences.join('. ');
	}

	}

	function countWords(string){
		string.replace('.','')
		var arr = string.split(' ');
		var results = {};
		arr.forEach(function(word){
			if(word in results){
				results[word] = results[word] + 1;
			} else {
				results[word] = 1;
			}
		})

		return results;
	}


	function turnCountintoITDF(resultobj,totalcorpus){
		for(var key in resultobj.wordCount){
			resultobj.wordCount[key] = resultobj.wordCount[key]/totalcorpus[key]
		}

		var arr = [];
		for(var key in resultobj.wordCount){
			arr.push([key,resultobj.wordCount[key]]);
		}

		resultobj.wordCountArray = arr.sort(function(a,b){
			if(a[1]>b[1]){
				return 1
			}
			if(a[1]<b[1]){
				return -1
							return 0
		}).map(function(wordobj){return wordobj[0]})

	}
	var tasks = [];
	test.forEach(function(obj){
		tasks.push(function(){
			return wordpos.getAdjectives(obj.wordCountArray.join(" ")).then(function(data){
				obj.keyWords = data.filter(function(word){return list.indexOf(word) !== -1 && stopwords.indexOf(word) === -1});
				delete obj.wordCountArray
				delete obj.wordCount
			})
		});
	})

	var completions = [];
	var last;
	tasks.forEach(function(task){
		completions.push(task());
	})
	
	return Promise.all(completions)
}

function getAllDescriptors(results){
	var descriptors = [];
	results.forEach(function(result){
		descriptors = descriptors.concat(result.keyWords)
	})
	return descriptors;
}

addKeyWords(test).then(function(data){
	console.log(getAllDescriptors(test))
})


