create table if not exists theme (
    id serial primary key,
    themeName varchar(255) not null,
    beginDate date check (beginDate < endDate),
    endDate date check (endDate > beginDate),
    lightId integer references colors(id),
    darkId integer references colors(id)
);

create table if not exists colors (
    id serial primary key,
    primaryColor varchar(7) check (substring(primaryColor, 1, 1) = '#'),
    secondaryColor varchar(7) check (substring(secondaryColor, 1, 1) = '#'),
    more varchar(7) check (substring(more, 1, 1) = '#'),
    less varchar(7) check (substring(less, 1, 1) = '#'),
    transfer varchar(7) check (substring(transfer, 1, 1) = '#'),
    border varchar(7) check (substring(border, 1, 1) = '#'),
    background varchar(7) check (substring(background, 1, 1) = '#'),
    backgroundBlock varchar(7) check (substring(backgroundBlock, 1, 1) = '#'),
    backgroundBlockAlt varchar(7) check (substring(backgroundBlockAlt, 1, 1) = '#'),
    success varchar(7) check (substring(success, 1, 1) = '#'),
    error varchar(7) check (substring(error, 1, 1) = '#'),
    disabled varchar(7) check (substring(disabled, 1, 1) = '#'),
    shadow varchar(7) check (substring(shadow, 1, 1) = '#'),
    generalAspect varchar(5) check (generalAspect = 'light' or generalAspect = 'dark'),
    hidden boolean
);