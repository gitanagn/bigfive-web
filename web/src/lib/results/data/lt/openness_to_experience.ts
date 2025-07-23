import { TemplateDomain } from "@/types";

const openness: TemplateDomain = {
  domain: 'O',
  title: 'Atvirumas patyrimui',
  shortDescription: 'Atvirumas patyrimui apibūdina kognityvinio stiliaus aspektą, kuris skiria vaizduotės kupinus, kūrybingus žmones nuo paprastų, įprastų žmonių.',
  description: `Atviri patyrimui žmonės yra intelektualiai smalsūs, vertina meną ir yra jautrūs grožiui. Jie, palyginti su uždarais žmonėmis, linkę labiau suvokti savo jausmus. Jie linkę mąstyti ir elgtis individualistiškai ir nekonformiškai. Intelektualai paprastai pasiekia aukštus balus pagal atvirumą patirčiai; todėl šis veiksnys dar vadinamas kultūra arba intelektu. <br /><br />Nepaisant to, intelektą tikriausiai geriausia laikyti vienu iš atvirumo patyrimui aspektų. Atvirumo patyrimui balai tik šiek tiek susiję su išsilavinimu ir standartinių intelekto testų rezultatais.
<br /><br />
Kitas atvirojo kognityvinio stiliaus bruožas yra gebėjimas mąstyti simboliais ir abstrakcijomis, kurios yra toli nuo konkrečios patirties. Priklausomai nuo individualių intelektinių gebėjimų, šis simbolinis pažinimas gali
įgauti matematinio, loginio ar geometrinio mąstymo, meninio ir
metaforinio kalbos vartojimo, muzikos kūrimo ar atlikimo, arba vieno iš
daugelio vaizduojamojo ar scenos menų formą.
<br /><br />
Žmonės, kurių atvirumo patirčiai balai yra žemi, paprastai turi siaurus, bendrus interesus. Jie renkasi tai, kas paprasta, tiesmukiška ir akivaizdu, o ne tai, kas sudėtinga, dviprasmiška ir subtilu. Jie gali įtarti meną ir mokslą, laikydami šiuos siekius paviršutiniškais arba neturinčiais jokios praktinės naudos. Uždari žmonės renkasi pažįstamumą, o ne naujumą; jie yra konservatyvūs ir priešinasi pokyčiams.
<br /><br />
Psichologai, kurie patys dažnai yra atviri patyrimui, atvirumą dažnai pateikia kaip sveikesnį ar brandesnį. Tačiau atviras ir uždaras mąstymo stiliai yra naudingi skirtingose aplinkose. Atviro žmogaus intelektualinis stilius gali būti naudingas profesoriui, tačiau tyrimai parodė, kad uždaras mąstymas yra susijęs su geresniais darbo rezultatais policijos darbe, pardavimuose ir daugelyje kitų aptarnavimo sričių.`,
  results: [
    {
      score: 'low', // do not translate this line
      text: `Jūsų atvirumo patyrimui balas yra žemas, o tai rodo, kad jums patinka mąstyti paprastai ir aiškiai. Kiti jus apibūdina kaip paprastą, praktišką ir konservatyvų.`
    },
    {
      score: 'neutral', // do not translate this line
      text: `Jūsų atvirumo patyrimui balas yra vidutinis, tai rodo, kad jums patinka tradicijos, bet esate pasirengęs išbandyti naujus dalykus. Jūsų mąstymas nėra nei paprastas, nei sudėtingas. Kitiems atrodote išsilavinęs žmogus, bet ne intelektualas.`
    },
    {
      score: 'high', // do not translate this line
      text: `Jūsų atvirumo patyrimui balas yra aukštas, o tai rodo, kad jums patinka naujumas, įvairovė ir pokyčiai. Esate smalsus, išradingas ir kūrybingas.`
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
      text: `Asmenys, kurių emocingumas yra aukštas, gerai supranta ir suvokia savo jausmus. Žemą balą turintys asmenys mažiau suvokia savo jausmus ir yra linkę atvirai jų neišreikšti.`
    },
    {
      facet: 4,
      title: 'Nuotykių ieškojimas',
      text: `Aukštus balus turintys nuotykių ieškotojai noriai
išbando naujas veiklas, keliauja į svečias šalis ir patiria skirtingus
dalykus. Jiems pažįstama ir rutina atrodo nuobodi, todėl jie renkasi naują
maršrutą namo vien todėl, kad jis kitoks. Žemus balus turintys žmonės linkę jaustis
nejaukiai dėl pokyčių ir renkasi pažįstamą rutiną.`
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
