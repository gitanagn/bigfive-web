import { type TemplateDomain } from '../../types'

const neuroticism: TemplateDomain = {
  domain: 'N',
  title: 'Neurotiškumas',
  shortDescription: 'Neuroticism refers to the tendency to experience negative feelings.',
  description: `Neurotiškumas reiškia polinkį patirti neigiamus jausmus.',
aprašymas: „Freudas iš pradžių vartojo terminą neurozė apibūdindamas
būseną, kuriai būdingas psichinis stresas, emocinės kančios ir
nesugebėjimas efektyviai susidoroti su įprastais gyvenimo reikalavimais. Jis
teigė, kad kiekvienas žmogus turi tam tikrų neurozės požymių, tačiau
mes skiriamės savo kančios laipsniu ir specifiniais streso simptomais. Šiandien neurotiškumas reiškia polinkį patirti
neigiamus jausmus.“. <br /><br />Tie, kurie turi aukštą neurotiškumo balą, gali patirti daugiausia vieną konkretų neigiamą jausmą, pavyzdžiui, nerimą, pyktį ar depresiją, tačiau greičiausiai patirs ir kelias iš šių emocijų. <br /><br />Žmonės, turintys didelį neurotiškumą, yra emociškai reaktyvūs. Jie emociškai reaguoja į įvykius, kurie neturėtų įtakos daugumai žmonių, ir
jų reakcijos paprastai būna intensyvesnės nei įprastai. Jie labiau linkę įprastas situacijas interpretuoti kaip grėsmingas, o nedidelius
nusiskumus – kaip beviltiškai sunkius. <br /><br />Jų neigiamos emocinės reakcijos paprastai išlieka neįprastai ilgai, o tai reiškia, kad jie dažnai būna blogos nuotaikos. Šios emocijų reguliavimo problemos gali sumažinti neurotiko gebėjimą aiškiai mąstyti, priimti sprendimus ir veiksmingai susidoroti su stresu.`,
  results: [
    {
      score: 'low', // do not translate this line
      text: `Jūsų neurotiškumo balas yra žemas, o tai rodo, kad esate
išskirtinai ramus, susikaupęs ir nesutrikdomas. Jūs nereaguojate
smarkiai emociškai, net į situacijas, kurias dauguma žmonių apibūdintų
kaip stresines.`
    },
    {
      score: 'neutral', // do not translate this line
      text: `Jūsų neurotiškumo balas yra vidutinis, o tai rodo, kad jūsų emocinio reaktyvumo lygis yra tipiškas bendrajai populiacijai.
Stresinės ir frustruojančios situacijos jus šiek tiek slegia,
tačiau paprastai galite įveikti šiuos jausmus ir susidoroti su
šiomis situacijomis.`
    },
    {
      score: 'high', // do not translate this line
      text: `Jūsų neurotiškumo balas yra aukštas, o tai rodo, kad jus lengvai suerzina net ir tai, ką dauguma žmonių laiko įprastais gyvenimo reikalavimais. Žmonės jus laiko jautriu ir emocingu.`
    }
  ],
  facets: [
    {
      facet: 1,
      title: 'Nerimas',
      text: `Nerimastingų asmenų smegenų „kovok arba bėk“ sistema yra pernelyg lengvai ir per dažnai įsitraukianti. Todėl žmonės, kurie yra labai nerimastingi, dažnai jaučia, kad tuoj nutiks kažkas pavojingo. Jie gali bijoti konkrečių situacijų arba tiesiog būti išsigandę. Jie jaučiasi įsitempę, nervingi ir nervingi. Žmonės, kurių nerimas silpnas, paprastai yra ramūs ir bebaimiai.`
    },
    {
      facet: 2,
      title: 'Pyktis',
      text: `Žmonės, kurių pykčio balas aukštas, jaučiasi įniršę, kai viskas klostosi ne taip, kaip jiems patinka. Jie jautrūs tam, kad su jais būtų elgiamasi sąžiningai, ir jaučia apmaudą bei kartėlį, kai jaučiasi apgaudinėjami. Ši skalė matuoja polinkį pykti; tai, ar žmogus išreiškia susierzinimą ir priešiškumą, priklauso nuo asmens sutarimo lygio. Žemas balas surinkę asmenys dažnai ir lengvai nesupyksta.`
    },
    {
      facet: 3,
      title: 'Depresija',
      text: `Ši skalė matuoja polinkį jaustis liūdnam, prislėgtam ir nusivylusiam. Aukštus balus surinkusiems trūksta energijos ir jiems sunku pradėti veiklas. Žemus balus surinkusiems asmenims šių depresijos jausmų paprastai nebūna.`
    },
    {
      facet: 4,
      title: 'Drovumas',
      text: `Drovūs asmenys yra jautrūs tam, ką kiti apie juos galvoja. Dėl nerimo dėl atstūmimo ir pajuokos jie jaučiasi drovūs ir nejaukiai šalia kitų. Jie lengvai susigėsta ir dažnai jaučiasi sugėdinti. Jų baimės, kad kiti juos kritikuos ar iš jų pasijuoks, yra perdėtos ir nerealistiškos, tačiau
jų nerangumas ir diskomfortas gali paversti šias baimes savaime išsipildančia pranašyste. Priešingai, žemus balus turintys asmenys neturi klaidingo
įspūdžio, kad visi juos stebi ir teisia. Jie nesijaučia nervingi socialinėse situacijose.`
    },
    {
      facet: 5,
      title: 'Nesaikingumas',
      text: `Nesaikingi asmenys jaučia stiprius potraukius ir instinktus, kuriems jiems sunku atsispirti. Jie linkę orientuotis į trumpalaikius malonumus ir atlygį, o ne į ilgalaikes pasekmes. Žemą balų skaičių turintys asmenys nepatiria stiprių, nenugalimų potraukių ir todėl nejaučia pagundos persistengti.`
    },
    {
      facet: 6,
      title: 'Pažeidžiamumas',
      text: `Aukštus pažeidžiamumo balus surinkę asmenys patiria paniką, sumišimą ir bejėgiškumą, kai patiria spaudimą ar stresą. Žemus balus surinkę asmenys jaučiasi labiau nusiteikę, pasitikintys savimi ir aiškiai mąsto, kai patiria stresą.`
    }
  ]
}

export default neuroticism
