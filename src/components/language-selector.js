
import React from 'react'
import { useQuery } from '@apollo/client'
import { LANGUAGES_QUERY } from '../queries/language'

const LanguageSelector = ({ language, handleSetLanguage }) => {



  const { loading, data } = useQuery(LANGUAGES_QUERY)
  // handleSetLanguage(data)

  const renderOptions = (languages) => {
    let options = []
    if (languages) {
      options = languages
        .filter(lang => lang.is_active)
        .map(lang => <option key={lang.codename} value={lang.codename}>{lang.name}</option>)
    }
    return options
  }

  if (loading) {
    return null;
  } else {
    return (
      <div className="custom-select" style={{ border: 'solid #fe5e00 1px' }}>
        <select value={language} onChange={e => handleSetLanguage(e.target.value)}>
          {renderOptions(data.getLanguages.languages)}
        </select>
      </div >
    )
  }
}

export default LanguageSelector;
