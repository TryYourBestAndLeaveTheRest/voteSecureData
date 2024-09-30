// to think this is the only data we will be storing will make it looks like we are not submitting something special and cool so I will want you to check this and update it to match how we want it structure to look like

const user = {
  name: 'Raji Sherifdeen Ayinla',
  age: 12,
  department: 'Chemistry',
  faculty: 'Science',
  School: 'Obafemi Awolowo University, Ile-Ife', // I included the school, faculty and department properties because you mentioned it will be used for school election for now
};
const users = [...user];
const poll = {
  id: 'secquense-of-characters-for-identification-sha',
  creator: user,
  eligibleVoters: [users[0], user[34], users[12]], // this can be replace with array of uploaded details only depending on what we finally agreed to use
  question: 'Choose the President',
  options: ['The first Person', 'The second person', 'The third person'],
  votes: [
    { option: 'The first Person', count: 3 },
    { option: 'The second person', count: 7 },
    { option: 'The third person', count: 0 },
  ],
};
