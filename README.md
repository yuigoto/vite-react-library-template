# Vite React Library Template

> A template for React libraries written in JavaScript/TypeScript, using Vite as a bundler.

This project is based upon my [Vite Library Template](https://github.com/yuigoto/vite-library-template).

---

## Features:

- Write your components in JavaScript (`.jsx`) or TypeScript (`.tsx`);
- Supports `styled-components` too!;
- Prettier, so all your code is properly formatted;

---

## How to

Clone this repository or use the following command to create your local project:

```
npx degit yuigoto/vite-react-library-template your-project-name
```

Place your library code under the `lib` folder and expose it through its `index.tsx` file.

This project was bootstrapped using `yarn create vite`, so you can use its commands to execute/build the project:

- `yarn dev`: executes the project locally, you can use test-specific code on `src` and import directly from `lib`;
- `yarn build`: builds and bundles your project, also generates definition files for your coding completion pleasure;
- `yarn preview`: not used really, since it's mostly for previewing the production build locally;

> ### Important
>
> This project generates ES modules by default. If you need other builds, like UMD, for example, you might have to tamper with the settings.
>
> When publishing your project, remember to change the package name in `package.json`, and mind the version number too!
>
> Also, if you end up publishing it as a public package on `npm`, you need to add this key to the `package.json` file, or else it will fail:
>
> ```
> "publishConfig": {
>   "access": "public"
> },
> ```

---

## Author

See `AUTHORS.md` for more information.

---

## License

This project is licensed under the `MIT License`. See `LICENSE.md` for details.

---

_&copy;2022 YUITI_
