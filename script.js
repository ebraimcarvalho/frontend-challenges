(function (doc) {
  'use strict';

  const projects = [
    {
      name: 'frontend-technical-test',
      linkChallenge: 'https://github.com/ebraimcarvalho/frontend-challenges/blob/master/frontend-technical-test/README.md'
    },
    {
      name: 'base-apparel-coming-soon-master',
      linkChallenge: 'https://www.frontendmentor.io/challenges/base-apparel-coming-soon-page-5d46b47f8db8a7063f9331a0'
    },
    {
      name: 'codeminer-shopping-cart',
      linkChallenge: 'https://github.com/ebraimcarvalho/frontend-challenges/blob/master/codeminer-shopping-cart/README.md'
    },
    {
      name: '1STi-api-weather',
      linkChallenge: 'https://github.com/ebraimcarvalho/frontend-challenges/blob/master/1STi-api-weather/README.md'
    },
    {
      name: 'four-card-feature-section-master',
      linkChallenge: 'https://www.frontendmentor.io/challenges/four-card-feature-section-weK1eFYK'
    },
    {
      name: 'addison-global-web-technical-ebraim',
      linkChallenge: 'https://github.com/ebraimcarvalho/frontend-challenges/blob/master/addison-global-web-technical-ebraim/README.md'
    }
  ]

  const container = doc.querySelector('[data-js="container"]');

  projects.forEach(({ name, linkChallenge }, i) => {
    const cardProject = doc.createElement('div');
    cardProject.classList.add('card-project');

    cardProject.innerHTML = `
      <a href="./${name}/index.html" target="_blank">
        <h4>${i + 1}. ${formatName(name)}</h4>
      </a>
      <p>This is a challenge to improve my frontend skills! Technical details and more informations, you can access on page: 
        <a href="${linkChallenge}" target="_blank">Page of Challenge;</a> 
        Or access the 
        <a href="https://github.com/ebraimcarvalho/frontend-challenges/tree/master/${name}" target="_blank">Code page - Github</a></p>
    `;

    container.appendChild(cardProject);
  });

  function formatName(name) {
    return name
      .split('-')
      .map(word => word[0].toUpperCase() + word.slice(1))
      .join(' ');
  }

})(document);