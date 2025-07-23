'use client';

import { Select, SelectItem } from '@nextui-org/select';
import { ChangeEvent } from 'react';
import { Language } from '@/types';
import { useRouter } from '@/navigation';

export const ReportLanguageSwitch = ({
  language,
  availableLanguages
}: {
  language: string;
  availableLanguages: Language[];
}) => {
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
        aria-label='Select language'
        name='localeSelectSmall'
        className='w-48'
        size='sm'
        label='Report language'
      >
        {availableLanguages.map((lang) => (
          <SelectItem key={lang.code} value={lang.code} textValue={lang.name}>
            {lang.name}
          </SelectItem>
        ))}
      </Select>
    </div>
  );
};
