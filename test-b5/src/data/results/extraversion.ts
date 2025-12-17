import { type TemplateDomain } from '@/types'

const extraversion: TemplateDomain = {
  domain: 'E',
  title: 'Ekstraversija',
  shortDescription: 'Ekstraversija (angl. Extraversion) - asmenybės ypatybė, kuri reiškiasi didesniu dėmesiu aplinkai, negu sau.',
  description: `Ekstravertai mėgsta būti su žmonėmis, yra kupini energijos ir dažnai patiria teigiamas emocijas. Jie linkę būti entuziastingi, orientuoti į veiksmą, linkę pasakyti „Taip!“ arba „Pirmyn!“ pasitaikius progoms, kurios sukelia jaudulį. Grupėse jie mėgsta kalbėtis, reikšti save ir atkreipti į save dėmesį.
<br /><br />
Intravertai neturi tokio energijos, aktyvumo ir emocionalumo lygio kaip ekstravertai. Jie linkę būti tylesni, santūresni, apgalvoti ir mažiau įsitraukę į socialinį pasaulį. Jų mažesnio socialinio aktyvumo nereikėtų painioti su drovumu ar depresija; introvertui tiesiog reikia mažiau stimuliacijos ir jis dažniau renkasi vienatvę. <br /><br />Intraverto nepriklausomumas ir santūrumas kartais klaidingai suprantamas kaip nedraugiškumas ar arogancija. Iš tikrųjų introvertas, turintis aukštą sutarumo įvertinimą, pats pirmas kitų neieškos, tačiau bus malonus ir draugiškas, kai kas nors su juo bendraus.`,
  results: [
    {
      score: 'low', // do not translate this line
      text: `Jūsų ekstraversijos balas yra žemas. Tai rodo, kad esate intravertas, uždaras ir tylus. Mėgstate vienatvę ir savarankišką veiklą. Jūsų bendravimas paprastai apsiriboja keliais artimais draugais.`
    },
    {
      score: 'neutral', // do not translate this line
      text: `Jūsų ekstraversijos balas yra vidutinis, o tai rodo, kad nesate nei santūrus vienišius, nei linksmas plepys. Mėgstate laiką su kitais, bet vertinate ir buvimą vienumoje.`
    },
    {
      score: 'high', // do not translate this line
      text: `Jūsų ekstraversijos balas yra aukštas. Tai rodo, kad esate bendraujantis, atviras, energingas ir gyvybingas. Jums labiau patinka būti tarp žmonių nei būti vienumoje.`
    }
  ],
  facets: [
    {
      facet: 1,
      title: 'Šiltumas',
      text: `Draugiški ir šilti žmonės nuoširdžiai mėgsta kitus žmones ir atvirai rodo teigiamus jausmus kitų atžvilgiu. Jie greitai susiranda draugų ir lengvai užmezga artimus santykius. Žemai išreikštą šį bruožo aspektą turintys asmenys yra labiau formalūs, rezervuoti, emociškai santūresni ir labiau atitolę. Tai nereiškia, kad jie yra priešiški ar kad jiems trūksta geraširdiškumo – už tai labiau atsakingas sutarumo bruožas.`
    },
    {
      facet: 2,
      title: 'Socialumas',
      text: `Bendraujantys žmonės kitų draugiją laiko maloniai stimuliuojančia ir naudinga. Jiems patinka minios jaudulys. Žemą balą surinkę žmonės paprastai emociškai išsenka prie didelių minių, todėl aktyviai jų vengia. Jie nebūtinai nemėgsta būti su žmonėmis, tačiau jų poreikis privatumui ir laikui sau yra daug didesnis nei asmenų, kurie šioje skalėje gauna aukštą balą.`
    },
    {
      facet: 3,
      title: 'Tvirtabūdiškumas',
      text: `Aukštus balus surinkę asmenys yra atkaklūs, mėgsta kalbėti atvirai, imtis iniciatyvos ir vadovauti kitų veiklai. Jie linkę būti lyderiais grupėse. Žemus balus surinkę asmenys linkę patylėti, likti antrame plane, daugiau leisti kalbėti ir reikštis kitiems.`
    },
    {
      facet: 4,
      title: 'Energingumas',
      text: `Aktyvūs žmonės gyvena intensyvų, greito tempo ir užimtą gyvenimą. Jie juda greitai, energingai, yra gyvybingi ir paprastai įsitraukę į daugybę veiklų. Žemesnį balą šioje skalėje surinkę asmenys renkasi lėtesnį, ramesnį ir labiau atsipalaidavusį gyvenimo tempą (tačiau tai nebūtinai susiję su vangumu ar mažu produktyvumu).`
    },
    {
      facet: 5,
      title: 'Sužadinimo siekimas',
      text: `Aukštus balus šioje skalėje surinkę žmonės greitai ima nuobodžiauti, jei aplinkoje trūksta stiprios stimuliacijos. Jie mėgsta ryškias šviesas, šurmulį ir judesį. Tokie asmenys linkę rizikuoti ir ieškoti jaudinančių potyrių. Žemus balus turintys žmonės lengvai pavargsta ar jaučiasi per daug stimuliuojami triukšmo ir sumaišties. Jie nemėgsta rizikos ir jaudulio paieškų.`
    },
    {
      facet: 6,
      title: 'Teigiamas emocingumas',
      text: `Ši skalė rodo tendenciją dažnai ir intensyviai patirtis malonias emocijas, tokias kaip laimė, entuziazmas, optimizmas ir džiaugsmas, o ne neigiamus jausmus (pastarieji priklauso neurotiškumo bruožui). Aukštai išreikštą šį bruožo aspektą turintiems žmonėms būdinga lengvai pradėti juoktis ir tai daryti dažnai, jie yra linksmi ir optimistiški. Žemesnius balus turintys žmonės rečiau išgyveną tokias energingas, pakilias emocijas.`
    }
  ]
}

export default extraversion
