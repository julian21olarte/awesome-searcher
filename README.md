# Awesome Searcher by BoatyardX

This is a [Next.js](https://nextjs.org/) project built using React + Typescript and Material-UI created for BoatyardX coding challenge.

## Getting Started

First, install dependencies:

```bash
yarn
```

Next, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Scope

You can find all custom components in `/components` folder.

You will see a `/components/SearchInput` custom component to create the search input required by the startup.

You can see that this project only contains one Homepage in `/pages/index` showing 3 examples of the `SearchInput` using multiple data sources and styles:

- `/components/LangsSearchInput`
- `/components/FrameworksSearchInput`
- `/components/SuperherosSearchInput`

These components use and extend the generic input search to create more customized search inputs using different sources of data.

A simple search API service was built in `/services/search` to simulate requests to the search algorithm.

Also a custom hook was defined to consume and handle the search algorithm service in every search component, you can find it in `/hooks/useSearch` folder.
