# Cookly

## Developer Documentation

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
