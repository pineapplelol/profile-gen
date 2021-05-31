# profile-gen

A simple personal site generator from which you can select different themes.

## Usage

```bash
npm i -g profile-gen
```

Fill out `data.json` based on [the data file](https://github.com/pineapplelol/profile-gen/blob/master/data.json) with your information. Then to generate your site just run in terminal

```bash
profile-gen data.json
```

and it will make your site in the `profile-site` directory.

### Options

There are a few options that you can use:
- `minify`: Use flag `--minify` or `-m` to minify HTML index file
- `--dir`: To use a custom directory (Default: profile-site)
- `--theme`: To use a custom theme (Default: neeraj)