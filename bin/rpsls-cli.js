#!/usr/bin/env node
//import { rpsls } from 'node-rpsls'
import minimist from 'minimist';

function helpMessage() {
    console.log('Usage: node-rpsls [SHOT]\nPlay the Lizard-Spock Expansion of Rock Paper Scissors (RPSLS)!\n\n',
    '  -h, --help        display this help message and exit\n',
    '  -r, --rules       display the rules and exit\n\nExamples:\n',
    '  node-rpsls        Return JSON with single player RPSLS result.\n',
    '                    e.g. {"player":"rock"}\n',
    '  node-rpsls rock   Return JSON with results for RPSLS played against a simulated opponent.\n',
    '                    e.g {"player":"rock","opponent":"Spock","result":"lose"}')
}

function ruleMessage() {
    console.log('Rules for the Lizard-Spock Expansion of Rock Paper Scissors:\n\n',
    ' - Scissors CUTS Paper\n',
    ' - Paper COVERS Rock\n',
    ' - Rock SMOOSHES Lizard\n',
    ' - Lizard POISONS Spock\n',
    ' - Spock SMASHES Scissors\n',
    ' - Scissors DECAPITATES Lizard\n',
    ' - Lizard EATS Paper\n',
    ' - Paper DISPROVES Spock\n',
    ' - Spock VAPORIZES Rock\n',
    ' - Rock CRUSHES Scissors')
}