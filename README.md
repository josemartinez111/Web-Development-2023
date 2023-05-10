# Web-Development-2023 README

##### @vitejs/plugin-react-swc

In some of the projects I replaces Babel with SWC during development. During builds, SWC+esbuild are used when using plugins, and esbuild only otherwise. For big projects that don't require non-standard React extensions, cold start and Hot Module Replacement (HMR) can be significantly faster.

##### Trying to simulate fetching a real api, all of the projects are using `json-server`

#####Command to run `json-server`

```elixir
>$ json-server -w <path-to-json-file> # -w >-> -watch
```

##### You can also create a custom script for it in your `package.json`

```json
"scripts": {
    "dev": "vite",
    "server": "json-server -p 3001 -w <path-to-json-file>",
  },
```

##### useEffect helper

<img width="700" alt="Screenshot 2023-05-10 at 6 17 03 PM" src="https://github.com/josemartinez111/Web-Development-2023/assets/44812411/db932f7d-d612-4afc-87f9-9e877de09b9f">
