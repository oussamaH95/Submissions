select Name from students;
select * from students where Age>30;
select * from students where Age>30 and Gender='F';
select Points from students where Name='Alex';
insert into students values(7,'Oussama',24,'M',1000);
update students set Points = 500 where name = 'Basma'
update students set Points = 50 where name = 'Alex'
create tablte graduate(
   id int not null primary key auto_increment,
   name varchar2(30) not null unique,
   age int(2),
   gender varchar2(6),
   Points int(4),
   graduation varchar2(15)
)
