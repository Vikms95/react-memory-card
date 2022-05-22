import jsLogo from '../assets/js-logo.png';
import javaLogo from '../assets/java-logo.png';
import tsLogo from '../assets/ts-logo.svg';
import pyLogo from '../assets/py-logo.png';
import cppLogo from '../assets/cpp-logo.png';
import cLogo from '../assets/c-logo.svg';
import csLogo from '../assets/cs-logo.png';
import phpLogo from '../assets/php-logo.png';
import goLogo from '../assets/go-logo.jpg';
import rustLogo from '../assets/rust-logo.svg';
import rbLogo from '../assets/rb-logo.png';
import swLogo from '../assets/sw-logo.png';
import ktLogo from '../assets/kt-logo.png';
import rLogo from '../assets/r-logo.png';
import scLogo from '../assets/sc-logo.png';
import hkLogo from '../assets/hk-logo.png';
import reactLogo from '../assets/react-logo.png';
import ngLogo from '../assets/ng-logo.png';
import jqLogo from '../assets/jq-logo.png';
import vueLogo from '../assets/vue-logo.png';
import svLogo from '../assets/sv-logo.png';
import bbLogo from '../assets/bb-logo.png';
import embLogo from '../assets/emb-logo.png';
import preactLogo from '../assets/preact-logo.png';
import flLogo from '../assets/fl-logo.png';
import exLogo from '../assets/ex-logo.png';
import sprLogo from '../assets/spr-logo.png';
import lrvLogo from '../assets/lrv-logo.png';
import rbrLogo from '../assets/rbr-logo.png';
import aspLogo from '../assets/asp-logo.png';
import fbLogo from '../assets/fb-logo.png';
import djLogo from '../assets/dj-logo.png';
import odbLogo from '../assets/odb-logo.png';
import mysqlLogo from '../assets/mysql-logo.png';
import mgLogo from '../assets/mg-logo.png';
import pgLogo from '../assets/pg-logo.png';
import rdLogo from '../assets/rd-logo.png';
import mdbLogo from '../assets/mdb-logo.png';
import cassLogo from '../assets/cass-logo.png';
import mssqlLogo from '../assets/mssql-logo.png';
import singleton from '../assets/singleton.png';
import factory from '../assets/factory.png';
import builder from '../assets/builder.png';
import adapter from '../assets/adapter.png';
import decorator from '../assets/decorator.png';
import facade from '../assets/facade.png';
import observer from '../assets/observer.png';
import strategy from '../assets/strategy.png';

const data = [
  {
    card1: {
      name: 'Javascript',
      photo: jsLogo,
    },
    card2: {
      name: 'Java',
      photo: javaLogo,
    },
    card3: {
      name: 'Typescript',
      photo: tsLogo,
    },
    card4: {
      name: 'Python',
      photo: pyLogo,
    },
    card5: {
      name: 'C++',
      photo: cppLogo,
    },
    card6: {
      name: 'C',
      photo: cLogo,
    },
    card7: {
      name: 'C#',
      photo: csLogo,
    },
    card8: {
      name: 'PHP',
      photo: phpLogo,
    },
  },

  {
    card1: {
      name: 'GO',
      photo: goLogo,
    },
    card2: {
      name: 'Rust',
      photo: rustLogo,
    },
    card3: {
      name: 'Ruby',
      photo: rbLogo,
    },
    card4: {
      name: 'Swift',
      photo: swLogo,
    },
    card5: {
      name: 'Kotlin',
      photo: ktLogo,
    },
    card6: {
      name: 'R',
      photo: rLogo,
    },
    card7: {
      name: 'Scala',
      photo: scLogo,
    },
    card8: {
      name: 'Haskell',
      photo: hkLogo,
    },
  },

  {
    card1: {
      name: 'React',
      photo: reactLogo,
    },
    card2: {
      name: 'Angular',
      photo: ngLogo,
    },
    card3: {
      name: 'Jquery',
      photo: jqLogo,
    },
    card4: {
      name: 'Vue',
      photo: vueLogo,
    },
    card5: {
      name: 'Svelte',
      photo: svLogo,
    },
    card6: {
      name: 'Backbone',
      photo: bbLogo,
    },
    card7: {
      name: 'Ember',
      photo: embLogo,
    },
    card8: {
      name: 'Preact',
      photo: preactLogo,
    },
  },

  {
    card1: {
      name: 'Flask',
      photo: flLogo,
    },
    card2: {
      name: 'Express',
      photo: exLogo,
    },
    card3: {
      name: 'Spring Boot',
      photo: sprLogo,
    },
    card4: {
      name: 'Laravel',
      photo: lrvLogo,
    },
    card5: {
      name: 'Ruby on Rails',
      photo: rbrLogo,
    },
    card6: {
      name: 'ASP.NET',
      photo: aspLogo,
    },
    card7: {
      name: 'Fiber',
      photo: fbLogo,
    },
    card8: {
      name: 'Django',
      photo: djLogo,
    },
  },

  {
    card1: {
      name: 'Oracle',
      photo: odbLogo,
    },
    card2: {
      name: 'MySQL',
      photo: mysqlLogo,
    },
    card3: {
      name: 'MongoDB',
      photo: mgLogo,
    },
    card4: {
      name: 'PostgreSQL',
      photo: pgLogo,
    },
    card5: {
      name: 'Redis',
      photo: rdLogo,
    },
    card6: {
      name: 'MariaDB',
      photo: mdbLogo,
    },
    card7: {
      name: 'Cassandra',
      photo: cassLogo,
    },
    card8: {
      name: 'MS SQL Server',
      photo: mssqlLogo,
    },
  },

  {
    card1: {
      name: 'Array',
      photo: '',
    },
    card2: {
      name: 'Linked List',
      photo: '',
    },
    card3: {
      name: 'Hash Table',
      photo: '',
    },
    card4: {
      name: 'Queue',
      photo: '',
    },
    card5: {
      name: 'Stack',
      photo: '',
    },
    card6: {
      name: 'Binary Tree',
      photo: '',
    },
    card7: {
      name: 'Graph',
      photo: '',
    },
    card8: {
      name: 'Trie',
      photo: '',
    },
  },

  // Use illustrations from dessign patterns webpage
  // https://refactoring.guru/design-patterns
  {
    card1: {
      name: 'Singleton',
      photo: singleton,
    },
    card2: {
      name: 'Factory',
      photo: factory,
    },
    card3: {
      name: 'Builder',
      photo: builder,
    },
    card4: {
      name: 'Adapter',
      photo: adapter,
    },
    card5: {
      name: 'Decorator',
      photo: decorator,
    },
    card6: {
      name: 'Facade',
      photo: facade,
    },
    card7: {
      name: 'Observer',
      photo: observer,
    },
    card8: {
      name: 'Strategy',
      photo: strategy,
    },
  },
];

export default data;
