create table tb_bank (id  bigserial not null, account_number varchar(255), account_type_label varchar(255), label varchar(255), primary key (id));
create table tb_client (id  bigserial not null, cpf varchar(255), name varchar(255), phone varchar(255), bank_id int8, primary key (id));
alter table if exists tb_client add constraint FKmrx7kvykkkr8bnsqs03b2eqhr foreign key (bank_id) references tb_bank;
create table tb_bank (id  bigserial not null, account_number varchar(255), account_type_label varchar(255), label varchar(255), primary key (id));
create table tb_client (id  bigserial not null, cpf varchar(255), name varchar(255), phone varchar(255), bank_id int8, primary key (id));
alter table if exists tb_client add constraint FKmrx7kvykkkr8bnsqs03b2eqhr foreign key (bank_id) references tb_bank;
