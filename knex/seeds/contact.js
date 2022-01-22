exports.seed = async function(knex) {
    // Deletes ALL existing entries
return await knex('contact').del()
  .then( async function () {
    // Inserts seed entries
    return await knex('contact').insert([
      { contact_value: "anis@anis.com", contact_type: "email", verify_code: "12345678", verified:true},
    ]);
  });
};