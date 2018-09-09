const languages = [
  {
    name: 'C++',
    keywords: ['desktop', 'compiled']
  },
  {
    name: 'JavaScript',
    keywords: ['web', 'server']
  }
];

const markup = `
  <div class="languages">
    ${languages.map((language) => {
      return `        
        <div class="language">
            <h1>${language.name}</h1>
            <ul>
                ${language.keywords.map(keyword => `<li>${keyword}</li>`).join('')}
            </ul>
        </div>
        `;
    }).join('')}
  </div>
`;

document.body.innerHTML = markup;