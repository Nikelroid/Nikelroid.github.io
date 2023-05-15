# 💻 Web Developer Portfolio

## A modern, clean, & simple to navigate portfolio template for web developers (or any developer)!

### Includes Pertinent Sections for any Web Devloper Developer Portfolio:
✅ Name & Introduction\
✅ About\
✅ Experience\
✅ Projects / Work\
✅ Contact

To add your own info into the template just alter the `src/portfolio.js` file variables. More customization options will come & be incorporated in the future 🔮.

If you have any suggestions on what else you want to be customized through the `portfolio.js` file or added / changed in general please feel free to reach out through the hosted page [contact form](https://forms.gle/vhWrKD32i1d2MSZGA) or leave an issue.

If you would like to contribute to the project take a look at the [Issues](https://github.com/feifyKike/webdev_portfolio/issues).

Want to add a personal touch to the portfolio? Feel free to open a [pull request](https://github.com/feifyKike/webdev_portfolio/pulls).

🙏 **I would greately appreciate proper credit if you do decided to use this portfolio for any of your purposes. Just leaving the footer as is at the bottom of the template <u>*Designed & Created by Maxim Shelepov*</u> would be enough. Thank you.**

## Table of Contents
- [Getting Started](#getting-started)
- [How to Use](#how-to-use)
- [Customizing Sections](#customizing-sections)
- [Deployment](#deployment)
- [Technologies Used](#technologies-used)
- [Future](#future)

## Getting Started

These intructions will help you get the project up and running on your local machine for your development and use.

You will need to install [Git](https://github.com/git-guides/install-git), [Node.js](https://github.com/git-guides/install-git), & [npm](https://www.npmjs.com/package/npm) (which usually comes pre-installed with the latest version of Node.js but if not install via MacOS [Homebrew](https://formulae.brew.sh/formula/node#default) or the npm.js homepage)

### Install necessary project required packages

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

## How to Use

From the command line, clone the repository run the project.
```sh
# Clone the repository
git clone https://github.com/feifyKike/webdev_portfolio.git

# Change into the repository within your current directory
cd webdev_portfolio

# install packages - last step
npm install

# Start the vite development server
npm run dev

# Open up the localhost server in your prefered browser

# Set up git locally to push to remote later during deployment stages
git init

git add .

git commit -m "Initial Commit."

```

## Customizing Sections

To personalize the template to your content and profile change the `src/portfolio.js` file contents. You will also need to change the `index.html` `<title></title>` tag which will display your name in the browser tab. And also don't forget to add your own favicon.ico and favicon.png in the `public` folder.

```javascript

const greeting = {
    intro: "...",
    message: "...",
    basedLocation: "...",
    resumeLink: "...",
    logoAbsoluteLink: "...",
    portraitAbsoluteLink: "..."
}

const about = { ... }

const experiences = { ... }

const works = { ... }

// ...

```

## Deployment

Firstly, prepare your project for production by running:

```sh
# minify and prepare project for production
npm run build

```

### To deploy on Github Pages
1. Add your cloned repository to github.
    - [Set remote repository](https://docs.github.com/en/get-started/using-git/pushing-commits-to-a-remote-repository#remotes-and-forks) for git to point to & [push commits to remote](https://docs.github.com/en/get-started/using-git/pushing-commits-to-a-remote-repository#about-git-push)
2. The github workflow `deploy.yml` file should automatically start the build process for deployment to your github pages url: `https://feifykike.github.io/<REPO_NAME>`
    - For confirmation that the build succeeded take a look at the status (check or X) near the latest commit.
    - If permission errors take a look at the settings page and give the github actions permission to **read & write**.
3. Enjoy & Good Luck!

## Technologies Used
- [Vue.js](https://vuejs.org)
- [Vite.js](https://vitejs.dev)
- [Tailwind.css](https://tailwindcss.com)

## Future
Hope to continue improving the site, as well as adding more components and layout options in the `src/components` folder.

**Planned Future Improvements:**
- Add more layout components to `src/components`.
- More color scheme styling options in `src/portfolio.js`.
- More text and image styling control in `src/portfolio.js`.

💡 Leave your own ideas in the [issues](https://github.com/feifyKike/webdev_portfolio/issues) section or complete my [contact form](https://forms.gle/vhWrKD32i1d2MSZGA).

🛠️ Again if you would like to contribute feel free to open a [pull request](https://github.com/feifyKike/webdev_portfolio/pulls).

🏎️ The project was initially designed in Figma. Check out the [Figma Design here](https://www.figma.com/file/GV3bfT7q5lxLnQFBj8VWra/Web-Dev-Portfolio-2.0).