#!/usr/bin/env node
import minimist from 'minimist';
import info from '../index.js';

const argv = minimist(process.argv.slice(2))

// if (!argv.n && !argv.name) {
//   console.error('You have to input name');
//   process.exit(1);
// }

info(argv);

