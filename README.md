<p align="center">
  <img src="https://cloud.githubusercontent.com/assets/3129129/22811426/bb69dc06-ef0c-11e6-8092-a0bea9060b35.png"/>
</p>

---

The original readme can be found [here](ORIGINAL_README.md).

# Usage

Fill out the `<>` entries according to your needs:

1. Clone this repo into a static folder in your django project by executing `git clone git@github.com:Innoactive/react-slingshot.git <folder-name>`
2. Change into the newly cloned directory by running `cd <folder-name>` and run `npm run setup`
3. Modify Django's `settings.py` like this:
```python
WEBPACK_LOADER = {
    '<name>': {
        'BUNDLE_DIR_NAME': '<folder-name>/dist/',
        'STATS_FILE': os.path.join(BASE_DIR, '<static-folder-path>/<folder-name>/webpack-stats.json')
    }
}
```
The `WEBPACK_LOADER` config can contain multiple configs.

# Example
Assuming you are in the `src/assets/static` folder, and you clone the repo into a folder called `test`, the config will look like this:
```python
WEBPACK_LOADER = {
    'test': {
        'BUNDLE_DIR_NAME': 'test/dist/',
        'STATS_FILE': os.path.join(BASE_DIR, 'assets/static/test/webpack-stats.json')
    }
}
```

# Development

*NOTE: you need to run `npm install` once*

While developing just start the dev server by executing `npm start -s`

# Production

*NOTE: you need to run `npm install` once*

Run the following command: `npm run build`