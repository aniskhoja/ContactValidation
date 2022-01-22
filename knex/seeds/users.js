exports.seed = async function(knex) {
        // Deletes ALL existing entries
    return await knex('users').del()
      .then( async function () {
        // Inserts seed entries
        return await knex('users').insert([
          { firstname: "Anis", lastname: "Khoja", username: "aniskhoja"},
        ]);
      });
  };