import { type TemplateDomain } from '../../types'

const agreeableness: TemplateDomain = {
  domain: 'A',
  title: 'Sutariamumas',
  shortDescription: 'Sutariamumas atskleidžia asmenybės skirtumus rūpinantis bendradarbiavimu ir socialine harmonija. Sutariamumu pasižymintys asmenys vertina gerus santykius su kitais.',
description: `Todėl jie yra atidūs, draugiški, dosnūs, paslaugūs ir linkę derėtis, derindami savo interesus prie kitų. Sutariamumu pasižymintys žmonės taip pat turi optimistinį požiūrį į žmogaus prigimtį. Jie tiki, kad žmonės iš esmės yra sąžiningi, dorovingi ir patikimi.<br /><br />
Žemu sutariamumu pasižymintys asmenys savo interesus laiko svarbesniais už gerus santykius su kitais. Jie dažniausiai nesirūpina kitų gerove ir todėl vargu ar stengiasi padėti kitiems. Kartais jų skepticizmas dėl kitų žmonių motyvų verčia juos būti įtariais ir nedraugiškais.<br /><br />
Sutariamumas akivaizdžiai padeda įgyti ir išlaikyti populiarumą. Sutariamumu pasižymintys žmonės yra labiau mėgstami nei turintys žemą sutariamumą. Kita vertus, sutariamumas nėra naudingas situacijose, kur reikalingi griežti ar absoliučiai objektyvūs sprendimai. Žemu sutariamumu pasižymintys žmonės gali būti puikūs mokslininkai, kritikai ar kariai.`,
  results: [
    {
      score: 'low', // do not translate this line
      text: `Jūsų sutariamumas (angl., Agreeableness) yra žemas, o tai rodo, kad labiau rūpinatės savo poreikiais nei kitų. Kiti žmonės gali jus laikyti griežtu, kritišku ir nelengvai nusileidžiančiu asmeniu.`
    },
    {
      score: 'neutral', // do not translate this line
      text: `Jūsų sutariamumas (angl. Agreeableness) yra vidutinis, tai rodo, kad jums rūpi kitų poreikiai, tačiau dažniausiai nesate linkęs aukotis dėl kitų.`
    },
    {
      score: 'high', // do not translate this line
      text: `Jūsų aukštas sutariamumas (angl. Agreeableness) rodo stiprų rūpestį kitų poreikiais ir gerove. Esate malonus, užjaučiantis ir bendradarbiaujantis žmogus.`
    }
  ],
  facets: [
    {
      facet: 1,
      title: 'Pasitikėjimas',
      text: `Asmuo, turintis aukštą pasitikėjimo lygį, mano, kad dauguma žmonių yra sąžiningi, teisingi ir turi gerų ketinimų. Žmonės, kuriems būdingas žemas pasitikėjimas, kitus mato kaip savanaudžius, klastingus ir galimai pavojingus.`
    },
    {
      facet: 2,
      title: 'Moralė',
      text: `Žmonės, surinkę aukštą šio rodiklio įvertinimą, mano, kad bendraujant su kitais nereikia apsimetinėti ar manipuliuoti, todėl jie yra atviri, nuoširdūs ir tiesūs. Tie, kurių įvertinimas žemas, tiki, kad tam tikras apgaulės lygis socialiniuose santykiuose yra būtinas. Su aukštą įvertinimą turinčiais žmonėmis paprastai lengviau bendrauti dėl jų tiesumo. Tuo tarpu su žemu įvertinimu pasižyminčiais asmenimis dažnai sunkiau užmegzti ryšį dėl jų uždarumo. Reikėtų pabrėžti, kad žemi įvertinimai nereiškia, jog žmogus yra amoralus ar neturi principų – tiesiog jis yra atsargesnis ir nenori atvirai atskleisti visos tiesos.`
    },
    {
      facet: 3,
      title: 'Altruizmas',
      text: `Altruistiški žmonės jaučia nuoširdų pasitenkinimą padėdami kitiems, todėl paprastai yra linkę pagelbėti tiems, kuriems reikia pagalbos. Jiems rūpinimasis kitais – tai savirealizacijos, o ne savęs aukojimo forma. Tuo tarpu žemą šio rodiklio įvertinimą turintys žmonės nėra linkę padėti kitiems – prašymai padėti jiems atrodo kaip našta, o ne galimybė save realizuoti.`
    },
    {
      facet: 4,
      title: 'Bendradarbiavimas',
      text: `Aukštą šio rodiklio įvertinimą turintys žmonės vengia konfliktų. Jie linkę nusileisti ar atsisakyti savo poreikių, kad tik palaikytų gerus santykius su kitais. Tuo tarpu žemą įvertinimą turintys asmenys dažniau linkę daryti spaudimą ar net gąsdinti kitus, kad pasiektų savo tikslų.`
    },
    {
      facet: 5,
      title: 'Kuklumas',
      text: `Žmonės, surinkę aukštą balą šioje skalėje, nemėgsta teigti, kad yra geresni už kitus. Kai kuriais atvejais toks požiūris gali kilti iš žemos savivertės ar nepasitikėjimo savimi. Vis dėlto kai kurie žmonės, turintys aukštą savivertę, kuklumą laiko tinkamu elgesiu. Tie, kurie linkę save apibūdinti kaip pranašesnius už kitus, dažnai aplinkinių yra vertinami kaip nemaloniai arogantiški.`
    },
    {
      facet: 6,
      title: 'Atjauta',
      text: `Žmonės, surinkę aukštą balą šioje skalėje, yra jautrūs ir užjaučiantys. Jie linkę įsijausti į kitų skausmą ir lengvai susigraudina. Žmonės, surinkę žemą balą, nereaguoja į kitų kančias. Jie didžiuojasi gebėjimu priimti objektyvius sprendimus, remdamiesi protu. Jiems labiau rūpi tiesa ir nešališkas teisingumas nei gailestingumas.`
    }
  ]
}

export default agreeableness
