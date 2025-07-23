import { TemplateDomain } from "@/types";

const extraversion: TemplateDomain = {
  domain: 'E',
  title: 'Ekstraversija',
  shortDescription: 'Ekstraversija pasižymi ryškiu įsitraukimu su išoriniu pasauliu.',
  description: `Ekstravertai mėgsta būti su žmonėmis, yra kupini energijos ir dažnai patiria teigiamas emocijas. Jie linkę būti entuziastingi, orientuoti į veiksmą, linkę pasakyti „Taip!“ arba „Pirmyn!“ pasitaikius progoms, kurios sukelia jaudulį. Grupėse jie mėgsta kalbėtis,
reikšti save ir atkreipti į save dėmesį.
<br /><br />
Intravertams trūksta ekstravertams būdingo entuziazmo, energijos ir aktyvumo. Jie linkę būti tylūs, santūrūs, apgalvoti ir atsiriboję nuo socialinio pasaulio. Jų socialinio įsitraukimo stoka neturėtų būti interpretuojama kaip drovumas ar depresija; intravertui tiesiog reikia mažiau stimuliacijos nei ekstravertui ir jis renkasi būti vienas. <br /><br />Intraverto nepriklausomybė ir santūrumas kartais klaidingai suprantami kaip nedraugiškumas ar arogancija. Iš tikrųjų intravertas, surinkęs aukštą balą pagal malonumo matmenį, neieškos kitų, bet bus gana malonus, kai prie jo prieis.`,
  results: [
    {
      score: 'low', // do not translate this line
      text: `Jūsų ekstraversijos balas yra žemas, o tai rodo, kad esate intravertas, uždaras ir tylus. Mėgstate vienatvę ir savarankišką veiklą. Jūsų bendravimas paprastai apsiriboja keliais artimais draugais.`
    },
    {
      score: 'neutral', // do not translate this line
      text: `Jūsų ekstraversijos balas yra vidutinis, o tai rodo, kad nesate nei santūrus vienišius, nei linksmas plepys. Mėgstate laiką su kitais, bet ir vienumoje.`
    },
    {
      score: 'high', // do not translate this line
      text: `Jūsų ekstraversijos balas yra aukštas, o tai rodo, kad esate bendraujantis, atviras, energingas ir gyvybingas. Jums labiau patinka būti tarp žmonių.`
    }
  ],
  facets: [
    {
      facet: 1,
      title: 'Draugiškumas',
      text: `Draugiški žmonės nuoširdžiai mėgsta kitus žmones ir atvirai rodo teigiamus jausmus kitų atžvilgiu. Jie greitai susiranda draugų ir lengvai užmezga artimus, intymius santykius. Žemą draugiškumo balą turintys žmonės nebūtinai yra šalti ir priešiški, tačiau jie nesiekia bendrauti su kitais ir yra suvokiami kaip atitrūkę ir uždari.`
    },
    {
      facet: 2,
      title: 'Bendruomeniškumas',
      text: `Bendraujantys žmonės kitų draugiją laiko maloniai stimuliuojančia ir naudinga. Jiems patinka minios jaudulys. Žemą balą surinkę žmonės linkę jaustis priblokšti didelių minių ir todėl aktyviai jų vengia. Jie nebūtinai kartais nemėgsta būti su žmonėmis, tačiau jų poreikis privatumui ir laikui sau yra daug didesnis nei asmenų, kurie šioje skalėje gauna aukštą balą..`
    },
    {
      facet: 3,
      title: 'Asertyvumas',
      text: `Aukštus balus surinkę asmenys yra atkaklūs, mėgsta kalbėti atvirai, imtis iniciatyvos ir vadovauti kitų veiklai. Jie linkę būti lyderiais grupėse. Žemus balus surinkę asmenys linkę daug nekalbėti ir leisti kitiems kontroliuoti grupių veiklą.`
    },
    {
      facet: 4,
      title: 'Aktyvumo lygis',
      text: `Aktyvūs asmenys gyvena greitą, užimtą gyvenimą.
Jie juda greitai, energingai ir energingai, ir yra įsitraukę į daugybę veiklų. Žmonės, kurie šioje skalėje surinko žemą balą, gyvena lėtesnį ir ramesnį, atsipalaidavusį tempą.`
    },
    {
      facet: 5,
      title: 'Jaudulio ieškojimas',
      text: `Aukštą balą šioje skalėje turintys asmenys lengvai nuobodžiauja be didelio stimuliavimo lygio. Jie mėgsta ryškias šviesas
ir šurmulį. Jie linkę rizikuoti ir ieškoti jaudinančių pojūčių. Žemą balą turintys asmenys yra varginami triukšmo ir šurmulio, todėl
nepageidauja tokių situacijų.`
    },
    {
      facet: 6,
      title: 'Linksmumas',
      text: `Ši skalė matuoja teigiamą nuotaiką ir jausmus, o ne neigiamas emocijas (kurios priklauso neurotiškumo sričiai). Asmenys, kurie šioje skalėje surenka aukštą balą, paprastai patiria įvairius teigiamus jausmus, įskaitant laimę, entuziazmą, optimizmą ir džiaugsmą. Žemą balą surinkę asmenys nėra tokie linkę į tokią energingą, pakilią nuotaiką.`
    }
  ]
}

export default extraversion
