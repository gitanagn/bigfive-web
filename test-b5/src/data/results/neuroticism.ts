import { type TemplateDomain } from '@/types'

const neuroticism: TemplateDomain = {
  domain: 'N',
  title: 'Neurotiškumas',
  shortDescription: 'Neurotiškumas (angl. Neuroticism) apibūdina polinkį patirti neigiamus jausmus.',
  description: `Psichologijos mokslo tėvas Freudas iš pradžių vartojo terminą „neurozė“ apibūdindamas
būseną, kuriai būdingas psichologinis distresas, emocinis skausmas ir sunkumai efektyviai susidoroti su kasdieniais gyvenimo reikalavimais. Jis teigė, kad visi žmonės tam tikru mastu patiria neurozės požymių, tačiau skiriasi jų patiriamas diskomfortas ir konkretūs simptomai. Šiandien neurotiškumas reiškia žmogaus polinkį išgyventi neigiamas emocijas. <br /><br />Aukštus neurotiškumo balus turintys asmenys gali dažniau patirti vieną dominuojančią neigiamą emociją – pavyzdžiui, nerimą, pyktį ar depresyvumą – tačiau dažnai išgyvena kelias iš jų. <br /><br />Žmonės, turintys aukštą neurotiškumą, yra emociškai reaktyvūs. Jie stipriau reaguoja į įvykius, kurie daugumos žmonių nepaveiktų, o jų emocinės reakcijos būna intensyvesnės nei įprasta. Jie dažniau suvokia įprastas situacijas kaip grėsmingas, o smulkias nesėkmes – kaip sunkiai įveikiamas.  <br /><br />Jų neigiamos emocijos paprastai išlieka ilgiau nei kitų žmonių, todėl jie dažniau būna prastos nuotaikos. Tokie emocijų reguliavimo sunkumai gali mažinti gebėjimą aiškiai mąstyti, priimti sprendimus ir veiksmingai tvarkytis su stresu.`,
  results: [
    {
      score: 'low', // do not translate this line
      text: `Jūsų neurotiškumo balas yra žemas, o tai rodo, kad esate išskirtinai ramus, susitelkęs ir sunkiai išmušamas iš pusiausvyros. Net ir situacijos, kurias dauguma žmonių laikytų stresinėmis, jums nesukelia stiprių emocinių reakcijų.`
    },
    {
      score: 'neutral', // do not translate this line
      text: `Jūsų neurotiškumo įvertinimas yra vidutinis, o tai reiškia, kad jūsų emocinės reakcijos yra panašios į daugumos žmonių. Stresinės ar frustraciją keliančios situacijos jus gali šiek tiek paveikti, tačiau paprastai gebate įveikti šiuos jausmus ir susitvarkyti su iškilusiais sunkumais.`
    },
    {
      score: 'high', // do not translate this line
      text: `Jūsų neurotiškumo įvertinimas yra aukštas, o tai rodo, kad jus lengvai sujaudina ar nuliūdina net tokios situacijos, kurias dauguma žmonių laiko įprastomis gyvenimo aplinkybėmis. Aplinkiniams jūs atrodote jautrus ir emocionalus žmogus.`
    }
  ],
  facets: [
    {
      facet: 1,
      title: 'Nerimastingumas',
      text: `Nerimastingų žmonių „kovok arba bėk“ reakcija smegenyse įsijungia pernelyg lengvai ir per dažnai. Todėl aukštus balus šioje skalėje turintys asmenys dažnai jaučiasi taip, lyg tuoj nutiks kažkas pavojingo. Jie gali bijoti konkrečių situacijų arba jausti bendrą, neapibrėžtą baimę. Tokie žmonės jaučiasi įsitempę, nervingi ir neramūs. Žemą nerimo balą turintys asmenys paprastai yra ramūs ir drąsūs.`
    },
    {
      facet: 2,
      title: 'Priešiškumas',
      text: `Aukštus balus šioje skalėje surinkę žmonės jaučia stiprų įniršį, kai dalykai nevyksta taip, kaip jie tikėjosi. Jie jautriai reaguoja į neteisybę ir jaučia apmaudą ar kartėlį, kai mano, kad su jais elgiamasi nesąžiningai. Ši skalė matuoja polinkį patirti pyktį; tai, ar žmogus jį išreiškia, priklauso nuo jo sutarumo lygio. Žemą balą turintys asmenys supyksta retai ir nelengvai.`
    },
    {
      facet: 3,
      title: 'Depresyvumas',
      text: `Ši skalė matuoja polinkį jaustis liūdnam, nusivylusiam ir praradusiam viltį. Aukštus balus surinkę asmenys dažnai jaučia energijos stoką ir jiems sunku pradėti veiklas. Žemą balą turintys žmonės paprastai nejaučia šių depresyvių emocijų.`
    },
    {
      facet: 4,
      title: 'Drovumas',
      text: `Drovūs žmonės yra labai jautrūs tam, ką kiti apie juos galvoja. Baimė būti atstumtiems ar išjuoktiems lemia, kad jie dažnai jaučiasi nedrąsiai ir nejaukiai socialinėse situacijose. Tokie asmenys lengvai susigėsta, dažnai jaučia gėdą ar nerimą dėl to, kaip atrodo kitų akyse. Nerimas, kad aplinkiniai gali kritikuoti ar pasišaipyti, paprastai būna perdėtas ir nerealistiškas, tačiau pats drovumas ir suvaržytumas kartais gali sustiprinti šias baimes ir net paskatinti socialinį nepatogumą. Žemą drovumo balą turintys žmonės paprastai nesijaučia stebimi ar vertinami ir išlieka atsipalaidavę socialinėse situacijose. Jie nejaučia didelio nerimo dėl to, kaip atrodo kitiems.`
    },
    {
      facet: 5,
      title: 'Impulsyvumas',
      text: `Impulsyvūs asmenys jaučia stiprius troškimus ir impulsus, kuriems sunkiai atsispiria. Jie labiau orientuojasi į trumpalaikius malonumus ir greitus atlygius, o ne į ilgalaikes pasekmes. Žemus balus turintys žmonės nepatiria stiprių, sunkiai suvaldomų potraukių ir todėl rečiau pasiduoda per dideliam ar žalingam pasimėgavimui.`
    },
    {
      facet: 6,
      title: 'Pažeidžiamumas',
      text: `Aukštai išreikštą šį bruožo aspektą turintys žmonės pasižymi žemu atsparumu stresui, yra linkę abejoti savo gebėjimais susidoroti su stresinėmis, kritinėmis, neįprastomis situacijomis, patirti paniką juose, būti priklausomais nuo kitų. Asmenys turintys žemai išreikštą šį bruožo aspektą yra linkę pasitikėti savo gebėjimu savarankiškai tvarkytis sudėtingomis aplinkybėmis.`
    }
  ]
}

export default neuroticism
