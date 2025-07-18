import { type TemplateDomain } from '../../types'

const conscientiousness: TemplateDomain = {
  domain: 'C',
  title: 'Sąmoningumas',
  shortDescription: 'Sąmoningumas (angl. conscientiousness) apibūdina, kaip žmogus valdo, reguliuoja ir nukreipia savo impulsus.',
  description: `Impulsai savaime nėra blogi. Kartais laiko trūkumas reikalauja greito sprendimo, o veikimas pagal pirmą impulsą gali būti efektyvus atsakas. Taip pat, žaidimo ar laisvalaikio metu spontaniškas ir impulsyvus elgesys gali būti smagus. Impulsyvūs žmonės kitiems gali pasirodyti kaip spalvingi, smagūs ir nutrūktgalviški.
<br /><br />
Vis dėlto impulsyvus elgesys gali sukelti įvairių problemų. Kai kurie impulsai yra nesocialūs. Nekontroliuojami antisocialūs veiksmai ne tik kenkia kitiems visuomenės nariams, bet ir gali sukelti pasekmes pačiam veikėjui. Kita problema – impulsyvūs veiksmai dažnai suteikia momentinį malonumą, tačiau turi nepageidaujamų ilgalaikių pasekmių. Pavyzdžiui: besaikis plepumas gali baigtis darbo praradimu, pasakytas įžeidimas – svarbių santykių nutrūkimu, o malonumą sukeliantys narkotikai – sveikatos sužalojimu.
<br /><br />
Impulsyvus elgesys, net jei ir nėra labai destruktyvus, gali reikšmingai sumažinti žmogaus veiksmingumą. Veikdami impulsyviai, žmonės neturi galimybės apsvarstyti alternatyvių veiksmų variantų – kai kurie jų galėtų būti žymiai protingesni nei spontaniškas pasirinkimas. Impulsyvumas taip pat trukdo susikaupti vykdant projektus, kuriems reikia organizuoto, nuoseklaus darbo. Todėl impulsyvaus žmogaus pasiekimai dažnai būna nedideli, padriki ir nenuoseklūs.
<br /><br />
Vienas iš intelekto požymių – ir tai, kas galimai išskiria žmones iš ankstesnių gyvybės formų – yra gebėjimas prieš veikiant impulsyviai pagalvoti apie būsimas pasekmes. Intelektuali veikla apima ilgalaikių tikslų numatymą, planavimą, kaip jų pasiekti, ir atkaklumą siekiant šių tikslų, nepaisant trumpalaikių impulsų. Yra toks terminas „apdairumas“ (angl. prudence), kuris dažnai vartojamas sąmoningumui apibūdinti. Apdairus – reiškia tiek išmintingas, tiek atsargus.
<br /><br/>
Asmenys, kurių sąmoningumo savybė stipriai išreikšta, kitų dažnai yra laikomi intelektualiais. Aukšto sąmoningumo privalumai akivaizdūs: tokie žmonės vengia problemų, pasiekia aukštų rezultatų per tikslingą planavimą ir atkaklumą. Jie taip pat vertinami kaip patikimi ir protingi. Kita vertus, tokie asmenys gali tapti perfekcionistais ar darboholikais. Itin sąmoningi žmonės kartais gali būti laikomi pernelyg rimtais ar net nuobodžiais.
<br /><br />
Žemo sąžiningumo žmonės gali būti kritikuojami dėl nepatikimumo, ambicijų stokos ir nesugebėjimo laikytis taisyklių, tačiau jie dažnai patiria daug trumpalaikių malonumų ir niekada nebus vadinami nuobodžiais.`,
  results: [
    {
      score: 'low', // do not translate this line
      text: `Jūsų sąmoningumas yra žemas, tai rodo, kad mėgstate gyventi šia diena ir daryti tai, kas tuo metu teikia malonumą. Jūsų darbas dažnai būna neapdairus ir neorganizuotas.`
    },
    {
      score: 'neutral', // do not translate this line
      text: `Jūsų sąmoningumo įvertinimas yra vidutinis. Tai reiškia, kad esate pakankamai patikimas, organizuotas ir gebate save kontroliuoti.`
    },
    {
      score: 'high', // do not translate this line
      text: `Jūsų sąmoningumo įvertinimas yra aukštas. Tai reiškia, kad keliatės aiškius tikslus ir atkakliai jų siekiate. Žmonės jus vertina kaip patikimą ir darbštų žmogų.`
    }
  ],
  facets: [
    {
      facet: 1,
      title: 'Saviveiksmingumas',
      text: `Saviveiksmingumas apibūdina pasitikėjimą savo gebėjimu atlikti užduotis. Aukštą balą surinkę asmenys tiki, kad turi pakankamai intelekto (sveiko proto), ryžto ir savikontrolės sėkmei pasiekti. Žemą balą turintys asmenys dažnai jaučiasi neveiksmingi ir gali manyti, kad nekontroliuoja savo gyvenimo.`
    },
    {
      facet: 2,
      title: 'Organizuotumas',
      text: `Asmenys, turintys aukštą įvertį, yra gerai organizuoti. Jie mėgsta gyventi pagal rutiną ir tvarkaraščius, sudarinėja sąrašus ir planuoja veiklas. Žemo įvertžio žmonės dažnai būna neorganizuoti ir išsiblaškę.`
    },
    {
      facet: 3,
      title: 'Pareigingumas',
      text: `Tai asmenybės bruožas, apibūdinantis žmogaus polinkį laikytis moralinių principų, taisyklių ir įsipareigojimų. Pareigingi žmonės jaučia atsakomybę už savo veiksmus, stengiasi elgtis sąžiningai ir etiškai. Žemo įvertinimo asmenys gali būti labiau linkę ignoruoti taisykles ar priimti sprendimus pagal asmeninį patogumą.`
    },
    {
      facet: 4,
      title: 'Tikslų siekimas',
      text: `Asmenys, turintys stipriai išreikštą polinkį siekti tikslų, atkakliai siekia meistriškumo. Juos motyvuoja noras būti pripažintiems kaip sėkmingiems, todėl jie nuosekliai juda savo ambicingų tikslų link. Jie dažnai turi aiškią gyvenimo kryptį, tačiau itin aukšti įvertinimai gali rodyti pernelyg siaurą mąstymą ir darboholizmą. Žemo įvertinimo žmonės patenkinti atlikdami tik minimalų darbą, o aplinkiniams gali pasirodyti tingūs.`
    },
    {
      facet: 5,
      title: 'Savidisciplina',
      text: `Savikontrolė – tai, ką daugelis vadina valia – reiškia gebėjimą atkakliai dirbti ties sunkiais ar nemaloniais uždaviniais iki jų pabaigos. Žmonės, turintys aukštą savidisciplinos lygį, geba įveikti nenorą pradėti darbą ir išlaikyti dėmesį, nepaisydami trikdžių. Tuo tarpu turintieji žemą savidisciplinos lygį linkę atidėlioti ir sunkiai įgyvendina užsibrėžtus tikslus – net ir tuos, kuriuos jiems iš tikrųjų labai svarbu pasiekti.`
    },
    {
      facet: 6,
      title: 'Atsargumas',
      text: `Atsargumas apibūdina polinkį apgalvoti galimybes prieš veikiant. Aukštus balus surenkantys žmonės šioje skalėje neskuba priimti sprendimų – jie skiria laiko apsvarstyti. Žemus balus surenkantys asmenys dažnai iškart pasako ar padaro tai, kas šauna į galvą, neapgalvodami alternatyvų ir galimų pasekmių.`
    }
  ]
}

export default conscientiousness
