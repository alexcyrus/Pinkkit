export default {
  search: function(searchTerm, searchLimit) {
    return fetch(
      `http://www.reddit.com/search.json?q=${searchTerm}&sort=top&limit=${searchLimit}`
    )
      .then(res => res.json())
      .then(data => {
        return data.data.children.map(data => data.data);
      })
      .catch(err => console.log(err));
  }
};