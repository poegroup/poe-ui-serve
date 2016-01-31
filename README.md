# poe-ui-serve

An on-the-spot [poe-ui](https://github.com/poegroup/poe-ui) app

## Install

```sh
npm i poe-ui-serve
```

## Usage

`poe-ui-serve` takes an optional `path`, then simply mounts the `index.jade` at the path
inside a barebones app.

If no path is provided, poe-ui-serve defaults to the current working directory

```sh
poe-ui-serve [path]
```

## Examples

```sh
$ poe-ui-serve ./Projects/calendar
# -> grabs the index.jade at ./Projects/calendar and runs it

$ poe-ui-serve
# -> looks for the index.jade in the current directory and runs it
```

## License

MIT
