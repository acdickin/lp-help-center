
import React, { useState } from 'react'
import { ManagementClient } from '@kentico/kontent-management';
const [languages, setLanguages] = useState()
const client = new ManagementClient({
  projectId: process.env.KONTENT_ID,
  apiKey: process.env.KONTENT_API_KEY
});

useEffect(() => {
  client.listLanguages()
    .toObservable()
    .subscribe((response) => {
      setLanguages(response)
    },
      (error) => {
        console.log(error);
      });
}, [])


const LanguageSelector = () => {
  const renderOptions = (languages) => {
    return languages.map(language => {
      if (language.is_active) {
        return <option value={language.codename} onClick={setLanguage}>{language.name}</option>
      }
    })
  }
  return (
    <select>
      {renderOptions(languages)}
    </select>
  )
}

export default LanguageSelector;
