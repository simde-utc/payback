alter table theme (
    id serial primary key,
    themeName varchar(255) not null,
    beginDate date check (beginDate < endDate),
    endDate date check (endDate > beginDate),
    colors json
);

drop table colors;