------ Install Dependencies -------

1. npm i

------ Create Database in MySQL ------

1. create file .env
2. create PORT and DATABASE_URL: mysql://USER:PASSWORD@HOST:PORT/DATABASE
   (method edit URL https://www.prisma.io/docs/concepts/database-connectors/mysql )
3. npx prisma generate
4. npx prisma migrate dev --name
