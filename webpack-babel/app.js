import slug from 'slug';

const slugged = new Promise((resolve, reject) => {
  resolve(slug('Slug this one!'));
});

slugged.then(res => console.log(res));