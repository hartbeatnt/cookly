# Cookly

# Developer Documentation

`npm start` - start webpack dev server to render client side  
`npm run server` - start back-end server  
`npm run schema` - resync database schema  
`npm run schema force` - force database schema rewrite  
`npm test` - run jest testing  
`npm run build` - create an optimized production build into `build/`

## Contribution Guide

### Commit Messages

Commit messages should begin with a verb describing what the commit does, if pulled in: e.g. `Installs react & react-redux as project dependencies`

As a rule of thumb, commit often and keep your commits short and concise.

When committing, prefix your commits with `:EMOJI_NAME:` to categorize your commit. Here are the list of emojis and their respective categories:

:wrench: : `:wrench:` – installing tooling  
:hammer: : `:hammer:` – in-progress feature  
:books: : `:books:` – documentation or code comments  
:lipstick: : `:lipstick:` – front-end styling  
:bug: : `:bug:` – bugfix  
:sparkles: : `:sparkles:` – new feature (mostly applicable to pull requests and not individual commits)  

## Rest

`?` denotes an optional parameter

### Authentication

**/api/auth/signUp**

```plaintext
{POST}
  expected body
    username: STRING
    password: STRING
    email   : STRING

  response
    success : BOOLEAN
    err    ?: STRING
    token  ?: STRING
```

---

**/api/auth/signIn**

```plaintext
{POST}
  expected body
    username: STRING
    password: STRING

  response
    success : BOOLEAN
    err    ?: STRING
    token  ?: STRING
```

---

**/api/ingredients

```plaintext
{GET}
  expected body
    N/A

  response
    success      : BOOLEAN
    err         ?: STRING
    ingredients ?: ARRAY [{id, name, name_en, createdAt, updatedAt}]

{POST}
  expected body
    name     : STRING
    name_en ?: STRING

  response
    success      : BOOLEAN
    err         ?: STRING
    ingredients ?: ARRAY [{id, name, name_en, createdAt, updatedAt}]  

```

**/api/ingredients/:id

```plaintext
{DELETE}
  expected body
    N/A

  response
    success            : BOOLEAN
    err               ?: STRING
    deletedIngredient ?: OBJECT {id, name, name_en, createdAt, updatedAt}
```

**/api/recipe

```plaintext
{GET}
  expected body
    N/A

  response 
    success  : BOOLEAN
    err     ?: STRING
    recipes ?: ARRAY [{name, [ingredients], notes, [arrangements]}]

{POST}
  expected body
    name          : STRING
    notes         : STRING
    ingredients   : ARRAY [{INT, STRING}]
    cook_time    ?: STRING
    arrangements ?: ARRAY [INT]

  response 
    success  : BOOLEAN
    message  : STRING
    err     ?: STRING
    recipe  ?: OBJECT { id, name, notes, ?cooktime, ingredients, ?arrangements}
    