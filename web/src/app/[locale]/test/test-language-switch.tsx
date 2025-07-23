'use client';

import { Select, SelectItem } from '@nextui-org/select';
import { ChangeEvent } from 'react';
import type {   Language } from '@/lib/questions';
import { useRouter } from '@/navigation';

interface TestLanguageSwitchProps {
  availableLanguages: Language[];
  language: string;
}

export const TestLanguageSwitch = ({
  availableLanguages,
  language
}: TestLanguageSwitchProps) => {
  const router = useRouter();

  function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    const selectedLanguage = event.target.value;
    router.push(`?lang=${selectedLanguage}`);
    router.refresh();
  }

  return (
    <div className='w-30'>
      <Select
        defaultSelectedKeys={[language]}
        onChange={onSelectChange}
        aria-label='Pasirinkti testo kalbą'
        size='sm'
        name='localeSelectSmall'
        className='w-48'
        label='Testo kalba'
        items={availableLanguages}
      >
        {(language) => (
          <SelectItem key={language.code} value={language.code}>
            {language.name}
          </SelectItem>
        )}
      </Select>
    </div>
  );
};
