# Cookly

## Developer Documentation

`npm start` - start webpack dev server to render client side  
`npm run server` - start back-end server  
`npm run schema` - resync database schema
`npm run schema force` - force database schema rewrite

### Rest

`?` denotes an optional parameter

#### Authentication

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
