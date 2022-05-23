import uniqid from 'uniqid';
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
import set from '../assets/set.png';
import linkedList from '../assets/linked-list.png';
import hashTable from '../assets/hash-table.png';
import queue from '../assets/queue.png';
import stack from '../assets/stack.png';
import binaryTree from '../assets/binary-tree.png';
import graph from '../assets/graph.png';
import trie from '../assets/trie.png';
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
      id: uniqid(),
      name: 'Javascript',
      photo: jsLogo,
    },
    card2: {
      id: uniqid(),
      name: 'Java',
      photo: javaLogo,
    },
    card3: {
      id: uniqid(),
      name: 'Typescript',
      photo: tsLogo,
    },
    card4: {
      id: uniqid(),
      name: 'Python',
      photo: pyLogo,
    },
    card5: {
      id: uniqid(),
      name: 'C++',
      photo: cppLogo,
    },
    card6: {
      id: uniqid(),
      name: 'C',
      photo: cLogo,
    },
    card7: {
      id: uniqid(),
      name: 'C#',
      photo: csLogo,
    },
    card8: {
      id: uniqid(),
      name: 'PHP',
      photo: phpLogo,
    },
  },

  {
    card1: {
      id: uniqid(),
      name: 'GO',
      photo: goLogo,
    },
    card2: {
      id: uniqid(),
      name: 'Rust',
      photo: rustLogo,
    },
    card3: {
      id: uniqid(),
      name: 'Ruby',
      photo: rbLogo,
    },
    card4: {
      id: uniqid(),
      name: 'Swift',
      photo: swLogo,
    },
    card5: {
      id: uniqid(),
      name: 'Kotlin',
      photo: ktLogo,
    },
    card6: {
      id: uniqid(),
      name: 'R',
      photo: rLogo,
    },
    card7: {
      id: uniqid(),
      name: 'Scala',
      photo: scLogo,
    },
    card8: {
      id: uniqid(),
      name: 'Haskell',
      photo: hkLogo,
    },
  },

  {
    card1: {
      id: uniqid(),
      name: 'React',
      photo: reactLogo,
    },
    card2: {
      id: uniqid(),
      name: 'Angular',
      photo: ngLogo,
    },
    card3: {
      id: uniqid(),
      name: 'Jquery',
      photo: jqLogo,
    },
    card4: {
      id: uniqid(),
      name: 'Vue',
      photo: vueLogo,
    },
    card5: {
      id: uniqid(),
      name: 'Svelte',
      photo: svLogo,
    },
    card6: {
      id: uniqid(),
      name: 'Backbone',
      photo: bbLogo,
    },
    card7: {
      id: uniqid(),
      name: 'Ember',
      photo: embLogo,
    },
    card8: {
      id: uniqid(),
      name: 'Preact',
      photo: preactLogo,
    },
  },

  {
    card1: {
      id: uniqid(),
      name: 'Flask',
      photo: flLogo,
    },
    card2: {
      id: uniqid(),
      name: 'Express',
      photo: exLogo,
    },
    card3: {
      id: uniqid(),
      name: 'Spring Boot',
      photo: sprLogo,
    },
    card4: {
      id: uniqid(),
      name: 'Laravel',
      photo: lrvLogo,
    },
    card5: {
      id: uniqid(),
      name: 'Rails',
      photo: rbrLogo,
    },
    card6: {
      id: uniqid(),
      name: 'ASP.NET',
      photo: aspLogo,
    },
    card7: {
      id: uniqid(),
      name: 'Fiber',
      photo: fbLogo,
    },
    card8: {
      id: uniqid(),
      name: 'Django',
      photo: djLogo,
    },
  },

  {
    card1: {
      id: uniqid(),
      name: 'Oracle',
      photo: odbLogo,
    },
    card2: {
      id: uniqid(),
      name: 'MySQL',
      photo: mysqlLogo,
    },
    card3: {
      id: uniqid(),
      name: 'MongoDB',
      photo: mgLogo,
    },
    card4: {
      id: uniqid(),
      name: 'PostgreSQL',
      photo: pgLogo,
    },
    card5: {
      id: uniqid(),
      name: 'Redis',
      photo: rdLogo,
    },
    card6: {
      id: uniqid(),
      name: 'MariaDB',
      photo: mdbLogo,
    },
    card7: {
      id: uniqid(),
      name: 'Cassandra',
      photo: cassLogo,
    },
    card8: {
      id: uniqid(),
      name: 'MS SQL',
      photo: mssqlLogo,
    },
  },

  {
    card1: {
      id: uniqid(),
      name: 'Set',
      photo: set,
    },
    card2: {
      id: uniqid(),
      name: 'Linked List',
      photo: linkedList,
    },
    card3: {
      id: uniqid(),
      name: 'Hash Table',
      photo: hashTable,
    },
    card4: {
      id: uniqid(),
      name: 'Queue',
      photo: queue,
    },
    card5: {
      id: uniqid(),
      name: 'Stack',
      photo: stack,
    },
    card6: {
      id: uniqid(),
      name: 'Binary Tree',
      photo: binaryTree,
    },
    card7: {
      id: uniqid(),
      name: 'Graph',
      photo: graph,
    },
    card8: {
      id: uniqid(),
      name: 'Trie',
      photo: trie,
    },
  },

  {
    card1: {
      id: uniqid(),
      name: 'Singleton',
      photo: singleton,
    },
    card2: {
      id: uniqid(),
      name: 'Factory',
      photo: factory,
    },
    card3: {
      id: uniqid(),
      name: 'Builder',
      photo: builder,
    },
    card4: {
      id: uniqid(),
      name: 'Adapter',
      photo: adapter,
    },
    card5: {
      id: uniqid(),
      name: 'Decorator',
      photo: decorator,
    },
    card6: {
      id: uniqid(),
      name: 'Facade',
      photo: facade,
    },
    card7: {
      id: uniqid(),
      name: 'Observer',
      photo: observer,
    },
    card8: {
      id: uniqid(),
      name: 'Strategy',
      photo: strategy,
    },
  },
];

export default data;
