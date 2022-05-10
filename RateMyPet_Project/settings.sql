-- settings.sql
CREATE DATABASE ratemypet;
CREATE USER ratemypetadmin WITH PASSWORD 'password';
GRANT ALL PRIVILEGES ON DATABASE ratemypet TO ratemypetadmin;