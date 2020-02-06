# jobBot Dashboard

A dashboard built to display and parse data gathered by [jobBot](https://github.com/mabry1985/jobBot). The goal was to create a pleasant GUI for personal use that would allow me to sort through the various job postings and to be able to display different statistics from those results. Currently the backend for this app resides in it's own repository that you can find [here](https://github.com/mabry1985/jobbot-server)

## Technologies/Libraries/Packages used
React, D3, Node, Express, MongoDB, Heroku, React-Styled-Components

## Installation

Clone the repo 

Navigate to root directory

Install dependencies with 
```bash
yarn install
```

## Usage

Spin up a dev server using 

```bash
yarn start
```

* Clicking on the robot logo three times will open a password input form to allow access to CRUD functionality for 'queries'. The password is simply stored in the function for now and will be moved to an env for production.

## Deployment

```bash
git push heroku master
```

## Known Issues

The D3 functionality is not complete and as such the graphs are not dynamic.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)