(function (doc) {
  'use strict';

  const projects = [
    {
      name: 'dermat-at',
      linkChallenge: 'http://www.aldotoschi.com.br',
      description: 'A responsive webpage with blog and post using WordPress for a doctor clinic, calculate reading time of posts, call section blog on a static page',
      tags: 'WordPress | PHP | JS | SASS | Bootstrap',
      date: '23/06/2020'
    },
    {
      name: 'keep-playing',
      linkChallenge: 'https://github.com/ebraimcarvalho/frontend-challenges/tree/master/keep-playing',
      description: 'A responsive landingpage for a music school, using Javascript and PHP for cend email, pure style using SASS and responsive for all screen size',
      tags: 'JS | PHP | SASS | Responsive',
      date: '04/07/2020'
    },
    {
      name: 'dermat-at',
      linkChallenge: 'http://www.aldotoschi.com.br',
      description: 'A responsive webpage with blog and post using WordPress for a doctor clinic, calculate reading time of posts, call section blog on a static page',
      tags: 'WordPress | PHP | JS | SASS | Bootstrap',
      date: '23/06/2020'
    },
    {
      name: 'gbtel',
      linkChallenge: 'https://www.gbtel.com.br',
      description: 'A responsive webpage for a company, using animation on scroll',
      tags: 'JS | Animation | CSS | Responsive',
      date: '13/06/2020'
    },
    {
      name: 'teste-martin-luz',
      linkChallenge: 'https://www.figma.com/file/KBLCl4GG69LzFIeJEE6mMY/Teste---Martin-Luz?node-id=0%3A1',
      description: 'A test to do a responsive webpage using Bootstrap and Sass containing a Carousel and a Modal with a video',
      tags: 'JS | SASS | Bootstrap | Wordpress | Responsive',
      date: '06/06/2020'
    },
    {
      name: 'ciclic-frontend',
      linkChallenge: 'https://github.com/ebraimcarvalho/frontend-challenges/blob/master/ciclic-frontend/README.md',
      description: 'An Investment simulator consuming an API to calculate the return at a fixed rate and with input validation',
      tags: 'JS | API | CSS | HTML | Responsive',
      date: '20/04/2020'
    },
    {
      name: 'chaordic-frontend-challenge',
      linkChallenge: 'https://github.com/ebraimcarvalho/frontend-challenges/blob/master/chaordic-frontend-challenge/README.md',
      description: 'A Web page for e-commerce with a structure that consumes an API to render products, information, prices and payment methods and with input validation',
      tags: 'JS | API | CSS | HTML | Responsive',
      date: '16/04/2020'
    },
    {
      name: 'intro-component-with-signup-form-master',
      linkChallenge: 'https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1',
      description: 'A Sign up form with a responsive layout, mobile first and input validation',
      tags: 'JS | CSS | HTML | Responsive',
      date: '02/04/2020'
    },
    {
      name: 'frontend-technical-test',
      linkChallenge: 'https://github.com/ebraimcarvalho/frontend-challenges/blob/master/frontend-technical-test/README.md',
      description: 'A small betting site that renders a cart field when clicking on a bet, responsive layout, consuming an endpoint and rendering on screen according to some validations!',
      tags: 'JS | API | CSS | HTML | Responsive',
      date: '30/03/2020'
    },
    {
      name: 'base-apparel-coming-soon-master',
      linkChallenge: 'https://www.frontendmentor.io/challenges/base-apparel-coming-soon-page-5d46b47f8db8a7063f9331a0',
      description: 'A Landing Page with a responsive layout, mobile first and input email validation',
      tags: 'JS | CSS | HTML | Responsive',
      date: '26/03/2020'
    },
    {
      name: 'codeminer-shopping-cart',
      linkChallenge: 'https://github.com/ebraimcarvalho/frontend-challenges/blob/master/codeminer-shopping-cart/README.md',
      description: 'A solution for the online shop cart with shipping and discount coupons requirements, calculate total and render',
      tags: 'JS | CSS | HTML | Responsive',
      date: '22/03/2020'
    },
    {
      name: '1STi-api-weather',
      linkChallenge: 'https://github.com/ebraimcarvalho/frontend-challenges/blob/master/1STi-api-weather/README.md',
      description: 'A website that consumes an API to return the weather forecast for any city in the world, and also informs the forecast for the next 5 days',
      tags: 'JS | API | CSS | HTML | Responsive',
      date: '20/03/2020'
    },
    {
      name: 'four-card-feature-section-master',
      linkChallenge: 'https://www.frontendmentor.io/challenges/four-card-feature-section-weK1eFYK',
      description: 'A web page with information and cards with a cool and responsive layout',
      tags: 'CSS | HTML',
      date: '18/03/2020'
    },
    {
      name: 'addison-global-web-technical-ebraim',
      linkChallenge: 'https://github.com/ebraimcarvalho/frontend-challenges/blob/master/addison-global-web-technical-ebraim/README.md',
      description: 'A fast, responsive, mobile first promotions page. This promotions page consists of two views or filters which exist on a single page consuming a Endpoint',
      tags: 'JS | API | CSS | HTML | Responsive',
      date: '15/03/2020'
    }
  ]

  const container = doc.querySelector('[data-js="container"]');

  projects.forEach(({ name, linkChallenge, description, tags, date }, i) => {
    const cardProject = doc.createElement('div');
    cardProject.classList.add('card-project');

    cardProject.innerHTML = `
      <div>
        <a href="./${name}/index.html" target="_blank">
          <img class="card-project__img" src="./${name}/design/desktop-design.jpg" alt=${name}>      
          <h4>${i + 10}. ${formatName(name)}</h4>
          <p><small>${date ? `Date of Project: ${date}` : ''}</small></p>
        </a>
        <p>${description}, this was developed for improve my frontend skills! Details and more informations, you can access on page: 
          <a href="${linkChallenge}" target="_blank">Page of Challenge;</a> 
          Or access the 
          <a href="https://github.com/ebraimcarvalho/frontend-challenges/tree/master/${name}" target="_blank">Code page - Github</a></p>
      </div>
      <small class="card-project__small">${tags}</small>
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