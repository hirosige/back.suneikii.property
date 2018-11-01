require('isomorphic-fetch')

export default event => {

  const wpEndpoint = `
    https://some-wordpress-website.com/wp-json/wp/v2/posts?per_page=${event.data.nbOfPosts}
  `

  return fetch(wpEndpoint)
    .then(response => response.json())
    .then(responseData => {
      let latestPosts = []

      responseData.forEach(post => {
        latestPosts.push({
          title: post.title.rendered,
          content: post.content.rendered
        })
      })

      return {
        data: latestPosts
      }
    })
}
