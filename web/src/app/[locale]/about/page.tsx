import { HeartBoldIcon } from '@/components/icons';
import { title } from '@/components/primitives';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import Feedback from './feedback';
import { Link } from '@/navigation';

interface Props {
  params: { locale: string };
}

export async function generateMetadata({
  params: { locale }
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: 'about' });
  return {
    title: t('seo.title'),
    description: t('seo.description')
  };
}

export default function AboutPage({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);

  return (
    <>
      <div className='text-center justify-center mt-10'>
        <h1 className={title()}>Apie</h1>
      </div>
      <div className='mt-2 text-medium lg:mt-4 lg:text-large'>
        <p>
          Sveiki atvykę į psichologija.lt – erdvę, kur galite pažinti save. Šis testas yra parengtas pagal Didžiojo penketo asmenybės teoriją (Paul T. Costa & Robert McCrae) ir
leidžia įvertinti asmenybės bruožus pagal penkias asmenybės dimensijas: ekstraversiją, neurotizmą,
sutariamumą, sąmoningumą bei atvirumą patyrimui.
        </p>
        <br />
        <p>
          Kiekviena dimensija kruopščiai analizuojama, siekiant pateikti išsamų Jūsų bruožų vaizdą ir parodyti, kaip jie veikia Jūsų elgesį bei santykius su kitais.
        </p>
        <p>
          Mūsų testas sukurtas siekiant tikslumo ir paprastumo – jis padės Jums geriau pažinti save ir augti. Leiskitės į savęs pažinimo kelionę su psichologija.lt – vieta, kur psichologinės įžvalgos dera su patogia ir suprantama technologija.
        </p>
        <br />
        <p>
          Jei turite klausimų, pirmiausia perskaitykite{' '}
          <Link href='/faq' className='underline'>
            DUK
          </Link>{' '}
          puslapį. Jei vis dar neradote atsakymo, susisiekite su mumis info@psichologija.lt.
        </p>
      </div>
      <section>
        <div className='text-center justify-center mt-20'>
          <h2 className={title()}>Pradžiuginkite mus atsiliepimu!&nbsp;</h2>
          <div className='flex md:inline-flex flex-col md:flex-row items-center'>
            <HeartBoldIcon
              className='text-pink-500 animate-heartbeat'
              size={50}
              style={{
                animationDuration: '2.5s'
              }}
            />
          </div>
          <div className='mt-2 text-medium lg:mt-4 lg:text-large'>
            Parašykite mums laišką ir mes galėsime pasidžiaugti atliktu darbu arba jį dar patobulinti.
          </div>
        </div>
        <Feedback />
      </section>
    </>
  );
}
