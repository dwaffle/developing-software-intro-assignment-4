# Introduction

This is the assignment for Assignment 4

## Commands for the package

**Compile**: npm run compile

**Run without compiling**: npm run start

**Linting**: 

```
npm run build:lint
```

**Formatting**: 
```
npm run build:format
```

**Tests**: 

```
npm run test
```

**Compile and run**: 
```
npm run start:build
```

**Lint, compile, and run**: 
```
npm run start:build:lint
```

**Lint, format, compile and run**: 
```
npm run start:build:lint:format
```
**Lint, format, test, compile and run**: 
```
npm run start:build:lint:format:test
```

Added NYC for coverage testing, and example Hello() function to test my testing.

Added Yargs for passing in command line paramaters.

## Using Yargs

```
npm run start -- greet -p Bob
```
Expected result: Hello Bob
