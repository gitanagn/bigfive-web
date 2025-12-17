import { type TemplateDomain } from '@/types'

const agreeableness: TemplateDomain = {
  domain: 'A',
  title: 'Sutarumas',
  shortDescription: 'Sutarumas (angl. Agreeableness) apibūdina asmenybės skirtumus, susijusius su polinkiu bendradarbiauti ir siekti socialinės harmonijos. Aukštesniu sutarumu pasižymintys žmonės ypač vertina gerus tarpasmeninius santykius ir stengiasi palaikyti draugišką, pagarbią atmosferą bendraudami su kitais.',
  description: `Dėl šių savybių jie linkę būti atidūs, draugiški, dosnūs, paslaugūs ir pasirengę ieškoti kompromiso, derindami savo interesus su kitų žmonių poreikiais. Aukštu sutarumu pasižymintys asmenys paprastai turi optimistišką požiūrį į žmogaus prigimtį – jie linkę tikėti, kad žmonės iš esmės yra sąžiningi, dorovingi ir patikimi.<br /><br />
Žemu sutarumu pasižymintys asmenys teikia pirmenybę savo interesams, o ne gerų santykių palaikymui. Jie mažiau linkę rūpintis kitų gerove ir retai kada stengiasi padėti, nebent tai atitinka jų pačių tikslus. Kartais jų skeptiškas požiūris į kitų žmonių motyvus lemia didesnį įtarumą ir gali pasireikšti nedraugišku elgesiu.
<br /><br />
Sutariamumas dažnai padeda žmogui būti mėgstamam ir palaikyti gerus santykius – aukštu sutarumu pasižymintys asmenys paprastai sulaukia daugiau simpatijų nei žemesnio sutarumo žmonės. Vis dėlto šis bruožas ne visuomet yra privalumas. Situacijose, kuriose būtini griežti, objektyvūs ir neasmeniški sprendimai, mažesnis sutariamumas gali būti netgi naudingesnis. Tokie asmenys neretai puikiai tinka mokslininko, kritiko ar kario darbui, nes geba atsiriboti nuo emocinių ar socialinių veiksnių.`,
  results: [
    {
      score: 'low', // do not translate this line
      text: `Jūsų sutarumo įvertinimas yra žemas, o tai reiškia, kad dažniau prioritetą teikiate savo poreikiams ir interesams. Kiti žmonės jus gali matyti kaip griežtesnį, kritiškesnį ir mažiau linkusį nusileisti ar ieškoti kompromisų.`
    },
    {
      score: 'neutral', // do not translate this line
      text: `Jūsų sutarumo įvertinimas yra vidutinis. Tai rodo, kad jums rūpi kitų žmonių poreikiai, tačiau paprastai išlaikote pusiausvyrą tarp savo ir kitų interesų ir nesate linkęs nuolat aukotis savo sąskaita.`
    },
    {
      score: 'high', // do not translate this line
      text: `Jūsų aukštas sutarumo įvertinimas rodo, kad stipriai rūpinatės kitų žmonių poreikiais ir gerove. Esate linkęs elgtis maloniai, parodyti užuojautą ir siekti bendradarbiavimo.`
    }
  ],
  facets: [
    {
      facet: 1,
      title: 'Patiklumas',
      text: `Aukštą patiklumo lygį turintys asmenys linkę manyti, kad dauguma žmonių yra sąžiningi, teisingi ir geranoriški. Tuo tarpu žemesniu patiklumu pasižymintys asmenys yra linkę būti ciniški, skeptiški, manyti, kad kiti yra nenuoširdūs ir galimai pavojingi.`
    },
    {
      facet: 2,
      title: 'Tiesmukumas',
      text: `Aukštą balą šioje skalėje surinkę asmenys bendraudami nemato reikalo apsimetinėti ar manipuliuoti, todėl yra atviri, tiesmuki ir nuoširdūs. Žemą balą turintys asmenys mano, kad tam tikras apgaulės ar nutylėjimo kiekis socialiniuose santykiuose yra būtinas. Žmonėms paprastai lengva sutarti su atvirais, tiesmukais aukštą balą turinčiais asmenimis. Tuo tarpu su žemesnio balo asmenimis, kurie yra mažiau tiesūs ir atviresni, bendrauti gali būti sudėtingiau. Svarbu pabrėžti, kad žemas balas šioje skalėje nereiškia, jog asmuo yra neprincipingas ar amoralius; tai tik rodo, kad jis elgiasi atsargiau ir nėra linkęs atvirai atskleisti visos tiesos.`
    },
    {
      facet: 3,
      title: 'Altruistiškumas',
      text: `Altruistiški žmonės nuoširdžiai mėgaujasi padėdami kitiems. Todėl jie paprastai yra linkę padėti tiems, kuriems pagalba reikalinga. Altruistams pagalba kitiems yra savirealizacijos forma, o ne pasiaukojimas. Žemą balą šioje skalėje surinkę asmenys nemėgsta teikti pagalbos tiems, kuriems jos reikia. Jiems prašymai padėti atrodo kaip našta, o ne kaip galimybė patirti pasitenkinimą ar prasmę.`
    },
    {
      facet: 4,
      title: 'Nuolaidumas',
      text: `Aukštus balus šioje skalėje surinkę asmenys nemėgsta konfliktų. Jie noriai ieško kompromisų ir kartais net atsisako savo poreikių tam, kad palaikytų gerus santykius su kitais. Žemą balą turintys asmenys labiau linkę spausti ar gąsdinti kitus, siekdami pasiekti savo tikslų. Jie yra linkę į agresiją, atviro pykčio reiškimą to prireikus, linkę labiau konkuruoti nei bendradarbiauti.`
    },
    {
      facet: 5,
      title: 'Kuklumas',
      text: `Aukštai išreikštą šį bruožo aspektą turintiems žmonėms būdingas polinkis būti kukliems ir noras likti nepastebėtiems (tačiau tai nebūtinai reiškia pažeistą, žemą savivertę). Asmenys turintys žemai išreikštą šį bruožo aspektą yra linkę būti įsitikinę savo suvokiamu pranašumu ir jį demonstruoti, gali atrodyti pasipūtę ir arogantiški.`
    },
    {
      facet: 6,
      title: 'Atjautumas',
      text: `Aukštus balus šioje skalėje surinkę žmonės yra švelnūs, jautrūs ir užjaučiantys. Jie lengvai įsijaučia į kitų kančią ir greitai reaguoja gailesčiu ar noru padėti. Žemus balus turintys asmenys nėra stipriai paveikiami kitų žmonių kančios. Jie didžiuojasi gebėjimu priimti objektyvius, racionalius sprendimus. Jiems svarbiau tiesa ir nešališkas teisingumas nei gailestingumas.`
    }
  ]
}

export default agreeableness
