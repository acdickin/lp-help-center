
import React, { useState, useEffect } from 'react'
import { ManagementClient } from '@kentico/kontent-management';

const LanguageSelector = ({ language, handleSetLanguage }) => {
  const [languages, setLanguages] = useState()

  const client = new ManagementClient({
    projectId: process.env.REACT_APP_KONTENT_ID,
    apiKey: process.env.REACT_APP_KONTENT_API_KEY
  });


  useEffect(() => {
    client.listLanguages()
      .toObservable()
      .subscribe((response) => {
        setLanguages(response.data.items)
      },
        (error) => {
          console.log(error);
        });
  }, [])

  const renderOptions = (languages) => {
    let options = []
    if (languages) {
      options = languages.map(lang => {
        if (lang.isActive) {
          return <option key={lang.codename} value={lang.codename}>{lang.name}</option>
        }
      })
    }
    return options
  }
  return (
    <div className="custom-select" style={{ border: 'solid #fe5e00 1px' }}>
      <select value={language} onChange={e => handleSetLanguage(e.target.value)}>
        {renderOptions(languages)}
      </select>
    </div >
  )
}

export default LanguageSelector;
