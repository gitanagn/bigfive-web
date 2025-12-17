
import { type TemplateDomain } from '@/types'

const openness: TemplateDomain = {
  domain: 'O',
  title: 'Atvirumas',
  shortDescription: 'Atvirumas (angl. Openess) rodo žmogaus polinkį į naujas idėjas, vaizduotę, nuotykius, smalsumą ir platų požiūrį į pasaulį.',
  description: `Atvirumo bruožas susijęs su intelektu, kūrybiškumu, lakia vaizduote, vidinių išgyvenimų vertinimu ir noru tyrinėti tiek vidinį, tiek išorinį pasaulį. Atviri žmonės, palyginus su uždarais, labiau suvokia savo jausmus, jie linkę mąstyti ir elgtis autentiškai. Intelektualūs asmenys paprastai pasiekia aukštus atvirumo balus; todėl šis bruožas kartais vadinamas kultūringumu arba intelektu. <br /><br />Nepaisant to, intelektą tikriausiai geriausia laikyti vienu iš atvirumo bruožo aspektų. Atvirumo balai tik šiek tiek susiję su išsilavinimu ir standartinių intelekto testų rezultatais.
<br /><br />
Atvirumas susijęs ir su gebėjimu mąstyti simboliškai bei abstrakčiai, o ne tik konkrečiai. Tai reiškia, kad žmogus gali lengvai suprasti idėjas, kurios nėra tiesiogiai susijusios su daiktais ar kasdienėmis situacijomis. Priklausomai nuo asmens intelektinių gebėjimų, toks abstraktus mąstymas gali pasireikšti įvairiai: kaip matematinių, loginių ar geometrinių principų suvokimas, kūrybiškas ir metaforinis kalbos vartojimas, muzikos kūrimas ar atlikimas, arba gebėjimas kurti vaizduojamuosius ir scenos menus.
<br /><br />
Žmonės, kurių atvirumo patirčiai balai yra žemi, paprastai turi siaurus, bendrus interesus. Jie renkasi tai, kas paprasta, tiesmukiška ir akivaizdu, o ne tai, kas sudėtinga, dviprasmiška ir subtilu. Jie gali įtarti meną ir mokslą, laikydami šiuos siekius paviršutiniškais arba neturinčiais jokios praktinės naudos. Uždari žmonės renkasi pažįstamumą, o ne naujumą; jie yra konservatyvūs ir priešinasi pokyčiams.
<br /><br />
Nors aukštas atvirumo bruožo lygis dažnai laikomas brandesniu ar psichologiškai sveikesniu, tiek atviras, tiek uždaras mąstymo stiliai turi savų privalumų skirtingose situacijose. Atviro žmogaus intelektualinis stilius ypač tinka akademinei ar kūrybinei veiklai, pavyzdžiui, profesorių ar tyrėjų darbui. Tačiau tyrimai rodo, kad uždaresnis, praktiškesnis ir į aiškumą orientuotas mąstymas dažnai siejamas su geresniais darbo rezultatais policijos srityje, pardavimuose ir daugelyje aptarnavimo profesijų.`,
  results: [
    {
      score: 'low', // do not translate this line
      text: `Jūsų atvirumo bruožo balas yra žemas, o tai rodo, kad jums patinka mąstyti paprastai ir aiškiai. Kiti jus apibūdina kaip paprastą, praktišką ir konservatyvų.`
    },
    {
      score: 'neutral', // do not translate this line
      text: `Jūsų atvirumo patyrimui balas yra vidutinis, tai rodo, kad jums patinka tradicijos, bet esate pasirengęs išbandyti naujus dalykus. Jūsų mąstymas nėra nei paprastas, nei sudėtingas. Kitiems atrodote išsilavinęs žmogus, bet ne intelektualas.`
    },
    {
      score: 'high', // do not translate this line
      text: `Jūsų atvirumo bruožo balas yra aukštas, o tai rodo, kad jums patinka naujovės, įvairovė ir pokyčiai. Esate smalsus, išradingas ir kūrybingas.`
    }
  ],
  facets: [
    {
      facet: 1,
      title: 'Vaizduotė',
      text: `Lavinančios vaizduotės žmonėms realus pasaulis dažnai yra pernelyg paprastas ir įprastas. Aukštus šios skalės rezultatus turintys asmenys naudoja fantaziją kaip būdą susikurti turtingesnį ir įdomesnį pasaulį. Žemus šios skalės rezultatus turintys asmenys labiau orientuojasi į faktus nei į fantaziją.`
    },
    {
      facet: 2,
      title: 'Meniniai interesai',
      text: `Aukštus šios skalės balus surinkę asmenys mėgsta grožį tiek mene, tiek gamtoje. Jie lengvai įsitraukia ir pasineria į meno ir gamtos įvykius. Jie nebūtinai yra meniškai išlavinti ar talentingi, nors daugelis tokių bus. Šios skalės išskirtiniai bruožai yra susidomėjimas gamtos ir dirbtinio grožio vertinimu. Žemus balus surinkusiems asmenims trūksta estetinio jautrumo ir susidomėjimo menu.`
    },
    {
      facet: 3,
      title: 'Emocionalumas',
      text: `Aukštą emocionalumo įvertinimą turintys asmenys gerai pažįsta savo emocijas ir geba jas aiškiai suprasti. Tuo tarpu žemesnius balus surinkę žmonės savo jausmus suvokia mažiau aiškiai ir dažniau linkę jų atvirai neišreikšti.`
    },
    {
      facet: 4,
      title: 'Nuotykių ieškojimas',
      text: `Aukštus balus šioje skalėje turintys žmonės linkę ieškoti naujų patirčių: jie noriai išbando įvairias veiklas, keliauja į kitas šalis ir siekia įvairovės kasdieniame gyvenime. Rutina jiems atrodo monotoniška, todėl net ir grįždami namo jie gali specialiai pasirinkti kitą maršrutą vien tam, kad patirtų ką nors naujo. Tuo tarpu žemus balus surinkę asmenys dažniau jaučiasi nejaukiai susidūrę su pokyčiais ir teikia pirmenybę pažįstamai, stabiliai rutinai.`
    },
    {
      facet: 5,
      title: 'Intelektas',
      text: `Intelektas ir meniniai interesai yra du svarbiausi, pagrindiniai atvirumo patyrimui aspektai. Aukštus intelekto balus turintys asmenys mėgsta žaisti su idėjomis. Jie yra atviri naujoms ir neįprastoms idėjoms ir mėgsta diskutuoti intelektualiniais klausimais. Jiems patinka mįslės, galvosūkiai. Žemus intelekto balus turintys asmenys mieliau bendrauja su žmonėmis arba daiktais, o ne su idėjomis. Jie intelektualinius pratimus laiko laiko švaistymu. Intelekto nereikėtų tapatinti su intelektualiniu išsilavinimu. Intelektas yra intelekto stilius, o ne intelektualinis gebėjimas, nors aukštą intelekto balą turintys asmenys standartizuotuose intelekto testuose gauna šiek tiek aukštesnius balus nei asmenys, turintys žemą intelektą.`
    },
    {
      facet: 6,
      title: 'Liberalizmas',
      text: `Psichologinis liberalizmas reiškia pasirengimą mesti iššūkį autoritetui, konvencijoms ir tradicinėms vertybėms. Pačia kraštutiniausia forma psichologinis liberalizmas gali reikšti net atvirą priešiškumą taisyklėms, užuojautą įstatymų laužytojams ir meilę dviprasmybei, chaosui ir netvarkai. Psichologiniai konservatoriai teikia pirmenybę saugumui ir stabilumui, kurį suteikia atitikimas tradicijoms. Psichologinis liberalizmas ir konservatizmas nėra tapatūs politinei priklausomybei, tačiau neabejotinai skatina asmenis linkti tam tikrų politinių partijų.`
    }
  ]
}

export default openness
