import { type TemplateDomain } from '@/types'

const conscientiousness: TemplateDomain = {
  domain: 'C',
  title: 'Sąmoningumas',
  shortDescription: 'Sąmoningumas (angl. Conscientiousness) apibūdina tai, kaip žmogus kontroliuoja, reguliuoja ir nukreipia savo impulsus.',
  description: `Impulsai savaime nėra blogi. Kartais situacijos reikalauja greito sprendimo, ir veikimas pagal pirmą impulsą gali būti veiksmingas. Be to, poilsio ar žaidimo metu spontaniškumas ir impulsyvumas gali būti malonūs. Impulsyvūs žmonės kitiems dažnai atrodo įdomūs, gyvybingi ir smagūs leisti laiką.
<br /><br />
Tačiau veikimas pagal impulsą gali sukelti problemų. Kai kurie impulsai yra antisocialūs, o nekontroliuojami antisocialūs veiksmai gali pakenkti kitiems ir sukelti neigiamas pasekmes pačiam veikėjui. Kiti impulsyvūs veiksmai suteikia trumpalaikį malonumą, bet lemia nepageidaujamas ilgalaikes pasekmes. Pavyzdžiai: pernelyg dažnas socializavimasis, kuris baigiasi atleidimu iš darbo; įžeidimas, sukeliantis svarbių santykių nutrūkimą; malonumą sukeliantys, tačiau sveikatą griaunantys narkotikai.
<br /><br />
Impulsyvus elgesys, net jei ir nėra labai destruktyvus, gali reikšmingai sumažinti žmogaus veiksmingumą. Veikdami impulsyviai, žmonės neturi galimybės apsvarstyti alternatyvių veiksmų variantų – kai kurie jų galėtų būti žymiai protingesni nei spontaniškas pasirinkimas. Impulsyvumas taip pat trukdo susikaupti vykdant projektus, kuriems reikia organizuoto, nuoseklaus darbo. Todėl impulsyvaus žmogaus pasiekimai dažnai būna nedideli, padriki ir nenuoseklūs.
<br /><br />
Vienas esminių intelekto bruožų, skiriantis žmogų nuo ankstesnių gyvybės formų, yra gebėjimas numatyti būsimus veiksmų padarinius prieš pasiduodant impulsui. Protinga veikla apima ilgalaikių tikslų apmąstymą, planavimą, kryptingą siekį ir gebėjimą atsispirti trumpalaikiams pagundoms. Ši idėja gerai atsispindi terminuose „apdairumas“ ir „protinga savikontrolė“, kurie neretai vartojami kaip alternatyvūs sąmoningumo pavadinimai.
<br /><br/>
Aukštus sąmoningumo balus surinkę žmonės kitų dažnai suvokiami kaip protingi. Sąmoningumo privalumai akivaizdūs: tokie asmenys vengia problemų, o aukštų rezultatų pasiekia kryptingu planavimu ir atkaklumu. Aplinkiniams jie atrodo patikimi ir racionalūs. Neigiama pusė ta, kad labai sąmoningi žmonės kartais tampa perfekcionistais arba darboholikais, o aplinkiniams gali pasirodyti pernelyg formalūs ar nuobodūs.
<br /><br />
Tuo tarpu mažo sąmoningumo žmonės gali būti kritikuojami dėl nepatikimumo, iniciatyvos stokos ar taisyklių nepaisymo, tačiau jie patiria daugiau spontaniškų malonumų ir niekada nebus vadinami nuobodžiais.`,
  results: [
    {
      score: 'low', // do not translate this line
      text: `Jūsų sąmoningumo lygis yra žemas, tai rodo, kad mėgstate gyventi šia diena ir daryti tai, kas tuo metu teikia malonumą. Jūsų veikla dažnai būna neapdairi ir neorganizuota.`
    },
    {
      score: 'neutral', // do not translate this line
      text: `Jūsų sąmoningumo lygis yra vidutinis. Tai reiškia, kad esate pakankamai patikimas, organizuotas ir gebate save kontroliuoti.`
    },
    {
      score: 'high', // do not translate this line
      text: `Jūsų sąmoningumo įvertis yra aukštas. Tai reiškia, kad keliatės aiškius tikslus ir atkakliai jų siekiate. Žmonės jus vertina kaip patikimą ir darbštų žmogų.`
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
      title: 'Tvarkingumas',
      text: `Aukštus balus šioje skalėje surinkę žmonės yra gerai organizuoti. Jie mėgsta gyventi pagal rutiną ir laikytis nustatytų grafikų. Tokie asmenys dažnai sudarinėja sąrašus ir planuoja savo veiklas. Žemą balą turintys asmenys linkę į netvarką ir neorganizuotumą, jų veikla gali būti išsibarsčiusi ir nenuosekli.`
    },
    {
      facet: 3,
      title: 'Pareigingumas',
      text: `Ši skalė atspindi žmogaus pareigos ir atsakomybės jausmo stiprumą. Aukštus balus surinkę asmenys jaučia stiprų moralinį įsipareigojimą laikytis taisyklių ir atlikti savo pareigas. Žemą balą turintiems žmonėms sutartys, taisyklės ir reglamentai gali atrodyti pernelyg ribojantys. Dėl to jie dažniau suvokiami kaip nepatikimi ar net neatsakingi.`
    },
    {
      facet: 4,
      title: 'Tikslo siekimas',
      text: `Aukštus balus šioje skalėje surinkę asmenys atkakliai siekia meistriškumo. Noras būti pripažintiems kaip sėkmingiems skatina juos nuosekliai judėti savo ambicingų tikslų link. Dažnai jie turi aiškią kryptį gyvenime, tačiau labai aukšti balai gali reikšti pernelyg siaurą susitelkimą į darbą ar net darbo maniją. Žemą balą turintys žmonės paprastai patenkinti atlikdami tik minimalų darbų kiekį ir kitų gali būti vertinami kaip tingūs.`
    },
    {
      facet: 5,
      title: 'Savidrausmė',
      text: `Savidrausmė ar savikontrolė – tai, ką daugelis vadina valia – apibūdina gebėjimą išlikti užsispyrusiam atliekant sunkias ar nemalonias užduotis iki jų pabaigos. Aukštus balus turintys asmenys geba įveikti nenorą pradėti darbus ir išlaikyti dėmesį nepaisydami trukdžių. Žemą savikontrolę turintys žmonės linkę atidėlioti ir sunkiai užbaigia pradėtus darbus – neretai net tuos, kuriuos patys labai norėtų pabaigti.`
    },
    {
      facet: 6,
      title: 'Apdairumas',
      text: `Apdairumas apibūdina žmogaus polinkį apgalvoti galimybes prieš imantis veiksmų. Aukštus balus šioje skalėje surinkę asmenys neskuba priimti sprendimų – jie skiria laiko apsvarstyti alternatyvas ir galimas pasekmes. Žemą balą turintys žmonės dažnai pasako ar padaro pirmą dalyką, kuris šauna į galvą, neskirdami laiko apmąstymams ar pasekmių įvertinimui.`
    }
  ]
}

export default conscientiousness
