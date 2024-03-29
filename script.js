(function (doc) {
  'use strict';

  const projects = [
    {
      type: 'react',
      name: 'book-summary-|-designing-data-intensive-applications',
      linkChallenge: 'https://www.linkedin.com/pulse/designing-data-intensive-applications-resumo-do-livro-carvalho',
      img: './assets/design/designing-data-intensive-applications.jpg',
      description: 'Tech book most recommended by professional in software and data engineer field, talks about building applications resiliente, reliable, scalable, maintanable, with a understand about the different types of technologies in the market. Details and more informations, you can access on <a href="https://www.linkedin.com/pulse/designing-data-intensive-applications-resumo-do-livro-carvalho" target="_blank">Link of publication</a>',
      tags: 'Data Engineer | Tech Book | Reliable | Scalable | Maintainable',
      date: '17/03/2023',
    },
    {
      type: 'react',
      name: 'snowflake-impressions-and-summary',
      linkChallenge: 'https://www.linkedin.com/pulse/snowflake-impress%C3%B5es-e-resumo-ebraim-carvalho/',
      img: './assets/design/snowflake.png',
      description: 'Summary and self impressions about Snowflake, a modern data warehouse that is growing fast in the data engineer market. Details and more informations, you can access on <a href="https://www.linkedin.com/pulse/snowflake-impress%C3%B5es-e-resumo-ebraim-carvalho/" target="_blank">Link of publication</a>',
      tags: 'Data Engineer | Snowflake',
      date: '13/01/2023',
    },
    {
      type: 'react',
      name: 'challenge-data-engineer-spark-sql',
      linkChallenge: 'https://github.com/ebraimcarvalho/teste_data_engineer/blob/main/desafio_data_engineer.ipynb',
      img: './assets/design/arquitetura_data_engineer.jpg',
      description: 'Challenge to query data using SQL with aggregation to answer business questions and read data using spark and transoform it foloow business needs. Details and more informations, you can access on <a href="https://github.com/ebraimcarvalho/teste_data_engineer" target="_blank">Github Repo</a>',
      tags: 'Spark | SQL | ETL | Data Engineer',
      date: '15/12/2022',
    },
    {
      type: 'react',
      name: 'dependencies-delta-spark-in-cluster-dataproc',
      linkChallenge: 'https://www.linkedin.com/pulse/instalando-depend%C3%AAncias-delta-spark-cluster-dataproc-com-carvalho/',
      img: './assets/design/dataproc.png',
      description: 'Solving problems when installing delta spark dependencies in GCP Dataproc cluster. Details and more informations, you can access on <a href="https://www.linkedin.com/pulse/instalando-depend%C3%AAncias-delta-spark-cluster-dataproc-com-carvalho/" target="_blank">Link of publication</a>',
      tags: 'Data Engineer | Spark | Delta | Dataproc | GCP',
      date: '06/05/2022',
    },
    {
      type: 'react',
      name: 'book-summary-|-building-datalakehouse',
      linkChallenge: 'https://www.linkedin.com/pulse/building-data-lakehouse-cap1-evolution-ebraim-carvalho/',
      img: './assets/design/datalakehouse.jpg',
      description: 'Evolution of data warehouse architecture, this book brings the value of a modern architecture using datalakehouse, solving some problems from traditionally data warehouse and data lake. Details and more informations, you can access on <a href="https://www.linkedin.com/pulse/building-data-lakehouse-cap1-evolution-ebraim-carvalho/" target="_blank">Link of publication</a>',
      tags: 'Data Engineer | Datalakehouse | Architecture',
      date: '24/04/2022',
    },
    {
      type: 'react',
      name: 'book-summary-|-clean-code',
      linkChallenge: 'https://www.linkedin.com/pulse/clean-code-cap%C3%ADtulo-1-ebraim-carvalho',
      img: './assets/design/cleancode.jpg',
      description: 'One of the most recommended books in tech industry, clean code is about code quality and several topics in software engineer, this summary wants to bring the most valuable concepts from this book. Details and more informations, you can access on <a href="https://www.linkedin.com/pulse/clean-code-cap%C3%ADtulo-1-ebraim-carvalho" target="_blank">Link of publication</a>',
      tags: 'Data Engineer | Clean code | Code quality',
      date: '18/02/2022',
    },
    {
      type: 'react',
      name: 'python-etl-challenge-data-engineer',
      linkChallenge: 'https://github.com/ebraimcarvalho/my-way/blob/main/hash/desafio_hash_ebraim_carvalho.ipynb',
      img: './assets/design/python-pandas.jpg',
      description: 'Read data from different CSV files, run transformations and cleansing, join datasets to easy query and some data exploration. Details and more informations, you can access on <a href="https://github.com/ebraimcarvalho/my-way/tree/main/hash" target="_blank">Github Repo</a>',
      tags: 'Python | Pandas | ETL | Data Engineer',
      date: '15/02/2022',
    },
    {
      type: 'react',
      name: 'python-fastapi-challenge-backend',
      linkChallenge: 'https://github.com/ebraimcarvalho/my-way/tree/main/scalac',
      img: './assets/design/python-fastapi.jpg',
      description: 'Create an API using FastAPI - Python that given a organization name into endpoint, consume a Github API to read all repositories and return a list of objects sorted by number of contributions. Details and more informations, you can access on <a href="https://github.com/ebraimcarvalho/my-way/tree/main/scalac" target="_blank">Github Repo</a>',
      tags: 'Python | FastAPI | API | Backend',
      date: '14/02/2022',
    },
    {
      type: 'react',
      name: 'python-challenge-backend',
      linkChallenge: 'https://github.com/ebraimcarvalho/my-way/tree/main/deloitte',
      img: './assets/design/python-django.png',
      description: 'Create an api using Django that serve endpoints to get all posts, staffs and services, and authenticate into admin area to create, edit, delete or read posts, staff or services by a company. Details and more informations, you can access on <a href="https://github.com/ebraimcarvalho/my-way/tree/main/deloitte" target="_blank">Github Repo</a>',
      tags: 'Python | Django | API | Backend',
      date: '09/02/2022',
    },
    {
      type: 'react',
      name: 'python-api-challenge-data-engineer',
      linkChallenge: 'https://github.com/ebraimcarvalho/my-way/tree/main/blu-desafio',
      img: './assets/design/docker-flask.png',
      description: 'Create an api using Flask that serve endpoints to consume a StarWars API and save data in database sql, dockerize the application. Details and more informations, you can access on <a href="https://github.com/ebraimcarvalho/my-way/tree/main/blu-desafio" target="_blank">Github Repo</a>',
      tags: 'Python | Flask | API | Docker | SQL',
      date: '08/02/2022',
    },
    {
      type: 'react',
      name: 'spark-challenge-data-engineer',
      linkChallenge: 'https://github.com/ebraimcarvalho/my-way/blob/main/a3_data/teste_engenharia_de_dados_a3data_ebraim_c.ipynb',
      img: './assets/design/pyspark.jpeg',
      description: 'Solve some questions using python, pyspark and sql, making some aggregations, joins and groups. Details and more informations, you can access on <a href="https://github.com/ebraimcarvalho/my-way/tree/main/a3_data" target="_blank">Github Repo</a>',
      tags: 'Python | PySpark | SQL | Data Engineer',
      date: '04/02/2022',
    },
    {
      type: 'react',
      name: 'etl-challenge-data-engineer',
      linkChallenge: 'https://github.com/ebraimcarvalho/my-way/blob/main/dadoesfera/NYC_trips_challenge.ipynb',
      img: './assets/design/nyc-taxis.jpeg',
      description: 'Read data from different CSV and JSON files with NYC taxi trips, run transformations and cleansing, join datasets to easy query and some data exploration. Details and more informations, you can access on <a href="https://github.com/ebraimcarvalho/my-way/tree/main/dadoesfera" target="_blank">Github Repo</a>',
      tags: 'Python | Pandas | ETL | Data Engineer',
      date: '31/01/2022',
    },
    {
      type: 'react',
      name: 'apache-airflow-fundamentals-certification-summary',
      linkChallenge: 'https://www.linkedin.com/pulse/resumo-do-apache-airflow-para-certifica%C3%A7%C3%A3o-ebraim-carvalho/',
      img: './assets/design/airflow.png',
      description: 'Summary of concepts studied for Apache Airflow Fundamentals Certification Exam. Details and more informations, you can access on <a href="https://www.linkedin.com/pulse/resumo-do-apache-airflow-para-certifica%C3%A7%C3%A3o-ebraim-carvalho/" target="_blank">Link of publication</a>',
      tags: 'Airflow | Certification | ETL | Data Engineer',
      date: '26/01/2022',
    },
    {
      type: 'react',
      name: 'gama-challenge-data-engineer',
      linkChallenge: 'https://github.com/ebraimcarvalho/my-way/blob/main/gama_accenture/DESAFIO/gama_mario_kart.ipynb',
      img: './assets/design/gama-academy.png',
      description: 'Ingest Data from datasets of Formula 1 Championships since 1950 until 2021, create relational database and dimensional database in MySQL, connect in python using SQLAlchemy and Pandas to do transformations, joins and answer some questions, project to course conclusion. Details and more informations, you can access on <a href="https://github.com/ebraimcarvalho/my-way/tree/main/gama_accenture/DESAFIO" target="_blank">Github Repo</a>',
      tags: 'Python | Pandas | ETL | Data Warehouse | MySQL | Data Engineer',
      date: '21/06/2021',
    },
    {
      type: 'react',
      name: 'santander-challenge-etl',
      linkChallenge: 'https://github.com/ebraimcarvalho/data-engineer-challenges/blob/main/de_satander_challenge/etl.ipynb',
      img: './assets/design/santander.jpg',
      description: 'Extract data from a TSV file, tranform and load into a clean CSV - Challenge viwed in a github repo. Details and more informations, you can access on <a href="https://github.com/ebraimcarvalho/data-engineer-challenges/blob/main/de_satander_challenge/etl.ipynb" target="_blank">Notebook code - Github</a>',
      tags: 'Python | Pandas | ETL | Data Engineer',
      date: '15/05/2021',
    },
    {
      type: 'react',
      name: 'game-monster-vue-js',
      linkChallenge: 'https://game-monster-vuejs.netlify.app/',
      img: './assets/design/game-monster.jpg',
      description: 'A simple game project in Vue JS with state control, conditional render and for loops to list log\'s array!',
      tags: 'Vue JS | CSS Flex | Javascript',
      date: '28/12/2020',
    },
    {
      type: 'react',
      name: 'vue-js-github-issues',
      linkChallenge: 'https://vuejs-github-issues.netlify.app/',
      img: './assets/design/vuejs-design.png',
      description: 'A simple project in Vue JS for list Issues from a Repo in a Github, using ajax to get json data and render in a component!',
      tags: 'Vue JS | Bootstrap | Axios | Vue Router',
      date: '26/12/2020',
    },
    {
      type: 'react',
      name: 'udacity-postgres-etl',
      linkChallenge: 'https://github.com/ebraimcarvalho/udacity-nanodegree-data-engineer/blob/main/1_dend_data_modeling/P1_Postgres_Data_Modeling_and_ETL/sparkify-project.ipynb',
      img: './assets/design/udacity-postgres.jpg',
      description: 'Data modeling with PosgreSQL and ETL Pipeline - Project proposed by udacity! Details and more informations, you can access on <a href="https://github.com/ebraimcarvalho/udacity-nanodegree-data-engineer/blob/main/1_dend_data_modeling/P1_Postgres_Data_Modeling_and_ETL/sparkify-project.ipynb" target="_blank">Notebook code - Github</a>',
      tags: 'Python | PostgreSQL | ETL | Data Engineer',
      date: '31/10/2020',
    },
    {
      type: 'vanilla',
      name: 'bbi-consultoria',
      linkChallenge: 'https://github.com/ebraimcarvalho/frontend-challenges/tree/master/bbi-consultoria',
      description: 'A responsive website for a company, pure style using SASS and responsive for all screen size',
      tags: 'JS | CSS | SASS | Responsive | Animation',
      date: '07/08/2020'
    },
    {
      type: 'react',
      name: 'sorocabacom-test',
      linkChallenge: 'https://sorocabacom-ebraim.netlify.app/',
      img: './assets/design/sorocaba-design.jpg',
      description: 'An test application propose by an brazilian company using React, Styled Components and Carousel, was developed to job test!',
      tags: 'React | Styled Components | Hooks | Responsive',
      date: '01/08/2020'
    },
    {
      type: 'vanilla',
      name: 'website-trindade',
      linkChallenge: 'https://github.com/ebraimcarvalho/frontend-challenges/tree/master/website-trindade',
      description: 'A responsive website for a web agency, pure style using SASS and responsive for all screen size',
      tags: 'CSS | BEM | SASS | Responsive',
      date: '09/07/2020'
    },
    {
      type: 'vanilla',
      name: 'keep-playing',
      linkChallenge: 'https://github.com/ebraimcarvalho/frontend-challenges/tree/master/keep-playing',
      description: 'A responsive landingpage for a music school, using Javascript and PHP for send email, pure style using SASS and responsive for all screen size',
      tags: 'JS | PHP | SASS | Responsive',
      date: '04/07/2020'
    },
    {
      type: 'vanilla',
      name: 'dermat-at',
      linkChallenge: 'http://www.aldotoschi.com.br',
      description: 'A responsive webpage with blog and post using WordPress for a doctor clinic, calculate reading time of posts, call section blog on a static page',
      tags: 'WordPress | PHP | JS | SASS | Bootstrap',
      date: '23/06/2020'
    },
    {
      type: 'react',
      name: 'travels-reservation',
      linkChallenge: 'https://travel-reservation.netlify.app/',
      img: './travel-reservation/design/desktop-design.jpg',
      description: 'An application that makes travel package reservations using React, Routes, Redux and Immer, was developed to improve my front-end skills! Details and more informations, you can access on <a href="https://github.com/ebraimcarvalho/frontend-challenges/tree/master/travel-reservation" target="_blank">Code page - Github</a>',
      tags: 'React | Redux | Hooks | Immer | Responsive',
      date: '15/06/2020'
    },
    {
      type: 'vanilla',
      name: 'gbtel',
      linkChallenge: 'https://www.gbtel.com.br',
      description: 'A responsive webpage for a company, using animation on scroll',
      tags: 'JS | Animation | CSS | Responsive',
      date: '13/06/2020'
    },
    {
      type: 'vanilla',
      name: 'teste-martin-luz',
      linkChallenge: 'https://www.figma.com/file/KBLCl4GG69LzFIeJEE6mMY/Teste---Martin-Luz?node-id=0%3A1',
      description: 'A test to do a responsive webpage using Bootstrap and Sass containing a Carousel and a Modal with a video',
      tags: 'JS | SASS | Bootstrap | Wordpress | Responsive',
      date: '06/06/2020'
    },
    {
      type: 'react',
      name: 'blog-firebase-+-react',
      linkChallenge: 'https://blog-firebase-react.netlify.app/',
      img: './blog-firebase-react/design/desktop-design.jpg',
      description: 'A Blog created with React JS and using Firebase to create a new account, log in, create a new post that will be saved in the database and read this database to render on screen, was developed to improve my front-end skills! Details and more informations, you can access on <a href="https://github.com/ebraimcarvalho/frontend-challenges/tree/master/blog-firebase-react" target="_blank">Code page - Github</a>',
      tags: 'React | Firebase | Hooks | Auth | Responsive',
      date: '31/05/2020'
    },
    {
      type: 'react',
      name: 'github-api',
      linkChallenge: 'https://github-api-repo.netlify.app/',
      img: '/get-repos-github/design/desktop-design.png',
      description: 'A client-side application that queries the Github API and returns user information and also renders the repositories and favorites when clicking on the buttons, was developed to improve my front-end skills! Details and more informations, you can access on <a href="https://github.com/ebraimcarvalho/frontend-challenges/tree/master/get-repos-github" target="_blank">Code page - Github</a>',
      tags: 'React | API | Hooks | CSS | Responsive',
      date: '18/05/2020'
    },
    {
      type: 'react',
      name: 'b2w-frontend',
      linkChallenge: 'https://desafio-frontend-b2w.netlify.app/',
      img: './desafio-b2w-frontend/design/desktop-design.jpg',
      description: 'A client-side application that queries an API and shows a user\'s profile data using React, this was developed for improve my frontend skills! Details and more informations, you can access on page: <a href="https://github.com/b2w-marketplace/code-challenge" target="_blank">Page of Challenge;</a> Or access the <a href="https://github.com/ebraimcarvalho/frontend-challenges/tree/master/desafio-b2w-frontend" target="_blank">Code page - Github</a>',
      tags: 'React | API | CSS | HTML | Responsive',
      date: '06/05/2020'
    },
    {
      type: 'react',
      name: 'app-todo-with-react',
      linkChallenge: 'https://ebra-app-todo.netlify.app/',
      img: './app-todo/design/desktop-design.jpg',
      description: 'A simple Todo List application built with React, this was developed for improve my frontend skills! Details and more informations, you can access on page: <a href="https://medium.com/javascript-in-plain-english/build-a-simple-todo-app-with-react-561579b39ad1" target="_blank">Page of Challenge;</a> Or access the <a href="https://github.com/ebraimcarvalho/frontend-challenges/tree/master/app-todo" target="_blank">Code page - Github</a>',
      tags: 'React | Hooks',
      date: '05/05/2020'
    },
    {
      type: 'vanilla',
      name: 'ciclic-frontend',
      linkChallenge: 'https://github.com/ebraimcarvalho/frontend-challenges/blob/master/ciclic-frontend/README.md',
      description: 'An Investment simulator consuming an API to calculate the return at a fixed rate and with input validation',
      tags: 'JS | API | CSS | HTML | Responsive',
      date: '20/04/2020'
    },
    {
      type: 'vanilla',
      name: 'chaordic-frontend-challenge',
      linkChallenge: 'https://github.com/ebraimcarvalho/frontend-challenges/blob/master/chaordic-frontend-challenge/README.md',
      description: 'A Web page for e-commerce with a structure that consumes an API to render products, information, prices and payment methods and with input validation',
      tags: 'JS | API | CSS | HTML | Responsive',
      date: '16/04/2020'
    },
    {
      type: 'vanilla',
      name: 'intro-component-with-signup-form-master',
      linkChallenge: 'https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1',
      description: 'A Sign up form with a responsive layout, mobile first and input validation',
      tags: 'JS | CSS | HTML | Responsive',
      date: '02/04/2020'
    },
    {
      type: 'vanilla',
      name: 'frontend-technical-test',
      linkChallenge: 'https://github.com/ebraimcarvalho/frontend-challenges/blob/master/frontend-technical-test/README.md',
      description: 'A small betting site that renders a cart field when clicking on a bet, responsive layout, consuming an endpoint and rendering on screen according to some validations!',
      tags: 'JS | API | CSS | HTML | Responsive',
      date: '30/03/2020'
    },
    {
      type: 'vanilla',
      name: 'base-apparel-coming-soon-master',
      linkChallenge: 'https://www.frontendmentor.io/challenges/base-apparel-coming-soon-page-5d46b47f8db8a7063f9331a0',
      description: 'A Landing Page with a responsive layout, mobile first and input email validation',
      tags: 'JS | CSS | HTML | Responsive',
      date: '26/03/2020'
    },
    {
      type: 'vanilla',
      name: 'codeminer-shopping-cart',
      linkChallenge: 'https://github.com/ebraimcarvalho/frontend-challenges/blob/master/codeminer-shopping-cart/README.md',
      description: 'A solution for the online shop cart with shipping and discount coupons requirements, calculate total and render',
      tags: 'JS | CSS | HTML | Responsive',
      date: '22/03/2020'
    },
    {
      type: 'vanilla',
      name: '1STi-api-weather',
      linkChallenge: 'https://github.com/ebraimcarvalho/frontend-challenges/blob/master/1STi-api-weather/README.md',
      description: 'A website that consumes an API to return the weather forecast for any city in the world, and also informs the forecast for the next 5 days',
      tags: 'JS | API | CSS | HTML | Responsive',
      date: '20/03/2020'
    },
    {
      type: 'vanilla',
      name: 'four-card-feature-section-master',
      linkChallenge: 'https://www.frontendmentor.io/challenges/four-card-feature-section-weK1eFYK',
      description: 'A web page with information and cards with a cool and responsive layout',
      tags: 'CSS | HTML',
      date: '18/03/2020'
    },
    {
      type: 'vanilla',
      name: 'addison-global-web-technical-ebraim',
      linkChallenge: 'https://github.com/ebraimcarvalho/frontend-challenges/blob/master/addison-global-web-technical-ebraim/README.md',
      description: 'A fast, responsive, mobile first promotions page. This promotions page consists of two views or filters which exist on a single page consuming a Endpoint',
      tags: 'JS | API | CSS | HTML | Responsive',
      date: '15/03/2020'
    }
  ]

  const container = doc.querySelector('[data-js="container"]');

  projects.forEach(({ type, name, linkChallenge, img, description, tags, date }, i) => {
    const cardProject = doc.createElement('div');
    cardProject.classList.add('card-project');

    if (type === 'vanilla') {
      cardProject.innerHTML = `
        <div>
          <a href="./${name}/index.html" target="_blank">
            <img class="card-project__img" src="./${name}/design/desktop-design.jpg" alt=${name}>      
            <h4>${i + 2}. ${formatName(name)}</h4>
            <p><small>${date ? `Date of Project: ${date}` : ''}</small></p>
          </a>
          <p>${description}, this was developed for improve my frontend skills! Details and more informations, you can access on page: 
            <a href="${linkChallenge}" target="_blank">Page of Challenge;</a> 
            Or access the 
            <a href="https://github.com/ebraimcarvalho/frontend-challenges/tree/master/${name}" target="_blank">Code page - Github</a></p>
        </div>
        <small class="card-project__small">${tags}</small>
      `;
    } else {
      cardProject.innerHTML = `
        <div>
          <a href=${linkChallenge} target="_blank">
            <img class="card-project__img" src=${img} alt=${name} />
            <h4>${i + 2}. ${formatName(name)}</h4>
            <p><small>${date ? `Date of Project: ${date}` : ''}</small></p>
          </a>
          <p>${description}</p>
        </div>
        <small class="card-project__small">${tags}</small>
      `;
    }

    container.appendChild(cardProject);
  });

  function formatName(name) {
    return name
      .split('-')
      .map(word => word[0].toUpperCase() + word.slice(1))
      .join(' ');
  }

})(document);