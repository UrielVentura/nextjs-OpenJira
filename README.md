# Next.Js OpenJira App

For running locally we need the database

```
docker-compose up -d
```

- The -d flag means **detached**

- MongoDB Local URL:

```
mongodb://localhost:27017/entriesdb
```

## Set environment variables

rename the **.env.template** file to **.env**

## Fill the database with test information

call:

```
http://localhost:3000/api/seed
```
