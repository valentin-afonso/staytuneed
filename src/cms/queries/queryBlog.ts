export const queryBlog = `
query Blog($slug: String!) {
  article(filter: {slug: {in: [$slug]}}) {
    id
    slug
    title
    _createdAt
    _updatedAt
    tags {
      libelle
      id
    }
    image {
      width
      height
      alt(locale: fr)
      blurUpThumb
      url
    }
    readingTime
    content {
      blocks
      links
      value
    }
    author {
      id
      firstname
      lastname
      social
      socialUrl
      pictureProfil {
        url
        width
        height
      }
    }
    seo:_seoMetaTags {
      content
      tag
      attributes
    }
  }
}`;
