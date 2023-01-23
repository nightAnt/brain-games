#!/usr/bin/env node
import { getGreeting } from '../src/cli.js';
import { turnUpGameEven } from '../bin/brain-even';

console.log('Welcome to the Brain Games!');

getGreeting();

turnUpGameEven();