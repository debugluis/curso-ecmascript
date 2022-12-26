function newUser (name, age, country) {
    var name = name || 'Luis';
    var age = age || 32
    var country = country || 'CO';
    console.log(name, age, country);
}
newUser ();
newUser ('Fanny', '23', 'MX');

function newAdmin (name ='Luis', age = 32, country = 'CO'){
    console.log(name, age, country);
}
newAdmin ();
newAdmin ('Fanny', '23', 'MX');