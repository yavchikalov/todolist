\connect "homestead";

DROP TABLE IF EXISTS "todolist";
DROP SEQUENCE IF EXISTS todolist_id_seq;
CREATE SEQUENCE todolist_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 START 1 CACHE 1;

CREATE TABLE "public"."todolist" (
    "id" integer DEFAULT nextval('todolist_id_seq') NOT NULL,
    "name" text NOT NULL,
    "status" smallint DEFAULT '0' NOT NULL
) WITH (oids = false);

INSERT INTO "todolist" ("id", "name", "status") VALUES
(8,	'Убраться в гараже',	'0'),
(9,	'Помыть посуду',	'0'),
(10,	'Создать todolist',	1);
