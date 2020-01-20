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
   graduation date
)

insert into graduates (Name,Age,Gender,Points)
select Name,Age,Gender,Points from students where Name='Layal'

select e.name,c.name,date from employees e, companies c where c.name = e.company

update graduates set graduation = date();

delete from students where name='Layal';


