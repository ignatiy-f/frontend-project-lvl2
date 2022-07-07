# frontend-project-lvl2

[![Actions Status](https://github.com/ignatiy-f/frontend-project-lvl2/workflows/hexlet-check/badge.svg)](https://github.com/ignatiy-f/frontend-project-lvl2/actions)
[![Node CI](https://github.com/ignatiy-f/frontend-project-lvl2/actions/workflows/node.js.yml/badge.svg)](https://github.com/ignatiy-f/frontend-project-lvl2/actions/workflows/node.js.yml)
[![Maintainability](https://api.codeclimate.com/v1/badges/7a3fac631a8bb2f0541f/maintainability)](https://codeclimate.com/github/ignatiy-f/frontend-project-lvl2/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/7a3fac631a8bb2f0541f/test_coverage)](https://codeclimate.com/github/ignatiy-f/frontend-project-lvl2/test_coverage)

## Difference generator

 A "gendiff" is a program that determines the difference between two data structures. This is a popular task for which there are many online services, such as http://www.jsondiff.com/. A similar mechanism is used when outputting tests or when automatically tracking changes in configuration files. Utility features:
 * Support for different input formats: yaml, json
 * Report generation in the form of plain text, stylish and json


## Setup

$ make install

Options:
*    support for three input file types: `json` `yml` `ini`  and three output types: `plain` `diff` `json`
*    `-V, --version` output the version number
*    `-h, --help` output usage information
*    `-f, --format [type]` output format
Compares two files .json and shows a difference

    1. gendiff.json
[![asciicast](https://asciinema.org/a/RhVweJdkef5OnCh127CQDbFwW.svg)](https://asciinema.org/a/RhVweJdkef5OnCh127CQDbFwW)

    2. gendiff.yml
[![asciicast](https://asciinema.org/a/XUmc2xyyU9Lt58I6HO12VJ7C6.svg)](https://asciinema.org/a/XUmc2xyyU9Lt58I6HO12VJ7C6)

    3. gendiff nested
[![asciicast](https://asciinema.org/a/wUqTe6aqPsS8Bz9g1hzJKQhFR.svg)](https://asciinema.org/a/wUqTe6aqPsS8Bz9g1hzJKQhFR)

    4. gendiff plain format
[![asciicast](https://asciinema.org/a/Ido7yHq2YnEesWkifubqmVffe.svg)](https://asciinema.org/a/Ido7yHq2YnEesWkifubqmVffe)

    5. nested files formats json
[![asciicast](https://asciinema.org/a/weqklwi9IkWks1sneHyvRtGKf.svg)](https://asciinema.org/a/weqklwi9IkWks1sneHyvRtGKf)